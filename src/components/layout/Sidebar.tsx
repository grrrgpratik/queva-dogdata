import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  PawPrint,
  Battery,
  CreditCard
} from 'lucide-react';

const navigation = [
  { name: 'Dashboard', icon: LayoutDashboard, path: '/' },
  { name: 'Customers', icon: Users, path: '/customers' },
  { name: 'Pets', icon: PawPrint, path: '/pets' },
  { name: 'Devices', icon: Battery, path: '/devices' },
  { name: 'Billing', icon: CreditCard, path: '/billing' },
];

export function Sidebar() {
  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
      <div className="flex flex-col flex-grow bg-white border-r border-gray-200">
        <div className="flex items-center h-16 flex-shrink-0 px-4 bg-blue-600">
          <PawPrint className="h-8 w-8 text-white" />
          <span className="ml-2 text-xl font-bold text-white">Queva</span>
        </div>
        <div className="flex-grow flex flex-col pt-5 pb-4 overflow-y-auto">
          <nav className="mt-5 flex-1 px-2 space-y-1">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) => `
                  ${isActive
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  } group flex items-center px-2 py-2 text-sm font-medium rounded-md
                `}
              >
                <item.icon
                  className={({ isActive }) => `
                    ${isActive ? 'text-blue-600' : 'text-gray-400 group-hover:text-gray-500'}
                    mr-3 flex-shrink-0 h-6 w-6
                  `}
                />
                {item.name}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}