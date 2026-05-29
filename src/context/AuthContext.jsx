import { createContext, useContext, useState, useEffect, useCallback } from 'react';

const AuthContext = createContext(null);

const USERS_KEY = 'mock_users';
const SESSION_KEY = 'mock_session';

function getStoredUsers() {
  return JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
}

function storeUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function getStoredSession() {
  const raw = localStorage.getItem(SESSION_KEY);
  return raw ? JSON.parse(raw) : null;
}

function storeSession(session) {
  if (session) {
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  } else {
    localStorage.removeItem(SESSION_KEY);
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const session = getStoredSession();
    if (session) {
      setUser(session.user);
      setProfile(session.profile);
    }
    setLoading(false);
  }, []);

  const signUp = useCallback(async (email, password, fullName) => {
    const users = getStoredUsers();
    if (users.find(u => u.email === email)) {
      throw new Error('User already registered');
    }
    const id = crypto.randomUUID();
    const newUser = { id, email, password, full_name: fullName };
    users.push(newUser);
    storeUsers(users);

    const userProfile = { id, full_name: fullName, email, phone: '' };
    const session = { user: { id, email }, profile: userProfile };
    storeSession(session);
    setUser(session.user);
    setProfile(userProfile);
    return session;
  }, []);

  const signIn = useCallback(async (email, password) => {
    const users = getStoredUsers();
    const found = users.find(u => u.email === email && u.password === password);
    if (!found) {
      throw new Error('Invalid email or password');
    }
    const userProfile = { id: found.id, full_name: found.full_name, email: found.email, phone: '' };
    const session = { user: { id: found.id, email: found.email }, profile: userProfile };
    storeSession(session);
    setUser(session.user);
    setProfile(userProfile);
    return session;
  }, []);

  const signOut = useCallback(async () => {
    storeSession(null);
    setUser(null);
    setProfile(null);
  }, []);

  const updateProfile = useCallback(async (updates) => {
    const updated = { ...profile, ...updates };
    const session = getStoredSession();
    storeSession({ ...session, profile: updated });
    setProfile(updated);
    return updated;
  }, [profile]);

  return (
    <AuthContext.Provider value={{
      user,
      profile,
      loading,
      signUp,
      signIn,
      signOut,
      updateProfile,
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
}
