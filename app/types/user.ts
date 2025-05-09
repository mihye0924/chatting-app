export interface UserProps {
  user: {
    app_metadata?: {
      provider: string;
    };
    id?: string;
    email?: string;
    phone?: string;
    name?: string;
    picture?: string;
    created_at?: string;
    updated_at?: string;
  };
  setUser: (data: object) => void;
}
