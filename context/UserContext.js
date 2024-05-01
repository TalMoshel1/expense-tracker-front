import React, { createContext, useContext, useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const history = useHistory();
  const location = useLocation();
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!['/trial', '/welcome'].includes(location.pathname) && !user) {
      history.push('/welcome');
    }
  }, [user, location.pathname, history]);

  const updateUser = newUser => {
    setUser(newUser);
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};
