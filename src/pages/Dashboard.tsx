import React from 'react';
import { StatsOverview } from '../components/dashboard/StatsOverview';
import { CaloriesForm } from '../components/CaloriesForm';
import { CaloriesDisplay } from '../components/CaloriesDisplay';
import { useCaloriesData } from '../hooks/useCaloriesData';

export function Dashboard() {
  const { isLoading, caloriesData, fetchData } = useCaloriesData();

  return (
    <div className="space-y-6">
      <StatsOverview />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <CaloriesForm onSubmit={fetchData} isLoading={isLoading} />
        </div>
        <div className="lg:col-span-2">
          <CaloriesDisplay data={caloriesData} isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
}