import React from 'react';
import { CaloriesResponse } from '../types/api';
import { ActivityBreakdown } from './ActivityBreakdown';
import { CategorySummary } from './CategorySummary';
import { RecommendedActivity } from './RecommendedActivity';
import { LoadingState } from './LoadingState';
import { EmptyState } from './EmptyState';

interface CaloriesDisplayProps {
  data: CaloriesResponse | null;
  isLoading: boolean;
}

export function CaloriesDisplay({ data, isLoading }: CaloriesDisplayProps) {
  if (isLoading) {
    return <LoadingState />;
  }

  if (!data) {
    return <EmptyState />;
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">Activity Overview</h2>
        <p className="text-sm text-gray-600">Daily energy expenditure: {data.rtdee.toFixed(2)} calories</p>
      </div>
      
      <div className="p-6 grid gap-6">
        <ActivityBreakdown activities={data.activities} />
        <CategorySummary categoryDurations={data.category_durations} />
        <RecommendedActivity recommendations={data.recommended_activity_recap} />
      </div>
    </div>
  );
}