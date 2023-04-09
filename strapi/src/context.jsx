import { useState, useContext, createContext } from "react";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

export const AppContext = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  return (
    <GlobalContext.Provider
      value={{ isSidebarOpen, openSidebar, closeSidebar }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
