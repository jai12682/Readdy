'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);
  const [apiKeys, setApiKeys] = useState({ key: '', secret: '' });
  const [isConnected, setIsConnected] = useState(false);
  const [balance, setBalance] = useState(0);
  const [showApiForm, setShowApiForm] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const payment = localStorage.getItem('stratible_payment');
    if (!payment) {
      router.push('/payment');
      return;
    }

    const userData = JSON.parse(localStorage.getItem('stratible_user') || '{}');
    setUser(userData);
    
    // Check if API keys are saved
    const savedKeys = localStorage.getItem('stratible_api_keys');
    if (savedKeys) {
      setIsConnected(true);
      setBalance(12547.83); // Mock balance
    }
  }, [router]);

  const handleApiSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (apiKeys.key && apiKeys.secret) {
      localStorage.setItem('stratible_api_keys', JSON.stringify(apiKeys));
      setIsConnected(true);
      setBalance(12547.83); // Mock balance
      setShowApiForm(false);
      setApiKeys({ key: '', secret: '' });
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    router.push('/');
  };

  if (!user) return null;

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
                <h1 className="text-xl font-bold text-slate-800">Stratible</h1>
                <p className="text-xs text-slate-600">Client Dashboard</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm font-medium text-slate-800">{user.email}</p>
                <p className="text-xs text-slate-600">Active Client</p>
              </div>
              <button
                onClick={handleLogout}
                className="p-2 text-slate-600 hover:text-slate-800 cursor-pointer"
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-logout-box-line"></i>
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Status Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 text-sm">Connection Status</p>
                <p className={`text-2xl font-bold ${isConnected ? 'text-green-600' : 'text-red-500'}`}>
                  {isConnected ? 'Connected' : 'Disconnected'}
                </p>
              </div>
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${isConnected ? 'bg-green-100' : 'bg-red-100'}`}>
                <i className={`${isConnected ? 'ri-wifi-line text-green-600' : 'ri-wifi-off-line text-red-500'} text-xl`}></i>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 text-sm">Futures Balance</p>
                <p className="text-2xl font-bold text-slate-800">
                  ${balance.toLocaleString()}
                </p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <i className="ri-wallet-line text-blue-600 text-xl"></i>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 text-sm">Account Level</p>
                <p className="text-2xl font-bold text-blue-600">Premium</p>
              </div>
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                <i className="ri-vip-crown-line text-yellow-600 text-xl"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Binance API Setup */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-slate-800">Binance API Configuration</h2>
              {!isConnected && (
                <button
                  onClick={() => setShowApiForm(!showApiForm)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer"
                >
                  Setup API
                </button>
              )}
            </div>

            {isConnected ? (
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <i className="ri-check-line text-green-600"></i>
                  </div>
                  <div>
                    <p className="font-medium text-green-800">API Successfully Connected</p>
                    <p className="text-sm text-green-600">Your Binance account is ready for copy trading</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <p className="text-2xl font-bold text-slate-800">24</p>
                    <p className="text-sm text-slate-600">Trades Today</p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <p className="text-2xl font-bold text-green-600">+5.2%</p>
                    <p className="text-sm text-slate-600">Today's PnL</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-4 bg-yellow-50 rounded-lg">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                    <i className="ri-warning-line text-yellow-600"></i>
                  </div>
                  <div>
                    <p className="font-medium text-yellow-800">API Not Connected</p>
                    <p className="text-sm text-yellow-600">Connect your Binance API to start copy trading</p>
                  </div>
                </div>

                {showApiForm && (
                  <form onSubmit={handleApiSubmit} className="space-y-4 mt-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        API Key
                      </label>
                      <input
                        type="text"
                        value={apiKeys.key}
                        onChange={(e) => setApiKeys({...apiKeys, key: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                        placeholder="Enter your Binance API key"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Secret Key
                      </label>
                      <input
                        type="password"
                        value={apiKeys.secret}
                        onChange={(e) => setApiKeys({...apiKeys, secret: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                        placeholder="Enter your Binance secret key"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer"
                    >
                      Connect API
                    </button>
                  </form>
                )}
              </div>
            )}
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-bold text-slate-800 mb-6">Recent Activity</h2>
            
            {isConnected ? (
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <i className="ri-arrow-up-line text-green-600 text-sm"></i>
                    </div>
                    <div>
                      <p className="font-medium text-slate-800">BTC/USDT Long</p>
                      <p className="text-sm text-slate-600">2 minutes ago</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-green-600">+$124.50</p>
                    <p className="text-sm text-slate-600">0.5 BTC</p>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                      <i className="ri-arrow-down-line text-red-600 text-sm"></i>
                    </div>
                    <div>
                      <p className="font-medium text-slate-800">ETH/USDT Short</p>
                      <p className="text-sm text-slate-600">15 minutes ago</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-red-600">-$45.20</p>
                    <p className="text-sm text-slate-600">2.1 ETH</p>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <i className="ri-arrow-up-line text-green-600 text-sm"></i>
                    </div>
                    <div>
                      <p className="font-medium text-slate-800">SOL/USDT Long</p>
                      <p className="text-sm text-slate-600">1 hour ago</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-green-600">+$89.75</p>
                    <p className="text-sm text-slate-600">15 SOL</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-history-line text-gray-400 text-2xl"></i>
                </div>
                <p className="text-slate-600">Connect your API to view trading activity</p>
              </div>
            )}
          </div>
        </div>

        {/* Support Section */}
        <div className="mt-8 bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Need Help?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/help" className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <i className="ri-question-line text-blue-600"></i>
              </div>
              <div>
                <p className="font-medium text-slate-800">Help Center</p>
                <p className="text-sm text-slate-600">Find answers to common questions</p>
              </div>
            </Link>

            <Link href="/contact" className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <i className="ri-customer-service-line text-green-600"></i>
              </div>
              <div>
                <p className="font-medium text-slate-800">Contact Support</p>
                <p className="text-sm text-slate-600">Get help from our team</p>
              </div>
            </Link>

            <a href="https://binance.com/en/support/faq/how-to-create-api-360002502072" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                <i className="ri-book-line text-yellow-600"></i>
              </div>
              <div>
                <p className="font-medium text-slate-800">API Guide</p>
                <p className="text-sm text-slate-600">Learn how to create Binance API</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
