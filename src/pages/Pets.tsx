import React from 'react';
import { DataTable } from '../components/shared/DataTable';

const columns = [
  { 
    key: 'picture',
    header: 'Pet',
    render: (pic: string) => (
      <img src={pic} alt="Pet" className="w-10 h-10 rounded-full object-cover" />
    )
  },
  { key: 'name', header: 'Name' },
  { key: 'breed', header: 'Breed' },
  { key: 'weight', header: 'Weight (kg)' },
  { key: 'size', header: 'Size' },
  {
    key: 'activity_level',
    header: 'Activity Level',
    render: (level: number) => (
      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
        level === 1 ? 'bg-blue-100 text-blue-800' :
        level === 2 ? 'bg-green-100 text-green-800' :
        'bg-yellow-100 text-yellow-800'
      }`}>
        {level === 1 ? 'Low' : level === 2 ? 'Medium' : 'High'}
      </span>
    )
  }
];

export function Pets() {
  const mockData = [{
    picture: "https://storagequevaprod.blob.core.windows.net/dogsprofilepictures/675de8573f0ba5673d46043e_20241214202119354857_200.jpeg",
    name: "Wendy",
    breed: "NOVA SCOTIA DUCK TOLLING RETRIEVER",
    weight: "18",
    size: "medium",
    activity_level: 1
  }];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Pets</h1>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Register Pet
        </button>
      </div>
      <DataTable columns={columns} data={mockData} />
    </div>
  );
}