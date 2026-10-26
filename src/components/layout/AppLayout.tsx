import { Outlet } from 'react-router-dom';
import Navbar from '../ui/Navbar';
import FooterSection from '../../sections/FooterSection';
import ScrollToTopAndHash from '../ScrollToTopAndHash';
import CinematicPreloader from '../CinematicPreloader';

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-[#0B3215] text-white flex flex-col selection:bg-emerald-500/20 selection:text-white">
      {/* Brand Cinematic Preloader */}
      <CinematicPreloader />

      {/* Synchronizes scroll to top or anchor with header offset */}
      <ScrollToTopAndHash />

      {/* Global Navbar */}
      <Navbar />

      {/* Main Page Content */}
      <main className="flex-1 w-full" style={{ overflowX: 'clip' }}>
        <Outlet />
      </main>

      {/* Global Animated Footer */}
      <FooterSection />
    </div>
  );
}
