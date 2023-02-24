import React, { useState, useEffect } from 'react'
import axios from 'axios'

import mockUser from './mockData.js/mockUser'
import mockRepos from './mockData.js/mockRepos'
import mockFollowers from './mockData.js/mockFollowers'


const rootUrl = 'https://api.github.com'

const GithubContext = React.createContext()
//Provider, Consumer(replaced by useContext)

const GithubProvider = ({ children }) => {
    const [githubUser, setGithubUser] = useState(mockUser)
    const [repos, setRepos] = useState(mockRepos)
    const [followers, setFollowers] = useState(mockFollowers)

    const [loading, setLoading] = useState(false)
    const [requests, setRequests] = useState({})

    const [error, setError] = useState({ show: false, msg: '' })

    const searchGithubUser = async (user) => {

        //note: in this setup the request are not sent simulaneously but one after another 
        //this may cuase slow loading to send requests simultaneously use Promise.settleAll()
        try {
            toggleError()
            setLoading(true)
            const { data: userData } = await axios(`${rootUrl}/users/${user}`)
            const { data: repoData } = await axios(`${rootUrl}/users/${userData.login}/repos?per_page=100`)
            const { data: followerData } = await axios(`${rootUrl}/users/${userData.login}/followers?per_page=100`)

            setGithubUser(userData)
            setRepos(repoData)
            setFollowers(followerData)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(error.response)
            toggleError(true, 'there is no user with that username')
        }


    }


    const getRequests = () => {
        axios(rootUrl + '/rate_limit')
            .then(({ data }) => {
                setRequests({ rem: data.rate.remaining, total: data.rate.limit })
                if (data.rate.remaining === 0) {
                    toggleError(true, 'you have exceeded your hourly rate limit!')
                }
            })
            .catch(error => console.log(error))
    }

    const toggleError = (show = false, msg = '') => {
        setError({ show, msg })
    }

    useEffect(getRequests, [githubUser])
    useEffect(() => {
        searchGithubUser('mrmojo2')
    }, [])

    return (
        <GithubContext.Provider value={{ githubUser, repos, followers, requests, error, searchGithubUser, loading }}>
            {children}
        </GithubContext.Provider>)
}


//GithubContext because we need to use in useContext
//GithubProvider because of obvious reasons
export { GithubContext, GithubProvider }