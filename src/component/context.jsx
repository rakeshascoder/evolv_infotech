import React, { createContext, useRef } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const sectionRefs = useRef([]);
    const scrollToNextSection = (index) => {
        sectionRefs.current[index]?.scrollIntoView({
          behavior: "smooth",
        });
      };
   
    

  return (
    <AppContext.Provider value={{ scrollToNextSection ,sectionRefs }}>
      {children}
    </AppContext.Provider>
  );
};
