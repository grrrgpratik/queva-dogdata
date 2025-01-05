import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';
import { Customers } from './pages/Customers';
import { Pets } from './pages/Pets';
import { Devices } from './pages/Devices';
import { Billing } from './pages/Billing';
import { Login } from './pages/Login';
import { ProtectedRoute } from './components/ProtectedRoute';
import { DashboardLayout } from './components/layout/DashboardLayout';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <Dashboard />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />
      
      <Route
        path="/customers"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <Customers />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />
      
      <Route
        path="/pets"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <Pets />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />
      
      <Route
        path="/devices"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <Devices />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />
      
      <Route
        path="/billing"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <Billing />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}