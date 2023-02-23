import React from 'react'
import { GithubContext } from '../context/context'
import { MdBusiness, MdLocationOn, MdLink } from 'react-icons/md'

function UserCard() {
    const { githubUser } = React.useContext(GithubContext)
    const { avatar_url, name, html_url, bio, company, location, blog } = githubUser
    return (
        <article className='user-info'>
            <header>
                <img src={avatar_url} alt={name} />
                <div className='user-name'>
                    <h3>{name || githubUser.login}</h3>
                    <p>@{githubUser?.twitter_username || 'john_doe'}</p>
                </div>
                <a href={html_url} className='follow-btn'>follow</a>
            </header>
            <p className='bio'>{bio}</p>
            <div className='links'>
                <p><MdBusiness />{company}</p>
                <p><MdLocationOn />{location || 'earth'}</p>
                <a href={'https://' + blog}><MdLink />{blog}</a>
            </div>
        </article>
    )
}

export default UserCard