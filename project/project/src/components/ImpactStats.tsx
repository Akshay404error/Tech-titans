import { TreePine, Droplets, Users } from 'lucide-react';

export function ImpactStats() {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-emerald-100 p-4 rounded-full">
                <TreePine className="h-8 w-8 text-emerald-600" />
              </div>
            </div>
            <h3 className="text-4xl font-bold text-gray-900 mb-2">50,000+</h3>
            <p className="text-gray-600">Cups Saved</p>
          </div>
          
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-emerald-100 p-4 rounded-full">
                <Droplets className="h-8 w-8 text-emerald-600" />
              </div>
            </div>
            <h3 className="text-4xl font-bold text-gray-900 mb-2">2,500kg</h3>
            <p className="text-gray-600">CO₂ Reduced</p>
          </div>
          
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-emerald-100 p-4 rounded-full">
                <Users className="h-8 w-8 text-emerald-600" />
              </div>
            </div>
            <h3 className="text-4xl font-bold text-gray-900 mb-2">10,000+</h3>
            <p className="text-gray-600">Active Members</p>
          </div>
        </div>
      </div>
    </div>
  );
}