import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile, getIdToken } from "firebase/auth";

// initialize firebase app
initializeFirebase();

export const useFirebase = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState('');

    const auth = getAuth();


    const registerUser = (email, password, name, navigate) => {
        setIsLoading(true); 
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const newUser = { email, displayName: name };
                setUser(newUser);
                // send name to firebase after creation
                // save user to server database
                saveUser(email, name, 'POST');
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => { });
                setError('');
                navigate('/');
            })
            .catch((error) => {
                setError(error.code.split('auth/',)[1])
            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    const loginUser = (email, password, location, navigate) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const destination = location?.state?.from || '/';
                navigate(destination);
                const user = result.user;
                setUser(user);
                setError('');
            })
            .catch((error) => {
                setError(error.code.split('auth/',)[1])
            })
            .finally(() => setIsLoading(false));
    }

    // observe the user state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                getIdToken(user)
                    .then(idToken => {
                        setToken(idToken);
                    })
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribe;
    }, [auth])

    useEffect(() => {
        let isUnMount = false;
        setIsLoading(true);
        fetch(`https://car-selling-server.onrender.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => {
                if (!isUnMount) {
                    setAdmin(data.admin);
                    console.log(data.admin);
                    setIsLoading(false);
                }
            })
        return () => {
            isUnMount = true;
        }
    }, [user.email])

    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser({});
                setError('');
            })
            .catch((error) => {
                setError(error.code.split('auth/',)[1])
            })
            .finally(() => setIsLoading(false));
    }

    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('https://car-selling-server.onrender.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
    }

    return {
        user,
        registerUser,
        loginUser,
        logout,
        admin,
        token,
        isLoading,
        error
    }
}

// export default useFirebase;