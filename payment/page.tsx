'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Payment() {
  const [isLoading, setIsLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('razorpay');
  const router = useRouter();

  const handlePayment = async () => {
    setIsLoading(true);
    
    // Simulate Razorpay payment
    setTimeout(() => {
      localStorage.setItem('stratible_payment', 'completed');
      localStorage.setItem('stratible_user', JSON.stringify({
        email: 'user@example.com',
        joinDate: new Date().toISOString(),
        status: 'active'
      }));
      router.push('/dashboard');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-6">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <Link href="/" className="flex items-center justify-center space-x-3 mb-8">
            <img 
              src="https://static.readdy.ai/image/62245e7e79f073126bf3d4b3885b372a/567ef5531b3859efb1f67c3aa90b1f17.png" 
              alt="Stratible Logo"
              className="h-12 w-auto"
            />
          </Link>
          <h2 className="text-3xl font-bold text-slate-800">Complete Your Payment</h2>
          <p className="mt-2 text-slate-600">One-time payment to access the platform</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
          <div className="text-center border-b pb-6">
            <h3 className="text-2xl font-bold text-slate-800 mb-2">Stratible Access</h3>
            <div className="text-4xl font-bold text-blue-600 mb-2">₹464.99</div>
            <p className="text-slate-600">One-time payment • Lifetime access</p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-slate-800">What's included:</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                  <i className="ri-check-line text-green-600 text-sm"></i>
                </div>
                <span className="text-slate-600">Real-time trade replication</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                  <i className="ri-check-line text-green-600 text-sm"></i>
                </div>
                <span className="text-slate-600">Secure Binance API integration</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                  <i className="ri-check-line text-green-600 text-sm"></i>
                </div>
                <span className="text-slate-600">Risk management tools</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                  <i className="ri-check-line text-green-600 text-sm"></i>
                </div>
                <span className="text-slate-600">24/7 automated trading</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                  <i className="ri-check-line text-green-600 text-sm"></i>
                </div>
                <span className="text-slate-600">Professional support</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-slate-800">Payment Method:</h4>
            <div className="space-y-2">
              <label className="flex items-center space-x-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                <input
                  type="radio"
                  name="payment"
                  value="razorpay"
                  checked={paymentMethod === 'razorpay'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="text-blue-600 cursor-pointer"
                />
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                    <i className="ri-bank-card-line text-white text-sm"></i>
                  </div>
                  <span className="font-medium">Razorpay</span>
                </div>
                <span className="text-sm text-slate-500 ml-auto">Cards, UPI, Net Banking</span>
              </label>
            </div>
          </div>

          <button
            onClick={handlePayment}
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white py-4 px-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity disabled:opacity-50 whitespace-nowrap cursor-pointer"
          >
            {isLoading ? 'Processing Payment...' : 'Pay ₹464.99'}
          </button>

          <div className="text-center text-sm text-slate-500">
            <div className="w-4 h-4 inline-block mr-1">
              <i className="ri-shield-check-line"></i>
            </div>
            Secure payment powered by Razorpay
          </div>
        </div>

        <div className="text-center">
          <p className="text-slate-600 text-sm">
            By proceeding, you agree to our{" "}
            <Link href="/terms" className="text-blue-600 hover:text-blue-500">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="text-blue-600 hover:text-blue-500">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
