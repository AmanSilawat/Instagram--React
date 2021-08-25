
import { useState, useEffect, useContext } from 'react';
import UserContext from '../context/user';
import { getPhotos, getUserByUserId } from '../services/firebase';

export default function usePhotos(user) {
    const [photos, setPhotos] = useState(null);
    const {
        user: { uid: userId = '', following }
    } = useContext(UserContext);

    useEffect(() => {
        async function getTimelinePhotos() {
            const [{ following = null } = {}] = await getUserByUserId(userId)


            // does the user actually follow people?
            console.log('following', following, !following)
            if (following) {

                const followedUserPhotos = await getPhotos(userId, following);
                // re-arrange array to be newest photos first by dateCreated
                followedUserPhotos.sort((a, b) => b.dateCreated - a.dateCreated);
                setPhotos(followedUserPhotos);
            }
        }

        getTimelinePhotos();
    }, [user?.following, user?.userId]);

    return { photos };
}