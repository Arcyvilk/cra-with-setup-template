import React from 'react';

type ContextType = Record<string, unknown>;
type Props = {
  children: React.ReactNode;
};

const AppContextProvider = ({ children }: Props): JSX.Element => {
  const value = {};
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
export const AppContext = React.createContext({} as ContextType);
