import React from 'react';
import { CategoryDurations } from '../types/api';
import { formatCategoryName } from '../utils/formatters';

interface CategorySummaryProps {
  categoryDurations: CategoryDurations;
}

export function CategorySummary({ categoryDurations }: CategorySummaryProps) {
  return (
    <div>
      <h3 className="text-md font-semibold mb-3 text-gray-900 dark:text-white">Category Summary</h3>
      <div className="space-y-2">
        {Object.entries(categoryDurations || {}).map(([category, duration]) => (
          <div key={category} className="flex justify-between items-center">
            <span className="text-gray-700 dark:text-gray-300">{formatCategoryName(category)}</span>
            <span className="text-gray-500 dark:text-gray-400">{duration.toFixed(2)} hours</span>
          </div>
        ))}
      </div>
    </div>
  );
}