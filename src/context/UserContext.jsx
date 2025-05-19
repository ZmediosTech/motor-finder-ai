// src/context/UserContext.js
import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [listingData, setListingData] = useState(null); // or any default state

  return (
    <UserContext.Provider value={{ listingData, setListingData }}>
      {children}
    </UserContext.Provider>
  );
};

export const useListingData = () => useContext(UserContext);
