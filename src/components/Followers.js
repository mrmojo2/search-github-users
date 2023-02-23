import React from 'react'
import { GithubContext } from '../context/context'

function Followers() {
    const { followers } = React.useContext(GithubContext)
    return (
        <article className='followers'>
            <div className='followers-box'>
                {followers.map((f, i) => {
                    const { avatar_url, login, html_url } = f
                    return (
                        <article key={i} className='single-follower'>
                            <img src={avatar_url} alt="logo" />
                            <div>
                                <h3>{login}</h3>
                                <a href={html_url}>{html_url}</a>
                            </div>
                        </article>
                    )
                })}
            </div>
        </article>
    )
}

export default Followers