import { useState, createContext, useContext } from "react";

const AppContext = createContext();
export const useGlobalContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [sidebar, setSidebar] = useState(false);
  const [modal, setModal] = useState(false);

  const openSidebar = () => {
    setSidebar(true);
  };

  const closeSidebar = () => {
    setSidebar(false);
  };
  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <AppContext.Provider
      value={{
        sidebar,
        modal,
        openSidebar,
        closeSidebar,
        openModal,
        closeModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
