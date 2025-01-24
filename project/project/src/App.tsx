import { Header } from './components/Header';
import { AppRoutes } from './routes';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <AppRoutes />
      </main>
    </div>
  );
}

export default App;