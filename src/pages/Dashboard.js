import React, { useEffect } from 'react'
import PropType from 'prop-types';
import Header from '../components/Header';
import Sidebar from '../components/sidebar';
import Timeline from '../components/Timeline';
import useUser from '../hooks/useUser';
import LoggedInUserContext from '../context/logged-in-user';

const Dashboard = ({ user: loggedInUser }) => {
    const { user } = useUser(loggedInUser.uid)
    useEffect(() => {
        document.title = "Instagram";

    }, [])
    return (
        <LoggedInUserContext.Provider value={{ user }}>
            <div className="bg-gray-background">
                <Header />
                <div className="grid grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg ">
                    <Timeline />
                    <Sidebar />
                </div>
            </div>
        </LoggedInUserContext.Provider>
    )
}

export default Dashboard

Dashboard.propType = {
    user: PropType.object.isRequired
}