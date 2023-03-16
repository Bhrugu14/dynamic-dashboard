import React, { createContext, useContext, useMemo, useState } from "react";

interface RatioContextProps {
  currentRatio: number;
  setCurrentRatio: React.Dispatch<React.SetStateAction<number>>;
}

export const RatioContext = createContext<RatioContextProps | null>(null);

export const RatioContextProvider = ({ children }) => {
  const [currentRatio, setCurrentRatio] = useState(100);

  const contextValue = useMemo(
    () => ({
      currentRatio,
      setCurrentRatio,
    }),
    [currentRatio]
  );

  return (
    <RatioContext.Provider value={contextValue}>
      {children}
    </RatioContext.Provider>
  );
};

export const useRatioContext = () => useContext(RatioContext);
