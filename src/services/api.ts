import { API_CONFIG } from '../config/api';
import { CaloriesResponse, ApiError } from '../types/api';

export async function fetchCaloriesData(
  collarId: string,
  dogId: string,
  startDate: string,
  endDate: string
): Promise<CaloriesResponse[]> {
  const config = API_CONFIG[import.meta.env.MODE as keyof typeof API_CONFIG];
  
  try {
    const url = `${config.baseUrl}/collars/${collarId}/recap/calories/${dogId}/${startDate}/${endDate}/`;
    
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'who-am-i': 'queva-devs-only'
      },
    });
    
    if (!response.ok) {
      throw new ApiError(`API request failed with status ${response.status}`, response.status);
    }
    
    return await response.json();
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    throw new ApiError((error as Error).message);
  }
}