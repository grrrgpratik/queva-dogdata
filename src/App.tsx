import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { DashboardLayout } from './components/layout/DashboardLayout';
import { AppRoutes } from './routes';
import { ThemeProvider } from './contexts/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <DashboardLayout>
          <Toaster position="top-right" />
          <AppRoutes />
        </DashboardLayout>
      </BrowserRouter>
    </ThemeProvider>
  );
}