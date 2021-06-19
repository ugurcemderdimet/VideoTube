import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [hasAccount, setHasAccount] = useState(false);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("a");
  const [videos, setvideos] = useState([]);

  const fetchVideos = useCallback(async () => {
    setLoading(true);
    try {
      /*  `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=9&q=${searchTerm}&type=video&key=AIzaSyBgfcC0lnXDqW6rgi8v1bB5HqK_9H1iQu0`  */
      const response = await fetch("");
      const data = await response.json();
      console.log("--> ", data);
      setvideos(data.items);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [searchTerm]);
  useEffect(() => {
    fetchVideos();
  }, [searchTerm, fetchVideos]);
  return (
    <AppContext.Provider
      value={{
        loading,
        videos,
        searchTerm,
        setSearchTerm,
        user,
        setUser,
        hasAccount,
        setHasAccount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
