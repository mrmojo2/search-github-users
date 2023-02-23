import React from 'react'
import { GithubContext } from '../context/context'
import { GoRepo, GoGist } from 'react-icons/go'
import { FiUsers, FiUserPlus } from 'react-icons/fi'

function Info() {
    const { githubUser } = React.useContext(GithubContext)
    const { public_repos, followers, following, public_gists } = githubUser

    const items = [
        { id: 1, icon: <GoRepo />, label: 'repos', value: public_repos, color: 'pink' },
        { id: 2, icon: <FiUsers />, label: 'followers', value: followers, color: 'green' },
        { id: 3, icon: <FiUserPlus />, label: 'following', value: following, color: 'purple' },
        { id: 4, icon: <GoGist />, label: 'gists', value: public_gists, color: 'yellow' },
    ]

    return (
        <section className='section'>
            <section className="section-center">
                {
                    items.map(i => {
                        const { id, icon, label, value, color } = i
                        return (
                            <article key={id} className='item'>
                                <span className={color}>{icon}</span>
                                <div>
                                    <h1>{value}</h1>
                                    <p>{label}</p>
                                </div>
                            </article>
                        )
                    })
                }
            </section>
        </section>
    )
}

export default Info