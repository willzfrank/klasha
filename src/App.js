import '../src/css/app.css';
import React from 'react';
import DashboardPage from './Pages/DashboardPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
        </Routes>
      </Router>
    </div>
  );
}
