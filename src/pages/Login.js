import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import login from '../images/login-img.svg'

const Login = () => {
    const { loginWithRedirect } = useAuth0()
    return (
        <div className='login'>
            <img src={login} alt="bababoyebabaoye" />
            <h1>Github User</h1>
            <button className='btn-primary' onClick={() => loginWithRedirect()}>login/signup</button>
        </div>
    )
}

export default Login