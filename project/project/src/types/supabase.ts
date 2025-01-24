export type Database = {
    public: {
      Tables: {
        users: {
          Row: {
            id: string;
            email: string;
            full_name: string;
            points: number;
            cups_saved: number;
            carbon_saved: number;
            created_at: string;
          };
          Insert: {
            id?: string;
            email: string;
            full_name?: string;
            points?: number;
            cups_saved?: number;
            carbon_saved?: number;
            created_at?: string;
          };
          Update: {
            id?: string;
            email?: string;
            full_name?: string;
            points?: number;
            cups_saved?: number;
            carbon_saved?: number;
            created_at?: string;
          };
        };
        challenges: {
          Row: {
            id: string;
            title: string;
            description: string;
            points: number;
            duration: string;
            created_at: string;
          };
          Insert: {
            id?: string;
            title: string;
            description?: string;
            points: number;
            duration: string;
            created_at?: string;
          };
          Update: {
            id?: string;
            title?: string;
            description?: string;
            points?: number;
            duration?: string;
            created_at?: string;
          };
        };
        user_challenges: {
          Row: {
            id: string;
            user_id: string;
            challenge_id: string;
            status: string;
            completed_at?: string;
            created_at: string;
          };
          Insert: {
            id?: string;
            user_id: string;
            challenge_id: string;
            status?: string;
            completed_at?: string;
            created_at?: string;
          };
          Update: {
            id?: string;
            user_id?: string;
            challenge_id?: string;
            status?: string;
            completed_at?: string;
            created_at?: string;
          };
        };
      };
    };
  };