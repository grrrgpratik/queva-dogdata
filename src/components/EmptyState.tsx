import React from 'react';
import { Activity } from 'lucide-react';

export function EmptyState() {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 text-center">
      <Activity className="w-12 h-12 text-gray-400 mx-auto mb-4" />
      <p className="text-gray-600">Enter the required information and click "Fetch Calories Data"</p>
    </div>
  );
}