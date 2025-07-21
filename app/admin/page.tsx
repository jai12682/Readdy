'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState('clients');
  const [clients, setClients] = useState([
    {
      id: 1,
      email: 'john.doe@example.com',
      status: 'Active',
      balance: 12547.83,
      multiplier: 1.0,
      lastTrade: '2 minutes ago',
      totalTrades: 24,
      pnl: 5.2
    },
    {
      id: 2,
      email: 'jane.smith@example.com',
      status: 'Active',
      balance: 8932.41,
      multiplier: 0.5,
      lastTrade: '5 minutes ago',
      totalTrades: 18,
      pnl: 3.1
    },
    {
      id: 3,
      email: 'mike.johnson@example.com',
      status: 'Disconnected',
      balance: 15621.22,
      multiplier: 1.5,
      lastTrade: '2 hours ago',
      totalTrades: 42,
      pnl: -1.8
    }
  ]);

  const [logs, setLogs] = useState([
    { id: 1, timestamp: '2024-01-15 14:23:15', type: 'Trade', message: 'BTC/USDT Long executed for 3 clients', status: 'Success' },
    { id: 2, timestamp: '2024-01-15 14:20:32', type: 'API', message: 'Client API sync successful - john.doe@example.com', status: 'Success' },
    { id: 3, timestamp: '2024-01-15 14:18:45', type: 'Error', message: 'Rate limit exceeded - retrying in 60s', status: 'Warning' },
    { id: 4, timestamp: '2024-01-15 14:15:22', type: 'Trade', message: 'ETH/USDT Short executed for 2 clients', status: 'Success' },
    { id: 5, timestamp: '2024-01-15 14:12:08', type: 'System', message: 'Master trader connected successfully', status: 'Success' }
  ]);

  const updateMultiplier = (clientId: number, newMultiplier: number) => {
    setClients(clients.map(client => 
      client.id === clientId ? { ...client, multiplier: newMultiplier } : client
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <img 
                src="https://static.readdy.ai/image/62245e7e79f073126bf3d4b3885b372a/567ef5531b3859efb1f67c3aa90b1f17.png" 
                alt="Stratible Logo"
                className="h-10 w-auto"
              />
              <div>
                <p className="text-xs text-slate-600">Admin Dashboard</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm font-medium text-slate-800">Master Trader</p>
                <p className="text-xs text-green-600">Online</p>
              </div>
              <Link href="/" className="p-2 text-slate-600 hover:text-slate-800 cursor-pointer">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-logout-box-line"></i>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 text-sm">Active Clients</p>
                <p className="text-3xl font-bold text-blue-600">
                  {clients.filter(c => c.status === 'Active').length}
                </p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <i className="ri-user-line text-blue-600 text-xl"></i>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 text-sm">Total Volume</p>
                <p className="text-3xl font-bold text-green-600">
                  ${clients.reduce((sum, c) => sum + c.balance, 0).toLocaleString()}
                </p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <i className="ri-funds-line text-green-600 text-xl"></i>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 text-sm">Today's Trades</p>
                <p className="text-3xl font-bold text-purple-600">84</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <i className="ri-exchange-line text-purple-600 text-xl"></i>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 text-sm">Success Rate</p>
                <p className="text-3xl font-bold text-yellow-600">87%</p>
              </div>
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                <i className="ri-trophy-line text-yellow-600 text-xl"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-xl shadow-sm mb-6">
          <div className="border-b">
            <nav className="flex space-x-8 px-6">
              <button
                onClick={() => setActiveTab('clients')}
                className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap cursor-pointer ${
                  activeTab === 'clients'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-slate-500 hover:text-slate-700'
                }`}
              >
                Client Management
              </button>
              <button
                onClick={() => setActiveTab('logs')}
                className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap cursor-pointer ${
                  activeTab === 'logs'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-slate-500 hover:text-slate-700'
                }`}
              >
                System Logs
              </button>
              <button
                onClick={() => setActiveTab('settings')}
                className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap cursor-pointer ${
                  activeTab === 'settings'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-slate-500 hover:text-slate-700'
                }`}
              >
                Settings
              </button>
            </nav>
          </div>

          <div className="p-6">
            {/* Client Management Tab */}
            {activeTab === 'clients' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-slate-800">Active Clients</h2>
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Search clients..."
                        className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                      />
                      <div className="absolute left-3 top-2.5 w-4 h-4 flex items-center justify-center">
                        <i className="ri-search-line text-gray-400"></i>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 font-medium text-slate-600">Client</th>
                        <th className="text-left py-3 px-4 font-medium text-slate-600">Status</th>
                        <th className="text-left py-3 px-4 font-medium text-slate-600">Balance</th>
                        <th className="text-left py-3 px-4 font-medium text-slate-600">Multiplier</th>
                        <th className="text-left py-3 px-4 font-medium text-slate-600">Last Trade</th>
                        <th className="text-left py-3 px-4 font-medium text-slate-600">PnL</th>
                        <th className="text-left py-3 px-4 font-medium text-slate-600">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {clients.map((client) => (
                        <tr key={client.id} className="border-b hover:bg-gray-50">
                          <td className="py-4 px-4">
                            <div>
                              <p className="font-medium text-slate-800">{client.email}</p>
                              <p className="text-sm text-slate-600">{client.totalTrades} trades</p>
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              client.status === 'Active' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-red-100 text-red-800'
                            }`}>
                              {client.status}
                            </span>
                          </td>
                          <td className="py-4 px-4 font-medium">
                            ${client.balance.toLocaleString()}
                          </td>
                          <td className="py-4 px-4">
                            <input
                              type="number"
                              value={client.multiplier}
                              onChange={(e) => updateMultiplier(client.id, parseFloat(e.target.value))}
                              step="0.1"
                              min="0.1"
                              max="2.0"
                              className="w-20 px-2 py-1 border rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                            />
                          </td>
                          <td className="py-4 px-4 text-sm text-slate-600">
                            {client.lastTrade}
                          </td>
                          <td className="py-4 px-4">
                            <span className={`font-medium ${
                              client.pnl >= 0 ? 'text-green-600' : 'text-red-600'
                            }`}>
                              {client.pnl >= 0 ? '+' : '-'}{client.pnl}%
                            </span>
                          </td>
                          <td className="py-4 px-4">
                            <div className="flex items-center space-x-2">
                              <button className="p-2 text-blue-600 hover:bg-blue-50 rounded cursor-pointer">
                                <div className="w-4 h-4 flex items-center justify-center">
                                  <i className="ri-settings-line"></i>
                                </div>
                              </button>
                              <button className="p-2 text-red-600 hover:bg-red-50 rounded cursor-pointer">
                                <div className="w-4 h-4 flex items-center justify-center">
                                  <i className="ri-pause-line"></i>
                                </div>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* System Logs Tab */}
            {activeTab === 'logs' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-slate-800">System Logs</h2>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer">
                    <div className="w-4 h-4 inline-block mr-2">
                      <i className="ri-refresh-line"></i>
                    </div>
                    Refresh
                  </button>
                </div>

                <div className="space-y-3">
                  {logs.map((log) => (
                    <div key={log.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          log.status === 'Success' ? 'bg-green-100' :
                          log.status === 'Warning' ? 'bg-yellow-100' : 'bg-red-100'
                        }`}>
                          <i className={`text-sm ${
                            log.status === 'Success' ? 'ri-check-line text-green-600' :
                            log.status === 'Warning' ? 'ri-warning-line text-yellow-600' : 'ri-close-line text-red-600'
                          }`}></i>
                        </div>
                        <div>
                          <p className="font-medium text-slate-800">{log.message}</p>
                          <p className="text-sm text-slate-600">{log.timestamp} • {log.type}</p>
                        </div>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        log.status === 'Success' ? 'bg-green-100 text-green-800' :
                        log.status === 'Warning' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {log.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Settings Tab */}
            {activeTab === 'settings' && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-slate-800">System Settings</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-slate-800">Trading Parameters</h3>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Default Multiplier
                      </label>
                      <input
                        type="number"
                        defaultValue="1.0"
                        step="0.1"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Max Position Size
                      </label>
                      <input
                        type="text"
                        defaultValue="$10,000"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Risk Management
                      </label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm pr-8">
                        <option>Conservative</option>
                        <option>Moderate</option>
                        <option>Aggressive</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-slate-800">System Configuration</h3>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        API Rate Limit (req/min)
                      </label>
                      <input
                        type="number"
                        defaultValue="1200"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Retry Attempts
                      </label>
                      <input
                        type="number"
                        defaultValue="3"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                      />
                    </div>

                    <div className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        id="autoRetry"
                        defaultChecked
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded cursor-pointer"
                      />
                      <label htmlFor="autoRetry" className="text-sm text-slate-700 cursor-pointer">
                        Enable auto-retry for failed trades
                      </label>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t">
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer">
                    Save Settings
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
