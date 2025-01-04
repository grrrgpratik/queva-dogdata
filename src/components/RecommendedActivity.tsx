import React from 'react';
import { RecommendedActivity as RecommendedActivityType } from '../types/api';

interface RecommendedActivityProps {
  recommendations: RecommendedActivityType[];
}

export function RecommendedActivity({ recommendations }: RecommendedActivityProps) {
  return (
    <div>
      <h3 className="text-md font-semibold mb-3">Recommended Daily Activity</h3>
      <div className="space-y-2">
        {recommendations.map((rec, index) => (
          <div key={index} className="flex justify-between items-center">
            <span className="text-gray-700">{rec.category}</span>
            <span className="text-gray-500">{rec.duration_hrs} hours ({rec.percentage}%)</span>
          </div>
        ))}
      </div>
    </div>
  );
}