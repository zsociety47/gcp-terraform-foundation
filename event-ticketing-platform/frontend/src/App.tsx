import { Navigate, Route, Routes } from 'react-router-dom';

import { EventPage } from '@/pages/EventPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/events/evt-001" replace />} />
      <Route path="/events/:eventId" element={<EventPage />} />
    </Routes>
  );
}
