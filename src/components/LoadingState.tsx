import React from 'react';
import { Activity } from 'lucide-react';

export function LoadingState() {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 text-center">
      <Activity className="w-12 h-12 text-blue-400 animate-spin mx-auto mb-4" />
      <p className="text-gray-600">Loading data...</p>
    </div>
  );
}