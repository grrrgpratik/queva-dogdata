// Response types
export interface Activity {
  activity: string;
  category: string;
  duration_hours: number;
}

export interface CategoryDurations {
  resting: number;
  light_activity: number;
  intense_activity: number;
}

export interface RecommendedActivity {
  category: string;
  duration_hrs: number;
  percentage: number;
}

export interface CaloriesResponse {
  stdee: number;
  dog_id: string;
  collar_id: string;
  rtdee: number;
  activities: Activity[];
  category_durations: CategoryDurations;
  recommended_activity_recap: RecommendedActivity[];
}

// Error types
export class ApiError extends Error {
  status?: number;
  
  constructor(message: string, status?: number) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
  }
}