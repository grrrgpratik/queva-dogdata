import React from 'react';
import { Activity } from 'lucide-react';

export function LoadingState() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center transition-colors">
      <Activity className="w-12 h-12 text-blue-400 dark:text-blue-500 animate-spin mx-auto mb-4" />
      <p className="text-gray-600 dark:text-gray-400">Loading data...</p>
    </div>
  );
}