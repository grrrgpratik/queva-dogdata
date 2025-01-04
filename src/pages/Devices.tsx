import React from 'react';
import { DataTable } from '../components/shared/DataTable';
import { Battery } from 'lucide-react';

const columns = [
  { key: 'serial_number', header: 'Serial Number' },
  { key: 'main_owner', header: 'Owner ID' },
  {
    key: 'configurations',
    header: 'Status',
    render: (configs: any[]) => (
      <div className="flex items-center space-x-2">
        <Battery className={`w-4 h-4 ${configs?.[0]?.active ? 'text-green-500' : 'text-gray-400'}`} />
        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
          configs?.[0]?.active ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
        }`}>
          {configs?.[0]?.active ? 'Connected' : 'Disconnected'}
        </span>
      </div>
    )
  }
];

export function Devices() {
  const mockData = [{
    serial_number: "01001QD002001058",
    main_owner: "67732a9d8c30bda836f59c9d",
    configurations: [
      {
        dog_id: "67732b3f74b68ab0f7f59c9f",
        active: true
      }
    ]
  }];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Devices</h1>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Add Device
        </button>
      </div>
      <DataTable columns={columns} data={mockData} />
    </div>
  );
}