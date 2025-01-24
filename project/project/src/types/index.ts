export interface User {
  id: string;
  name: string;
  points: number;
  cupsReduced: number;
  carbonSaved: number;
}

export interface Challenge {
  id: string;
  title: string;
  description: string;
  points: number;
  duration: string;
}

export interface Tip {
  id: string;
  content: string;
  category: 'daily' | 'weekly' | 'general';
}