/*
  # Initial Schema Setup for EcoSip

  1. New Tables
    - users
      - id (uuid, primary key)
      - email (text, unique)
      - full_name (text)
      - points (integer)
      - cups_saved (integer)
      - carbon_saved (float)
      - created_at (timestamp)
    
    - challenges
      - id (uuid, primary key)
      - title (text)
      - description (text)
      - points (integer)
      - duration (text)
      - created_at (timestamp)
    
    - user_challenges
      - id (uuid, primary key)
      - user_id (uuid, foreign key)
      - challenge_id (uuid, foreign key)
      - status (text)
      - completed_at (timestamp)
      - created_at (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Users table
CREATE TABLE IF NOT EXISTS users (
  id uuid PRIMARY KEY DEFAULT auth.uid(),
  email text UNIQUE NOT NULL,
  full_name text,
  points integer DEFAULT 0,
  cups_saved integer DEFAULT 0,
  carbon_saved float DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE users ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own data"
  ON users
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update own data"
  ON users
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id);

-- Challenges table
CREATE TABLE IF NOT EXISTS challenges (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  points integer NOT NULL,
  duration text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE challenges ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read challenges"
  ON challenges
  FOR SELECT
  TO authenticated
  USING (true);

-- User challenges table
CREATE TABLE IF NOT EXISTS user_challenges (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id) ON DELETE CASCADE,
  challenge_id uuid REFERENCES challenges(id) ON DELETE CASCADE,
  status text DEFAULT 'in_progress',
  completed_at timestamptz,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE user_challenges ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own challenges"
  ON user_challenges
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create own challenges"
  ON user_challenges
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own challenges"
  ON user_challenges
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id);