import { STORAGE_KEY } from './progressStore';

export interface MultiTabMessage {
  type: 'EXAM_HEARTBEAT' | 'EXAM_SUBMITTED';
  tabId: string;
  sessionId: string;
  timestamp: number;
}

const CHANNEL_NAME = 'security-plus-study-hub-exam-sync';

export function createTabId(): string {
  return `tab-${Math.random().toString(36).slice(2, 10)}-${Date.now().toString(36)}`;
}

/**
 * Monitors BroadcastChannel & localStorage events so opening the same active exam
 * in multiple browser tabs immediately alerts the learner to avoid conflicting state.
 */
export function subscribeExamTabGuard(
  sessionId: string,
  tabId: string,
  onConflictDetected: (message: string) => void
): () => void {
  let channel: BroadcastChannel | null = null;

  const notify = (msg: MultiTabMessage) => {
    if (msg.sessionId === sessionId && msg.tabId !== tabId) {
      if (msg.type === 'EXAM_SUBMITTED') {
        onConflictDetected(
          'การสอบชุดนี้ถูกส่งคำตอบแล้วจากอีกแท็บหนึ่ง กรุณาตรวจสอบผลสอบล่าสุดหรือรีเฟรชหน้านี้'
        );
      } else {
        onConflictDetected(
          'ตรวจพบว่าคุณเปิดการสอบชุดเดียวกันอยู่ในแท็บเบราว์เซอร์อื่น แนะนำให้ใช้เพียงแท็บเดียวเพื่อป้องกันข้อมูลทับกัน'
        );
      }
    }
  };

  if (typeof window !== 'undefined' && 'BroadcastChannel' in window) {
    channel = new BroadcastChannel(CHANNEL_NAME);
    channel.onmessage = (ev: MessageEvent<MultiTabMessage>) => {
      if (ev.data && typeof ev.data === 'object') {
        notify(ev.data);
      }
    };
    channel.postMessage({
      type: 'EXAM_HEARTBEAT',
      tabId,
      sessionId,
      timestamp: Date.now()
    } satisfies MultiTabMessage);
  }

  const handleStorageEvent = (ev: StorageEvent) => {
    if (ev.key === STORAGE_KEY) {
      onConflictDetected(
        'ข้อมูลการสอบใน LocalStorage ถูกอัปเดตจากแท็บอื่น กรุณาหลีกเลี่ยงการเปิดข้อสอบเดียวกันหลายแท็บพร้อมกัน'
      );
    }
  };

  if (typeof window !== 'undefined') {
    window.addEventListener('storage', handleStorageEvent);
  }

  const intervalId =
    typeof window !== 'undefined'
      ? window.setInterval(() => {
          channel?.postMessage({
            type: 'EXAM_HEARTBEAT',
            tabId,
            sessionId,
            timestamp: Date.now()
          } satisfies MultiTabMessage);
        }, 4000)
      : null;

  return () => {
    if (intervalId !== null && typeof window !== 'undefined') {
      window.clearInterval(intervalId);
    }
    if (typeof window !== 'undefined') {
      window.removeEventListener('storage', handleStorageEvent);
    }
    channel?.close();
  };
}

export function broadcastExamSubmitted(sessionId: string, tabId: string): void {
  if (typeof window !== 'undefined' && 'BroadcastChannel' in window) {
    const channel = new BroadcastChannel(CHANNEL_NAME);
    channel.postMessage({
      type: 'EXAM_SUBMITTED',
      tabId,
      sessionId,
      timestamp: Date.now()
    } satisfies MultiTabMessage);
    channel.close();
  }
}
