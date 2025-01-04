import React from 'react';
import { Bell, Search, Menu, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

export function TopBar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 transition-colors">
      <button className="px-4 border-r border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 lg:hidden">
        <Menu className="h-6 w-6" />
      </button>
      <div className="flex-1 px-4 flex justify-between">
        <div className="flex-1 flex">
          <div className="w-full flex md:ml-0">
            <div className="relative w-full text-gray-400 focus-within:text-gray-600 dark:focus-within:text-gray-300">
              <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                <Search className="h-5 w-5" />
              </div>
              <input
                className="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 bg-transparent focus:outline-none focus:ring-0 focus:border-transparent sm:text-sm"
                placeholder="Search"
                type="search"
              />
            </div>
          </div>
        </div>
        <div className="ml-4 flex items-center md:ml-6">
          <button
            onClick={toggleTheme}
            className="p-1 rounded-full text-gray-400 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            {theme === 'dark' ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
          </button>
          <button className="ml-3 p-1 rounded-full text-gray-400 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            <Bell className="h-6 w-6" />
          </button>
          <div className="ml-3 relative">
            <div className="flex items-center">
              <img
                className="h-8 w-8 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="User avatar"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}