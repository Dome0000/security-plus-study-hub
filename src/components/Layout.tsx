import { useEffect, useState, type ReactNode } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import {
  AlertTriangle,
  Award,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  ClipboardCheck,
  Info,
  Languages,
  Layers,
  LayoutDashboard,
  Menu,
  Moon,
  Search,
  ShieldCheck,
  Sun,
  X
} from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { EXAM_METADATA } from '../data/examMeta';
import { GlobalSearchModal } from './GlobalSearchModal';

const NAV_ITEMS = [
  { to: '/', label: 'แดชบอร์ดภาพรวม', icon: LayoutDashboard, end: true },
  { to: '/curriculum', label: 'หลักสูตรและบทเรียน', icon: BookOpen, end: false },
  { to: '/practice', label: 'ฝึกทำข้อสอบ', icon: ClipboardCheck, end: false },
  { to: '/mock-exam', label: 'สอบจำลอง (Mock Exam)', icon: ShieldCheck, end: false },
  { to: '/results', label: 'ผลสอบและวิเคราะห์จุดอ่อน', icon: Award, end: false },
  { to: '/glossary', label: 'แฟลชการ์ด & คำศัพท์', icon: Layers, end: false },
  { to: '/study-plan', label: 'แผนอ่านสอบ 30 วัน', icon: CalendarDays, end: false },
  { to: '/sources', label: 'แหล่งอ้างอิง & ตั้งค่า', icon: Info, end: false }
] as const;

export function Layout({ children }: { children: ReactNode }) {
  const {
    progress,
    storageWarning,
    openSearch,
    toggleTheme,
    toggleThaiTranslation,
    patchPreferences
  } = useAppContext();

  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setDrawerOpen(false);
  }, [location.pathname, location.search]);

  useEffect(() => {
    if (!drawerOpen) return undefined;
    const handleEsc = (ev: KeyboardEvent) => {
      if (ev.key === 'Escape') {
        setDrawerOpen(false);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [drawerOpen]);

  const isDark = progress.preferences.theme === 'dark';
  const showThai = progress.preferences.showThaiTranslation;
  const isLargeFont = progress.preferences.fontSize === 'large';

  return (
    <div className="app-shell">
      <a href="#main-content" className="skip-link">
        ข้ามไปยังเนื้อหาหลัก
      </a>

      <div
        className={`sidebar-backdrop ${drawerOpen ? 'open' : ''}`}
        aria-hidden="true"
        onClick={() => setDrawerOpen(false)}
      />

      <aside
        id="primary-sidebar"
        className={`app-sidebar ${drawerOpen ? 'open' : ''}`}
        aria-label="แถบนำทางหลัก"
      >
        <div className="sidebar-brand">
          <div>
            <Link to="/" className="sidebar-brand-title">
              <ShieldCheck size={22} aria-hidden="true" style={{ color: 'var(--accent-primary)' }} />
              <span>Security+ Study Hub</span>
            </Link>
            <span className="sidebar-brand-sub">
              {EXAM_METADATA.examCode} • Thai/EN Prep
            </span>
          </div>
          <button
            type="button"
            className="btn btn-sm sidebar-close-btn"
            onClick={() => setDrawerOpen(false)}
            aria-label="ปิดเมนูนำทาง"
          >
            <X size={16} aria-hidden="true" />
          </button>
        </div>

        <nav className="sidebar-nav" aria-label="เมนูหลัก">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
              >
                <Icon size={18} aria-hidden="true" />
                <span>{item.label}</span>
              </NavLink>
            );
          })}
        </nav>

        <div className="sidebar-meta">
          <div style={{ fontWeight: 700, color: 'var(--text-primary)' }}>
            {EXAM_METADATA.examVersion}
          </div>
          <div style={{ marginTop: '4px' }}>
            เปิดสอบถึง: EN {EXAM_METADATA.retirementDateEn} / TH {EXAM_METADATA.retirementDateTh}
          </div>
        </div>
      </aside>

      <div className="app-main-column">
        <header className="app-header">
          <div className="header-left">
            <button
              type="button"
              className="btn btn-sm mobile-menu-btn"
              aria-label="เปิดเมนูนำทาง"
              aria-expanded={drawerOpen}
              aria-controls="primary-sidebar"
              onClick={() => setDrawerOpen((prev) => !prev)}
            >
              <Menu size={18} aria-hidden="true" />
              <span>เมนู</span>
            </button>

            <span className="exam-status-pill">
              <CheckCircle2 size={14} aria-hidden="true" />
              <span>
                {EXAM_METADATA.examCode} Active
              </span>
            </span>

            <span className="header-verified-note">
              ตรวจทานล่าสุด: {EXAM_METADATA.verifiedDate}
            </span>
          </div>

          <div className="header-right">
            <button
              type="button"
              className="btn btn-sm"
              onClick={openSearch}
              aria-label="ค้นหาบทเรียน คำศัพท์ และ Objective (Ctrl+K)"
            >
              <Search size={16} aria-hidden="true" />
              <span>ค้นหา</span>
              <span className="badge" style={{ padding: '1px 6px' }}>
                Ctrl+K
              </span>
            </button>

            <button
              type="button"
              className={`btn btn-sm ${showThai ? 'btn-active' : ''}`}
              aria-pressed={showThai}
              onClick={toggleThaiTranslation}
              title="สลับการแสดงคำแปลภาษาไทยในโจทย์และตัวเลือก"
            >
              <Languages size={16} aria-hidden="true" />
              <span>{showThai ? 'EN+TH' : 'EN เท่านั้น'}</span>
            </button>

            <button
              type="button"
              className={`btn btn-sm ${isLargeFont ? 'btn-active' : ''}`}
              aria-pressed={isLargeFont}
              onClick={() => patchPreferences({ fontSize: isLargeFont ? 'normal' : 'large' })}
              aria-label="สลับขนาดตัวอักษรปกติหรือใหญ่"
              title="ปรับขนาดตัวอักษร"
            >
              <span>{isLargeFont ? 'ก+' : 'ก'}</span>
            </button>

            <button
              type="button"
              className="btn btn-sm"
              onClick={toggleTheme}
              aria-pressed={isDark}
              aria-label={isDark ? 'สลับเป็นโหมดสว่าง' : 'สลับเป็นโหมดมืด'}
            >
              {isDark ? <Sun size={16} aria-hidden="true" /> : <Moon size={16} aria-hidden="true" />}
              <span>{isDark ? 'สว่าง' : 'มืด'}</span>
            </button>
          </div>
        </header>

        {storageWarning && (
          <div style={{ padding: '12px 24px 0' }} className="no-print">
            <div className="alert alert-warning" role="alert">
              <AlertTriangle size={20} aria-hidden="true" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <strong>แจ้งเตือนการจัดเก็บข้อมูลเบราว์เซอร์: </strong>
                {storageWarning}
              </div>
            </div>
          </div>
        )}

        <main id="main-content" className="app-main" tabIndex={-1}>
          {children}
        </main>

        <footer className="app-footer">
          <div className="app-footer-inner">
            <p style={{ margin: 0 }}>{EXAM_METADATA.disclaimerTh}</p>
            <div className="app-footer-links">
              <span>ขอบเขต: {EXAM_METADATA.examCode} ({EXAM_METADATA.examVersion})</span>
              <span>•</span>
              <Link to="/sources">แหล่งอ้างอิง ข้อจำกัด และสำรองข้อมูล JSON</Link>
            </div>
          </div>
        </footer>
      </div>

      <GlobalSearchModal />
    </div>
  );
}
