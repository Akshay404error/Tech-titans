import { Routes, Route } from 'react-router-dom';
// import { Home } from '../pages/Home';
import { Learn } from '../pages/Learn';
import { Challenges } from '../pages/Challenges';
// import { Impact } from '../pages/Impact';
// import { Community } from '../pages/Community';
// import { Profile } from '../pages/Profile';

export function AppRoutes() {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/learn" element={<Learn />} />
      <Route path="/challenges" element={<Challenges />} />
      {/* <Route path="/impact" element={<Impact />} /> */}
      {/* <Route path="/community" element={<Community />} /> */}
      {/* <Route path="/profile" element={<Profile />} /> */}
    </Routes>
  );
}