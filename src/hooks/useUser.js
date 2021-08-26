import { useState, useEffect, useContext } from "react";
import { getUserByUserId } from '../services/firebase'

const useUser = (userId) => {
    const [activeUser, setActiveUser] = useState({});

    useEffect(() => {
        async function getUserObjectByUserId(userId) {
            // 
            const [user] = await getUserByUserId(userId);
            setActiveUser(user || {});
        }


        if (userId) {
            getUserObjectByUserId(userId)
        }
    }, [userId])
    return { user: activeUser };
}

export default useUser;
