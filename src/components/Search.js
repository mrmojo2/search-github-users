import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { GithubContext } from '../context/context'

function Search() {
    const { requests, error, searchGithubUser, loading } = React.useContext(GithubContext)

    const [input, setInput] = React.useState('')
    const submitHandler = (e) => {
        e.preventDefault()
        if (input) {
            searchGithubUser(input)
        }
    }
    return (
        <section className='search-section'>
            <div className='search-center'>
                {error.show && <p className='main-error'>{error.msg}</p>}
                <form onSubmit={submitHandler}>
                    <div className='form-control'>
                        <AiOutlineSearch />
                        <input type="text" value={input} onChange={e => setInput(e.target.value)} placeholder='Enter Github User' />
                        {requests.rem > 0 && !loading && <button className='search-btn'>search</button>}


                    </div>
                </form>
                <h3 className='requests'>Requests: {requests.rem}/{requests.total || 60}</h3>
            </div>
        </section>
    )
}

export default Search