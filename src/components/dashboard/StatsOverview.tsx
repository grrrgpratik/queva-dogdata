import React from 'react';
import { Users, Battery, PawPrint, Activity } from 'lucide-react';

const stats = [
  { name: 'Total Customers', value: '2,543', change: '+12.5%', icon: Users },
  { name: 'Active Devices', value: '1,921', change: '+5.2%', icon: Battery },
  { name: 'Registered Pets', value: '3,124', change: '+8.1%', icon: PawPrint },
  { name: 'Daily Active Users', value: '1,842', change: '+14.3%', icon: Activity },
];

export function StatsOverview() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.name} className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <stat.icon className="h-6 w-6 text-gray-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">{stat.name}</dt>
                  <dd className="flex items-baseline">
                    <div className="text-2xl font-semibold text-gray-900">{stat.value}</div>
                    <div className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                      {stat.change}
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}