import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

function Navbar() {
    const { isAuthenticated, loginWithRedirect, logout, user, isLoading } = useAuth0()
    console.log(user)
    const isUser = isAuthenticated && user
    return (
        <nav className='nav-section'>
            {isUser && user.picture && <img className='login-img' src={user.picture} />}
            {isUser && user.name && <p className='welcome'>Welcome, <span>{user.name.toUpperCase()}</span></p>}
            {isUser ? <button onClick={() => logout({ returnTo: window.location.origin })}>logout</button> : <button onClick={loginWithRedirect}>login</button>}
        </nav>
    )
}

export default Navbar