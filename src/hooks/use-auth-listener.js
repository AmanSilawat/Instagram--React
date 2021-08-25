import FirebaseContext from "../context/firebase";

import { useContext, useEffect, useState } from 'react'

const useAuthListener = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('authUser')));
    const { firebase } = useContext(FirebaseContext);

    useEffect(() => {
        const listener = firebase.auth().onAuthStateChanged((authUser) => {
            if (authUser) {
                // we can store the user in localStorage
                localStorage.setItem('authUser', JSON.stringify(authUser));
                setUser(authUser);
            } else {
                // we don't have an authUser, therefore clear the localStorage
                localStorage.removeItem('authUser');
                setUser(null);
            }
        });

        return () => listener();
    }, [firebase]);
    return { user }
}

export default useAuthListener;
