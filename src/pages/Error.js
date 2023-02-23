import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <div className='error'>
            <h1>404</h1>
            <p>sorry, the page you tried cannot be found</p>
            <Link to='/' className='btn-primary'>back to home</Link>
        </div>
    )
}

export default Error