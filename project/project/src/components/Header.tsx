import { Coffee, User, BarChart2, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="bg-emerald-600 text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Coffee className="h-8 w-8" />
            <span className="text-xl font-bold">EcoSip</span>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link to="/learn" className="flex items-center space-x-1 hover:text-emerald-200 transition">
              <span>Learn</span>
            </Link>
            <Link to="/challenges" className="flex items-center space-x-1 hover:text-emerald-200 transition">
              <span>Challenges</span>
            </Link>
            <Link to="/impact" className="flex items-center space-x-1 hover:text-emerald-200 transition">
              <BarChart2 className="h-5 w-5" />
              <span>Impact</span>
            </Link>
            <Link to="/community" className="flex items-center space-x-1 hover:text-emerald-200 transition">
              <Users className="h-5 w-5" />
              <span>Community</span>
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-emerald-700 transition">
              <User className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}