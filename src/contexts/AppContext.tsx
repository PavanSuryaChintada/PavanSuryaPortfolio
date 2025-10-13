import React, { createContext, useContext, useState, useEffect } from 'react';

type ProfileType = 'recruiter' | 'stalker' | 'developer' | 'adventurer' | null;

interface AppState {
  selectedProfile: ProfileType;
  setSelectedProfile: (profile: ProfileType) => void;
  hasSelectedProfile: boolean;
  sidebarScrollProgress: number;
  setSidebarScrollProgress: (progress: number) => void;
}

const AppContext = createContext<AppState | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedProfile, setSelectedProfileState] = useState<ProfileType>(null);
  const [hasSelectedProfile, setHasSelectedProfile] = useState(false);
  const [sidebarScrollProgress, setSidebarScrollProgress] = useState(0);

  useEffect(() => {
    // Clear profile on page refresh - always show profile selector
    localStorage.removeItem('selectedProfile');
    setSelectedProfileState(null);
    setHasSelectedProfile(false);
  }, []);

  const setSelectedProfile = (profile: ProfileType) => {
    setSelectedProfileState(profile);
    if (profile) {
      localStorage.setItem('selectedProfile', profile);
      setHasSelectedProfile(true);
    } else {
      localStorage.removeItem('selectedProfile');
      setHasSelectedProfile(false);
    }
  };

  return (
    <AppContext.Provider value={{ selectedProfile, setSelectedProfile, hasSelectedProfile, sidebarScrollProgress, setSidebarScrollProgress }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
