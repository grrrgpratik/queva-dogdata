import React from 'react';
import { Activity } from 'lucide-react';

export function EmptyState() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center transition-colors">
      <Activity className="w-12 h-12 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
      <p className="text-gray-600 dark:text-gray-400">Enter the required information and click "Fetch Calories Data"</p>
    </div>
  );
}