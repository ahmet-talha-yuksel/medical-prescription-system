import { createContext } from 'react';

export const AuthContext = createContext(null);

// Placeholder provider: no session, authentication, or role handling yet.
export function AuthProvider({ children }) {
  return <AuthContext.Provider value={null}>{children}</AuthContext.Provider>;
}
