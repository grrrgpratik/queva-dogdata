import React from 'react';
import { DataTable } from '../components/shared/DataTable';
import { Check, X } from 'lucide-react';

const columns = [
  { key: 'username', header: 'Name' },
  { key: 'email', header: 'Email' },
  { 
    key: 'accountSetup',
    header: 'Account Setup',
    render: (setup: any) => (
      <div className="flex space-x-2">
        {Object.entries(setup).map(([key, value]: [string, any]) => (
          <span key={key} className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
            value ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
          }`}>
            {key.replace(/([A-Z])/g, ' $1').trim()}
            {value ? <Check className="w-3 h-3 ml-1" /> : <X className="w-3 h-3 ml-1" />}
          </span>
        ))}
      </div>
    )
  },
  {
    key: 'subscriptions',
    header: 'Subscription Status',
    render: (subs: any[]) => (
      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
        subs?.[0]?.active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
      }`}>
        {subs?.[0]?.active ? 'Active' : 'Inactive'}
      </span>
    )
  }
];

export function Customers() {
  const mockData = [{
    username: "Pratik Gurung",
    email: "gurung.pratik04@gmail.com",
    accountSetup: {
      accountCreated: true,
      deviceConnected: true,
      dogCreated: true
    },
    subscriptions: [
      {
        active: true,
        renews_at: "2025-05-19T00:00:00"
      }
    ]
  }];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Customers</h1>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Add Customer
        </button>
      </div>
      <DataTable columns={columns} data={mockData} />
    </div>
  );
}