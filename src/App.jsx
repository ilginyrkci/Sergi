import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import LoadingScreen from './components/LoadingScreen';
import HomePage from './pages/HomePage';
import StudentPage from './pages/StudentPage';
import WorkDetailPage from './pages/WorkPage';
import QRPrintPage from './pages/QRPrintPage';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(t);
  }, []);

  return (
    <BrowserRouter>
      <div className="noise-overlay" aria-hidden="true" />

      {loading && <LoadingScreen />}

      <div className={`transition-opacity duration-500 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/student/:studentId" element={<StudentPage />} />
          <Route path="/student/:studentId/work/:workId" element={<WorkDetailPage />} />
          <Route path="/qr" element={<QRPrintPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
