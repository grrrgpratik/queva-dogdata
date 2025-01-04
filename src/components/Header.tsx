import React, { ReactNode } from 'react';

interface HeaderProps {
  icon: ReactNode;
  title: string;
  subtitle: string;
}

export function Header({ icon, title, subtitle }: HeaderProps) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <div className="bg-blue-600 p-2 rounded-lg">
        {icon}
      </div>
      <div>
        <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
        <p className="text-gray-600 mt-1">{subtitle}</p>
      </div>
    </div>
  );
}