import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';
import { Customers } from './pages/Customers';
import { Pets } from './pages/Pets';
import { Devices } from './pages/Devices';
import { Billing } from './pages/Billing';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/pets" element={<Pets />} />
      <Route path="/devices" element={<Devices />} />
      <Route path="/billing" element={<Billing />} />
    </Routes>
  );
}