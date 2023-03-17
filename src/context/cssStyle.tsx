import React, { createContext, useContext, useMemo, useState } from "react";

interface cssContext {
  cssArray: any[];
  setArray: React.Dispatch<React.SetStateAction<any>>;
  isStyleView?: boolean;
  setStyleView?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const cssContext = createContext<cssContext | null>(null);

export const CssContextProvider = ({ children }) => {
  const [cssArray, setCssArray] = useState([]);
  const [isStyleView, setStyleView] = useState(true);

  function setArray(obj) {
    var array = [];
    for (var i = obj.length >>> 0; i--; ) {
      array[i] = obj[i];
    }
    setCssArray(array);
  }

  const contextValue = useMemo(
    () => ({
      cssArray,
      setArray,
      isStyleView,
      setStyleView,
    }),
    [cssArray, isStyleView]
  );

  return (
    <cssContext.Provider value={contextValue}>{children}</cssContext.Provider>
  );
};

export const useCssContext = () => useContext(cssContext);
