import React from 'react'
import { GithubContext } from '../context/context'
import UserCard from './Card'
import Followers from './Followers'

function User() {
    return (
        <section className='section'>
            <section className='section-center user'>
                <UserCard />
                <Followers />
            </section>
        </section>
    )
}

export default User