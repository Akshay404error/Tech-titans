import { BookOpen } from 'lucide-react';

export function Learn() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center space-x-2 mb-8">
          <BookOpen className="h-8 w-8 text-emerald-600" />
          <h1 className="text-3xl font-bold">Sustainable Living Guide</h1>
        </div>

        <div className="grid gap-8">
          <article className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">The Impact of Single-Use Cups</h2>
            <p className="text-gray-600 mb-4">
              Every year, billions of paper cups end up in landfills. Most of these cups
              are lined with plastic, making them difficult to recycle and slow to decompose.
            </p>
            <div className="bg-emerald-50 p-4 rounded-lg">
              <h3 className="font-semibold text-emerald-800 mb-2">Did you know?</h3>
              <p className="text-emerald-600">
                A single reusable cup can save up to 500 disposable cups per year.
              </p>
            </div>
          </article>

          <article className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Tips for Sustainable Coffee Habits</h2>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <span className="text-emerald-600">•</span>
                <span>Bring your own reusable cup to coffee shops</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-emerald-600">•</span>
                <span>Choose coffee shops that offer discounts for reusable cups</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-emerald-600">•</span>
                <span>Invest in a quality thermos to keep your drinks hot longer</span>
              </li>
            </ul>
          </article>
        </div>
      </div>
    </div>
  );
}