import { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    console.log('user in auth', user);

    useEffect(() => {
        // Retrieve the user from localStorage on component mount
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const setUserAndPersist = (user) => {
        setUser(user);
        localStorage.setItem('user', JSON.stringify(user));
    };

    const authInfo = {
        user,
        setUser: setUserAndPersist,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthProvider, AuthContext };
