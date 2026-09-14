import { Navigate, Route, Routes } from 'react-router-dom';

import { CheckoutPage } from '@/pages/CheckoutPage';
import { EventPage } from '@/pages/EventPage';
import { OrganizerDashboard } from '@/pages/OrganizerDashboard';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/events/evt-001" replace />} />
      <Route path="/events/:eventId" element={<EventPage />} />
      <Route path="/events/:eventId/checkout" element={<CheckoutPage />} />
      <Route path="/organizer/dashboard" element={<OrganizerDashboard />} />
    </Routes>
  );
}
