'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <div>
                <h1 className="text-xl font-bold">Stratible</h1>
                <p className="text-sm text-slate-400">Where Strategy Meets Automation</p>
              </div>
            </div>
            <p className="text-slate-400 mb-4">
              Professional copy trading platform that connects master traders with clients for automated trade replication on Binance.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 flex items-center justify-center">
                <i className="ri-twitter-fill text-slate-400 hover:text-white cursor-pointer transition-colors"></i>
              </div>
              <div className="w-8 h-8 flex items-center justify-center">
                <i className="ri-linkedin-fill text-slate-400 hover:text-white cursor-pointer transition-colors"></i>
              </div>
              <div className="w-8 h-8 flex items-center justify-center">
                <i className="ri-discord-fill text-slate-400 hover:text-white cursor-pointer transition-colors"></i>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Platform</h3>
            <ul className="space-y-2">
              <li><Link href="/features" className="text-slate-400 hover:text-white transition-colors">Features</Link></li>
              <li><Link href="/pricing" className="text-slate-400 hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/security" className="text-slate-400 hover:text-white transition-colors">Security</Link></li>
              <li><Link href="/api" className="text-slate-400 hover:text-white transition-colors">API</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link href="/help" className="text-slate-400 hover:text-white transition-colors">Help Center</Link></li>
              <li><Link href="/contact" className="text-slate-400 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="/terms" className="text-slate-400 hover:text-white transition-colors">Terms</Link></li>
              <li><Link href="/privacy" className="text-slate-400 hover:text-white transition-colors">Privacy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-slate-400">© 2024 Stratible. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}