import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { PawPrint } from 'lucide-react';
import { CaloriesForm } from './components/CaloriesForm';
import { CaloriesDisplay } from './components/CaloriesDisplay';
import { Header } from './components/Header';
import { useCaloriesData } from './hooks/useCaloriesData';

export default function App() {
  const { isLoading, caloriesData, fetchData } = useCaloriesData();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Toaster position="top-right" />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Header 
          icon={<PawPrint className="w-8 h-8 text-white" />}
          title="Queva Calories Dashboard"
          subtitle="Track your pet's daily calorie expenditure"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <CaloriesForm onSubmit={fetchData} isLoading={isLoading} />
          </div>
          
          <div className="lg:col-span-2">
            <CaloriesDisplay data={caloriesData} isLoading={isLoading} />
          </div>
        </div>
      </div>
    </div>
  );
}