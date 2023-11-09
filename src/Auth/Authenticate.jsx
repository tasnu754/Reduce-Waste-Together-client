import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  updateProfile,
} from "firebase/auth";
import auth from "../../firebase.config";
import axios from "axios";

export const AuthProvider = createContext(null);


const Authenticate = ({ children }) => {
    const [user, setUser] = useState(null);
      const [loading, setLoading] = useState(true);

    const GoogleProvider = new GoogleAuthProvider();
    
    const register = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
    };

    const login = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
    };

    const goggleLogin = () => {
      setLoading(false);
      return signInWithPopup(auth, GoogleProvider);
    };

    const ProfileUpdate = (name, photo) => {
      setLoading(true);
      return updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo,
      });
    };

    const logout = () => {
      setLoading(true);
      return signOut(auth);
    };




    useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
        const userEmail = currentUser?.email || user?.email;
        const loggedUser = { email: userEmail };

        setUser(currentUser);
        setLoading(false);

        if (currentUser) {
          axios
            .post("https://reduce-waste-together-server.vercel.app/api/jwt", loggedUser, {
              withCredentials: true,
            })
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err.message));
        } else {
          axios
            .post("https://reduce-waste-together-server.vercel.app/api/logout", loggedUser, {
              withCredentials: true,
            })
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err.message));
        }
      });

      return () => {
        unSubscribe();
      };
    }, [user?.email]);


    const info = {
      register,
      user,
      login,
      goggleLogin,
      ProfileUpdate,
      logout,
      loading,
    };

    return (
        <div>
            <AuthProvider.Provider value={info}>{ children}</AuthProvider.Provider>
        </div>
    );
};

Authenticate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Authenticate;