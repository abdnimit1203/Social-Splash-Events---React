import PropTypes from "prop-types";

import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./firebase.config";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // console.log(typeof children);

// email password Register
const emailRegister = (email, password) => {
  setLoading(true)
  return createUserWithEmailAndPassword(auth, email, password);
};

// email password Log In

const emailLogin = (email, password) => {
  setLoading(true)
  return signInWithEmailAndPassword(auth, email, password);
};
// Google  Log In

const googleLogin = () => {
  setLoading(true)
  return signInWithPopup(auth,googleProvider);
};


// All user LOGOUT
  const userSignOut = () => {
    setLoading(true)
    return signOut(auth);
  };


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false)
      return () => {
        unsubscribe();
      };
    });
  }, []);

  const authInfo = {
    user,
    loading,
    emailRegister,
    emailLogin,
    googleLogin,
    userSignOut,
  };
  return (
    <AuthContext.Provider value={authInfo}> {children}</AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.object.isRequired,
};
export default AuthProvider;
