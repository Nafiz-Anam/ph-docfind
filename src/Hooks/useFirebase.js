import { useEffect, useState } from "react";
import initializeAuth from "../auth/firebase.init";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    GithubAuthProvider,
    signOut,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";

initializeAuth();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [logError, setLogError] = useState("");
    const [signError, setSignError] = useState("");
    const [isLoading, setIsloading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const signinUsingGoogle = () => {
        setIsloading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user);
                // console.log(result.user);
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsloading(false));
    };

    const signinWithGithub = () => {
        setIsloading(true);
        signInWithPopup(auth, githubProvider)
            .then((result) => {
                setUser(result.user);
                // console.log(result.user);
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsloading(false));
    };

    // email singup
    const [userEmail, setUserEmail] = useState("");
    const [userPass, setUserPass] = useState("");

    const handleEmail = (e) => {
        setUserEmail(e.target.value);
    };
    const handlePass = (e) => {
        setUserPass(e.target.value);
    };

    const handleRegister = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, userEmail, userPass)
            .then((result) => {
                setUser(result.user);
                // console.log(result.user);
            })
            .catch((error) => {
                setSignError(error.message);
            });
    };
    const handleLogin = (e) => {
        e.preventDefault();
        setIsloading(true);
        signInWithEmailAndPassword(auth, userEmail, userPass)
            .then((result) => {
                setUser(result.user);
                console.log(result.user);
            })
            .catch((error) => {
                setLogError(error.message);
            })
            .finally(() => setIsloading(false));
    };

    const signout = () => {
        setIsloading(true);
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .finally(() => setIsloading(false));
    };

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsloading(false);
        });
    }, []);

    return {
        signinUsingGoogle,
        signinWithGithub,
        user,
        error,
        signout,
        handleEmail,
        handlePass,
        handleRegister,
        handleLogin,
        isLoading,
        logError,
        signError,
    };
};

export default useFirebase;
