import React, { createContext, useContext, useMemo, useState } from "react";

interface BoxContext {
  extra: number;
  setExtra: React.Dispatch<React.SetStateAction<number>>;
}

export const BoxContext = createContext<BoxContext | null>(null);

export const BoxContextProvider = ({ children }) => {
  const [extra, setExtra] = useState(0);

  const contextValue = useMemo(
    () => ({
      extra,
      setExtra,
    }),
    [extra]
  );

  return (
    <BoxContext.Provider value={contextValue}>{children}</BoxContext.Provider>
  );
};

export const useBoxContext = () => useContext(BoxContext);
