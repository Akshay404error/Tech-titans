import { Trophy } from 'lucide-react';
import type { Challenge } from '../types';

const challenges: Challenge[] = [
  {
    id: '1',
    title: '30-Day Reusable Cup Challenge',
    description: 'Use only reusable cups for all your beverages for 30 days.',
    points: 500,
    duration: '30 days'
  },
  {
    id: '2',
    title: 'Spread the Word',
    description: 'Share your sustainable journey on social media and inspire others.',
    points: 200,
    duration: '7 days'
  }
];

export function Challenges() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center space-x-2 mb-8">
          <Trophy className="h-8 w-8 text-emerald-600" />
          <h1 className="text-3xl font-bold">Active Challenges</h1>
        </div>

        <div className="grid gap-6">
          {challenges.map((challenge) => (
            <div key={challenge.id} className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-2">{challenge.title}</h2>
              <p className="text-gray-600 mb-4">{challenge.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <span className="text-emerald-600 font-semibold">
                    {challenge.points} points
                  </span>
                  <span className="text-gray-500">
                    Duration: {challenge.duration}
                  </span>
                </div>
                <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition">
                  Join Challenge
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}