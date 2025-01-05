import React from 'react';
import { Activity } from '../types/api';

interface ActivityBreakdownProps {
  activities: Activity[];
}

export function ActivityBreakdown({ activities }: ActivityBreakdownProps) {
  return (
    <div>
      <h3 className="text-md font-semibold mb-3 text-gray-900 dark:text-white">Activity Breakdown</h3>
      <div className="space-y-2">
        {activities.map((activity, index) => (
          <div key={index} className="flex justify-between items-center">
            <span className="text-gray-700 dark:text-gray-300">{activity.activity}</span>
            <span className="text-gray-500 dark:text-gray-400">{activity.duration_hours.toFixed(2)} hours</span>
          </div>
        ))}
      </div>
    </div>
  );
}