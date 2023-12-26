import React, { createContext, useContext, useState, useEffect } from "react";

const ScreenSizeContext = createContext();

export const ScreenSizeProvider = ({ children }) => {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ScreenSizeContext.Provider value={isMobileView}>
      {children}
    </ScreenSizeContext.Provider>
  );
};

// Custom Hook
export const useScreenSize = () => useContext(ScreenSizeContext);
