import { Leaf } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative bg-emerald-700 text-white py-20">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?auto=format&fit=crop&w=2850&q=80"
          alt="Sustainable living"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      <div className="relative container mx-auto px-4">
        <div className="max-w-3xl">
          <div className="flex items-center space-x-2 mb-4">
            <Leaf className="h-8 w-8" />
            <span className="text-emerald-300 font-semibold">Join the Movement</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Make Every Sip Count for the Planet
          </h1>
          
          <p className="text-xl text-emerald-100 mb-8">
            Join thousands of eco-conscious individuals reducing paper cup waste.
            Track your impact, earn rewards, and be part of the solution.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-white text-emerald-700 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition">
              Get Started
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-emerald-700 transition">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}