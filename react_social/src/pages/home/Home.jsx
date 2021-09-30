import React from 'react'
import Topbar from '../../components/Topbar/Topbar.jsx'
import Sidebar from '../../components/sidebar/Sidebar.jsx'
import Rightbar from '../../components/rightbar/Rightbar'
import Feed from '../../components/feed/Feed'
import './Home.css'

function Home() {
    return (
        <>
            <Topbar />
            <div className="homeContainer">
                <Sidebar />
                <Feed />
                <Rightbar />
            </div>
        </>
    )
}

export default Home
