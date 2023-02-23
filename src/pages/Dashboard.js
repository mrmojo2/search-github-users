import React from 'react'
import { Info, Navbar, Search, User, Repos } from '../components'
import { GithubContext } from '../context/context'
import loadingImage from '../images/preloader.gif'

const Dashboard = () => {
    const { loading } = React.useContext(GithubContext)

    if (loading) {
        return (
            <main>
                <Navbar />
                <Search />
                <img src={loadingImage} alt="Loading....." className='loading-image' />
            </main>
        )
    }

    return (
        <main>
            <Navbar />
            <Search />
            <Info />
            <User />
            <Repos />
        </main>
    )
}

export default Dashboard