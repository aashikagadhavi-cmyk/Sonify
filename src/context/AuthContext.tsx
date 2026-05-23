import React, { createContext, useContext, useState, useEffect } from "react";

export interface User {
  uid: string;
  displayName: string;
  email: string;
  photoURL?: string;
  providerId: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signInWithGoogle: () => Promise<User>;
  signUpWithEmail: (name: string, email: string) => Promise<User>;
  signInWithEmail: (email: string) => Promise<User>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Load persistent user session
  useEffect(() => {
    const storedUser = localStorage.getItem("sonify_user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        console.error("Failed to parse stored auth user:", e);
      }
    }
    setLoading(false);
  }, []);

  // Simulate Google Sign-In flow
  const signInWithGoogle = async (): Promise<User> => {
    setLoading(true);
    return new Promise<User>((resolve) => {
      setTimeout(() => {
        const googleUser: User = {
          uid: "g_" + Math.random().toString(36).substring(2, 9),
          displayName: "Aashika Gadhavi",
          email: "aashikagadhavi@gmail.com",
          photoURL: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200&h=200",
          providerId: "google.com",
        };
        localStorage.setItem("sonify_user", JSON.stringify(googleUser));
        setUser(googleUser);
        setLoading(false);
        resolve(googleUser);
      }, 1200); // realistic network delay
    });
  };

  // Simulate Email Sign-Up flow
  const signUpWithEmail = async (name: string, email: string): Promise<User> => {
    setLoading(true);
    return new Promise<User>((resolve) => {
      setTimeout(() => {
        const newUser: User = {
          uid: "e_" + Math.random().toString(36).substring(2, 9),
          displayName: name || email.split("@")[0],
          email: email,
          photoURL: `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(name || email)}`,
          providerId: "password",
        };
        localStorage.setItem("sonify_user", JSON.stringify(newUser));
        setUser(newUser);
        setLoading(false);
        resolve(newUser);
      }, 1500);
    });
  };

  // Simulate Email Sign-In flow
  const signInWithEmail = async (email: string): Promise<User> => {
    setLoading(true);
    return new Promise<User>((resolve) => {
      setTimeout(() => {
        const existingUser: User = {
          uid: "e_" + Math.random().toString(36).substring(2, 9),
          displayName: email.split("@")[0].toUpperCase(),
          email: email,
          photoURL: `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(email)}`,
          providerId: "password",
        };
        localStorage.setItem("sonify_user", JSON.stringify(existingUser));
        setUser(existingUser);
        setLoading(false);
        resolve(existingUser);
      }, 1000);
    });
  };

  // Logout session
  const logout = () => {
    localStorage.removeItem("sonify_user");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        signInWithGoogle,
        signUpWithEmail,
        signInWithEmail,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
