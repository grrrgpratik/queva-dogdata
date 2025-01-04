import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { fetchCaloriesData } from '../services/api';
import { CaloriesResponse } from '../types/api';

interface FormData {
  collarId: string;
  dogId: string;
  startDate: string;
  endDate: string;
}

export function useCaloriesData() {
  const [isLoading, setIsLoading] = useState(false);
  const [caloriesData, setCaloriesData] = useState<CaloriesResponse | null>(null);

  const fetchData = async (formData: FormData) => {
    setIsLoading(true);
    try {
      const data = await fetchCaloriesData(
        formData.collarId,
        formData.dogId,
        formData.startDate,
        formData.endDate
      );
      setCaloriesData(data);
      toast.success('Data fetched successfully!');
    } catch (error) {
      toast.error((error as Error).message);
      setCaloriesData(null);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    caloriesData,
    fetchData
  };
}