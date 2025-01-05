import React from 'react';
import { CreditCard, Clock, Shield } from 'lucide-react';

export function Billing() {
  const plans = [
    {
      name: 'Basic',
      price: '$9.99',
      features: ['1 Device', 'Basic Analytics', 'Email Support'],
      recommended: false
    },
    {
      name: 'Pro',
      price: '$19.99',
      features: ['3 Devices', 'Advanced Analytics', 'Priority Support', 'Custom Reports'],
      recommended: true
    },
    {
      name: 'Enterprise',
      price: '$49.99',
      features: ['Unlimited Devices', 'Custom Solutions', '24/7 Support', 'API Access'],
      recommended: false
    }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 transition-colors">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Billing</h1>
        <p className="mt-1 text-gray-500 dark:text-gray-400">Manage your subscription and payment methods</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors
              ${plan.recommended ? 'ring-2 ring-blue-500' : ''}
            `}
          >
            {plan.recommended && (
              <div className="absolute top-0 right-0 -translate-y-1/2 px-3 py-1 bg-blue-500 text-white text-sm font-medium rounded-full">
                Recommended
              </div>
            )}
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{plan.name}</h3>
            <p className="mt-4 text-3xl font-bold text-gray-900 dark:text-white">{plan.price}<span className="text-sm font-normal text-gray-500 dark:text-gray-400">/month</span></p>
            <ul className="mt-6 space-y-4">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center text-gray-600 dark:text-gray-300">
                  <Shield className="h-5 w-5 text-blue-500 mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
            <button className={`mt-8 w-full py-2 px-4 rounded-md font-medium transition-colors
              ${plan.recommended
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              Select Plan
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 transition-colors">
          <div className="flex items-center">
            <CreditCard className="h-6 w-6 text-gray-400 dark:text-gray-500" />
            <h3 className="ml-3 text-lg font-medium text-gray-900 dark:text-white">Payment Method</h3>
          </div>
          <div className="mt-4 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" alt="Mastercard" className="h-8" />
                <span className="ml-3 text-gray-600 dark:text-gray-300">•••• 4242</span>
              </div>
              <button className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
                Edit
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 transition-colors">
          <div className="flex items-center">
            <Clock className="h-6 w-6 text-gray-400 dark:text-gray-500" />
            <h3 className="ml-3 text-lg font-medium text-gray-900 dark:text-white">Billing History</h3>
          </div>
          <div className="mt-4 space-y-4">
            {[
              { date: 'Mar 1, 2024', amount: '$19.99', status: 'Paid' },
              { date: 'Feb 1, 2024', amount: '$19.99', status: 'Paid' }
            ].map((invoice) => (
              <div key={invoice.date} className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 dark:text-gray-300">{invoice.date}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{invoice.amount}</p>
                </div>
                <span className="px-2 py-1 text-sm text-green-700 dark:text-green-400 bg-green-100 dark:bg-green-900 rounded-full">
                  {invoice.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}