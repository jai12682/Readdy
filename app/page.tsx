'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(https://readdy.ai/api/search-image?query=Modern%20trading%20floor%20with%20multiple%20screens%20displaying%20financial%20charts%20and%20data%2C%20professional%20traders%20working%20at%20desks%20with%20computers%2C%20sleek%20office%20environment%20with%20glass%20walls%2C%20blue%20accent%20lighting%2C%20futuristic%20financial%20technology%20workspace%2C%20clean%20minimalist%20design%2C%20high-tech%20atmosphere&width=1920&height=1080&seq=hero-bg&orientation=landscape)`
        }}
      >
        <div className="w-full max-w-6xl mx-auto px-6 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Where Strategy
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Meets Automation
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Connect with professional traders and automatically replicate their winning strategies on your Binance account in real-time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register" className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:opacity-90 transition-opacity whitespace-nowrap cursor-pointer">
              Start Copy Trading
            </Link>
            <Link href="/features" className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/20 transition-colors whitespace-nowrap cursor-pointer">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Why Choose Stratible?</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Professional-grade copy trading platform designed for both novice and experienced traders
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center mb-6">
                <i className="ri-flash-line text-2xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Real-Time Execution</h3>
              <p className="text-slate-600">
                Trades are replicated instantly with sub-second latency, ensuring you never miss profitable opportunities.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center mb-6">
                <i className="ri-shield-check-line text-2xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Secure & Reliable</h3>
              <p className="text-slate-600">
                Your API keys are encrypted and secure. We never have access to your withdrawal functions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center mb-6">
                <i className="ri-settings-line text-2xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Full Control</h3>
              <p className="text-slate-600">
                Customize your risk level, position sizes, and trading pairs to match your preferences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">How It Works</h2>
            <p className="text-xl text-slate-600">Simple setup, powerful results</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Register & Pay</h3>
              <p className="text-slate-600">
                Sign up and complete the one-time payment of ₹464.99 to access the platform.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Connect Binance</h3>
              <p className="text-slate-600">
                Safely connect your Binance account using API keys with trading permissions only.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Start Trading</h3>
              <p className="text-slate-600">
                Watch as professional trades are automatically replicated to your account.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Copy Trading?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join successful traders and start automating your trading strategy today.
          </p>
          <Link href="/register" className="bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer inline-block">
            Get Started for ₹464.99
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}