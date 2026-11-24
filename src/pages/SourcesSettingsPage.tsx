import { useId, useState } from 'react';
import {
  AlertTriangle,
  CheckCircle2,
  Download,
  ExternalLink,
  Info,
  Languages,
  Moon,
  ShieldAlert,
  Sun,
  Trash2,
  Upload
} from 'lucide-react';
import { ConfirmModal } from '../components/ConfirmModal';
import { useAppContext } from '../context/AppContext';
import { EXAM_METADATA } from '../data/examMeta';
import { exportProgressJson, parseImportedProgressJson } from '../storage';

export function SourcesSettingsPage() {
  const {
    progress,
    patchPreferences,
    toggleTheme,
    toggleThaiTranslation,
    importProgress,
    resetProgress
  } = useAppContext();

  const [importText, setImportText] = useState('');
  const [importFeedback, setImportFeedback] = useState<{
    ok: boolean;
    message: string;
  } | null>(null);
  const [resetModalOpen, setResetModalOpen] = useState(false);

  const fileInputId = useId();
  const pasteAreaId = useId();

  const handleExportJson = () => {
    const jsonString = exportProgressJson(progress);
    const blob = new Blob([jsonString], { type: 'application/json;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const dateStamp = new Date().toISOString().slice(0, 10);

    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = `security-plus-sy0-701-progress-${dateStamp}.json`;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
    URL.revokeObjectURL(url);
  };

  const applyImportRaw = (raw: string) => {
    const res = parseImportedProgressJson(raw);
    if (!res.ok) {
      setImportFeedback({ ok: false, message: res.errorTh });
      return;
    }
    importProgress(res.progress);
    setImportFeedback({
      ok: true,
      message: 'นำเข้าข้อมูลความคืบหน้าสำเร็จ และบันทึกลงในเบราว์เซอร์เรียบร้อยแล้ว'
    });
    setImportText('');
  };

  const handleFileImport = (file: File | undefined) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        applyImportRaw(reader.result);
      } else {
        setImportFeedback({ ok: false, message: 'ไม่สามารถอ่านเนื้อหาไฟล์เป็นข้อความได้' });
      }
    };
    reader.onerror = () => {
      setImportFeedback({ ok: false, message: 'เกิดข้อผิดพลาดในการอ่านไฟล์' });
    };
    reader.readAsText(file);
  };

  return (
    <div className="stack-lg">
      <div className="page-header">
        <div>
          <h1>แหล่งอ้างอิง ข้อจำกัด และจัดการข้อมูล (Sources & Settings)</h1>
          <p className="page-subtitle">
            ข้อมูลขอบเขตการสอบ {EXAM_METADATA.examCode}, นโยบายความเป็นส่วนตัวบนเบราว์เซอร์ และการสำรอง/นำเข้าข้อมูล
          </p>
        </div>
      </div>

      {/* 1. Exam Info & Official Sources */}
      <section className="card stack-md" aria-label="ข้อมูลการสอบและแหล่งอ้างอิงทางการ">
        <h2 style={{ margin: 0 }}>ขอบเขตการสอบและแหล่งอ้างอิงทางการ</h2>
        <div className="table-scroll">
          <table className="data-table">
            <tbody>
              <tr>
                <th scope="row" style={{ width: '240px' }}>รหัสวิชา / เวอร์ชัน</th>
                <td>
                  <strong>{EXAM_METADATA.certificationName}</strong> — {EXAM_METADATA.examCode} (
                  {EXAM_METADATA.examVersion})
                </td>
              </tr>
              <tr>
                <th scope="row">สถานะปัจจุบัน</th>
                <td>
                  <span className="badge badge-success">
                    <CheckCircle2 size={14} aria-hidden="true" />
                    Active (เปิดสอบอยู่) • ตรวจทานล่าสุด {EXAM_METADATA.verifiedDate}
                  </span>
                </td>
              </tr>
              <tr>
                <th scope="row">วันเปิดตัว & กำหนดปิดสอบ</th>
                <td>
                  เปิดตัว {EXAM_METADATA.launchDate} • ปิดสอบภาษาอังกฤษ {EXAM_METADATA.retirementDateEn}{' '}
                  • ปิดสอบภาษาไทย/ญี่ปุ่น/โปรตุเกส/สเปน {EXAM_METADATA.retirementDateTh}
                </td>
              </tr>
              <tr>
                <th scope="row">หมายเหตุ SY0-801</th>
                <td>{EXAM_METADATA.newerVersionNote}</td>
              </tr>
              <tr>
                <th scope="row">โครงสร้างข้อสอบอ้างอิง</th>
                <td>
                  สูงสุด {EXAM_METADATA.maxQuestions} ข้อ • เวลา {EXAM_METADATA.durationMinutes} นาที •
                  เกณฑ์ผ่านทางการ {EXAM_METADATA.officialPassingScore} (สเกล{' '}
                  {EXAM_METADATA.officialScoreScale})
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="stack-sm">
          <strong style={{ fontSize: 'var(--text-sm)' }}>แหล่งอ้างอิงอย่างเป็นทางการ:</strong>
          <ul style={{ margin: 0, paddingLeft: '20px' }}>
            {EXAM_METADATA.officialSources.map((src) => (
              <li key={src.title} style={{ marginBottom: '4px' }}>
                <a
                  href={src.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}
                >
                  <span>{src.title}</span>
                  <ExternalLink size={14} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 2. Disclaimers & Limitations */}
      <section className="card stack-md" aria-label="ข้อจำกัดและคำชี้แจงสิทธิ์">
        <h2 style={{ margin: 0 }}>ข้อจำกัดของเว็บไซต์และคำชี้แจงสิทธิ์ (Disclaimer)</h2>
        <div className="alert alert-info">
          <Info size={20} aria-hidden="true" style={{ flexShrink: 0, marginTop: '2px' }} />
          <div className="stack-sm prose-text">
            <p style={{ margin: 0 }}>{EXAM_METADATA.disclaimerTh}</p>
            <p style={{ margin: 0 }}>{EXAM_METADATA.mockFormStructureNote}</p>
            <p style={{ margin: 0 }}>
              เกณฑ์ <strong>เป้าหมายการฝึก {EXAM_METADATA.practiceTargetPercent}%</strong>{' '}
              คำนวณแบบเปอร์เซ็นต์ดิบสำหรับฝึกทบทวนเท่านั้น ไม่ใช่คะแนน Scaled Score ({EXAM_METADATA.officialPassingScore}/900) ของ CompTIA
            </p>
          </div>
        </div>
      </section>

      {/* 3. Display Preferences */}
      <section className="card stack-md" aria-label="ตั้งค่าการแสดงผล">
        <h2 style={{ margin: 0 }}>ตั้งค่าการแสดงผล (Preferences)</h2>
        <div className="btn-row">
          <button
            type="button"
            className="btn"
            aria-pressed={progress.preferences.theme === 'dark'}
            onClick={toggleTheme}
          >
            {progress.preferences.theme === 'dark' ? (
              <Sun size={16} aria-hidden="true" />
            ) : (
              <Moon size={16} aria-hidden="true" />
            )}
            <span>
              ธีมปัจจุบัน: {progress.preferences.theme === 'dark' ? 'โหมดมืด (Dark)' : 'โหมดสว่าง (Light)'}
            </span>
          </button>

          <button
            type="button"
            className={`btn ${progress.preferences.showThaiTranslation ? 'btn-active' : ''}`}
            aria-pressed={progress.preferences.showThaiTranslation}
            onClick={toggleThaiTranslation}
          >
            <Languages size={16} aria-hidden="true" />
            <span>
              คำแปลภาษาไทยในโจทย์:{' '}
              {progress.preferences.showThaiTranslation ? 'เปิด (EN+TH)' : 'ปิด (EN เท่านั้น)'}
            </span>
          </button>

          <button
            type="button"
            className={`btn ${progress.preferences.fontSize === 'large' ? 'btn-active' : ''}`}
            aria-pressed={progress.preferences.fontSize === 'large'}
            onClick={() =>
              patchPreferences({
                fontSize: progress.preferences.fontSize === 'large' ? 'normal' : 'large'
              })
            }
          >
            <span>
              ขนาดตัวอักษร: {progress.preferences.fontSize === 'large' ? 'ใหญ่ (Large)' : 'ปกติ (Normal)'}
            </span>
          </button>
        </div>
      </section>

      {/* 4. Privacy Notice + Export / Import JSON */}
      <section className="card stack-md" aria-label="การจัดเก็บข้อมูลและสำรองข้อมูล">
        <h2 style={{ margin: 0 }}>การบันทึกข้อมูล สำรอง และกู้คืน (LocalStorage & JSON)</h2>

        <div className="alert alert-warning" role="note">
          <ShieldAlert size={20} aria-hidden="true" style={{ flexShrink: 0, marginTop: '2px' }} />
          <div className="prose-text">
            <strong>ความเป็นส่วนตัวและการจัดเก็บข้อมูล: </strong>
            ข้อมูลบันทึกเฉพาะในเบราว์เซอร์นี้ ไม่ sync ข้ามอุปกรณ์โดยอัตโนมัติ และการล้างข้อมูลเบราว์เซอร์อาจทำให้ความคืบหน้าหายได้ (แนะนำให้ส่งออกไฟล์ JSON สำรองไว้เป็นระยะ)
          </div>
        </div>

        <div className="btn-row">
          <span className="badge">บทเรียนที่จบ: {progress.completedLessonIds.length}</span>
          <span className="badge">ข้อสอบที่เคยตอบ: {Object.keys(progress.questionHistory).length}</span>
          <span className="badge">ประวัติ Mock Exam: {progress.examAttempts.length} ครั้ง</span>
          <span className="badge">
            วันในแผนอ่านสอบที่เสร็จ: {progress.completedStudyDays.length} วัน
          </span>
        </div>

        <div className="grid-2">
          <div className="card-subtle stack-sm">
            <h3 style={{ margin: 0 }}>ส่งออกความคืบหน้า (Export JSON)</h3>
            <p style={{ margin: 0, fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>
              ดาวน์โหลดไฟล์สำรองความคืบหน้าทั้งหมด (บทเรียน ประวัติข้อสอบ ผล Mock Exam แฟลชการ์ด และแผนอ่านสอบ)
            </p>
            <div>
              <button type="button" className="btn btn-primary" onClick={handleExportJson}>
                <Download size={16} aria-hidden="true" />
                <span>ส่งออกไฟล์สำรอง (Export JSON)</span>
              </button>
            </div>
          </div>

          <div className="card-subtle stack-sm">
            <h3 style={{ margin: 0 }}>นำเข้าความคืบหน้า (Import JSON)</h3>
            <div className="field-group">
              <label htmlFor={fileInputId} className="field-label">
                เลือกไฟล์ .json จากเครื่องของคุณ
              </label>
              <input
                id={fileInputId}
                type="file"
                accept=".json,application/json"
                className="input"
                onChange={(ev) => {
                  const file = ev.target.files?.[0];
                  handleFileImport(file);
                  ev.target.value = '';
                }}
              />
            </div>

            <div className="field-group">
              <label htmlFor={pasteAreaId} className="field-label">
                หรือวางข้อความ JSON ที่ส่งออกไว้
              </label>
              <textarea
                id={pasteAreaId}
                className="textarea"
                placeholder='{"app":"security-plus-study-hub", ...}'
                value={importText}
                onChange={(ev) => setImportText(ev.target.value)}
              />
            </div>

            <div>
              <button
                type="button"
                className="btn"
                disabled={importText.trim().length === 0}
                onClick={() => applyImportRaw(importText)}
              >
                <Upload size={16} aria-hidden="true" />
                <span>นำเข้าข้อมูลจากข้อความ JSON</span>
              </button>
            </div>
          </div>
        </div>

        {importFeedback && (
          <div
            className={`alert ${importFeedback.ok ? 'alert-success' : 'alert-danger'}`}
            role="status"
          >
            {importFeedback.ok ? (
              <CheckCircle2 size={18} aria-hidden="true" />
            ) : (
              <AlertTriangle size={18} aria-hidden="true" />
            )}
            <span>{importFeedback.message}</span>
          </div>
        )}
      </section>

      {/* 5. Danger Zone */}
      <section className="card stack-sm" aria-label="ล้างข้อมูลความคืบหน้า">
        <h2 style={{ margin: 0, color: 'var(--status-danger-text)' }}>
          ล้างความคืบหน้าทั้งหมด (Reset Progress)
        </h2>
        <p style={{ margin: 0, fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>
          การดำเนินการนี้จะลบบทเรียนที่จบ ประวัติการทำข้อสอบ ผลสอบจำลอง และแผนอ่านสอบออกจากเบราว์เซอร์นี้อย่างถาวร
        </p>
        <div>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => setResetModalOpen(true)}
          >
            <Trash2 size={16} aria-hidden="true" />
            <span>ล้างความคืบหน้าทั้งหมด</span>
          </button>
        </div>
      </section>

      <ConfirmModal
        open={resetModalOpen}
        tone="danger"
        title="ยืนยันการล้างข้อมูลความคืบหน้าทั้งหมด"
        description="คุณแน่ใจหรือไม่ว่าต้องการลบข้อมูลการเรียน ประวัติข้อสอบ และผลสอบจำลองทั้งหมดในเบราว์เซอร์นี้? การกระทำนี้ไม่สามารถย้อนกลับได้ (เว้นแต่คุณมีไฟล์สำรอง JSON)"
        confirmLabel="ยืนยันลบข้อมูลทั้งหมด"
        cancelLabel="ยกเลิก"
        onConfirm={() => {
          resetProgress();
          setResetModalOpen(false);
          setImportFeedback({
            ok: true,
            message: 'ล้างข้อมูลความคืบหน้าทั้งหมดกลับเป็นค่าเริ่มต้นแล้ว'
          });
        }}
        onCancel={() => setResetModalOpen(false)}
      />
    </div>
  );
}
