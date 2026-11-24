import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { AppProvider } from './context/AppContext';
import { CurriculumPage } from './pages/CurriculumPage';
import { DashboardPage } from './pages/DashboardPage';
import { ExamResultsPage } from './pages/ExamResultsPage';
import { FlashcardsGlossaryPage } from './pages/FlashcardsGlossaryPage';
import { LessonReaderPage } from './pages/LessonReaderPage';
import { MockExamPage } from './pages/MockExamPage';
import { PracticePage } from './pages/PracticePage';
import { SourcesSettingsPage } from './pages/SourcesSettingsPage';
import { StudyPlanPage } from './pages/StudyPlanPage';

export function App() {
  return (
    <HashRouter>
      <AppProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/curriculum" element={<CurriculumPage />} />
            <Route path="/lessons/:lessonId" element={<LessonReaderPage />} />
            <Route path="/practice" element={<PracticePage />} />
            <Route path="/mock-exam" element={<MockExamPage />} />
            <Route path="/results" element={<ExamResultsPage />} />
            <Route path="/results/:attemptId" element={<ExamResultsPage />} />
            <Route path="/glossary" element={<FlashcardsGlossaryPage />} />
            <Route path="/study-plan" element={<StudyPlanPage />} />
            <Route path="/sources" element={<SourcesSettingsPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Layout>
      </AppProvider>
    </HashRouter>
  );
}

export default App;
