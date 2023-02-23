import React from 'react'
import { GithubContext } from '../context/context'
import { Bar, Column, Doughnut, Pie, ChartExample } from './Charts'

function Repos() {
    const { repos } = React.useContext(GithubContext)

    //languages and stars per language data
    const languages = repos.reduce((acc, curr) => {
        const { language, stargazers_count } = curr
        if (!language) return acc    //for null language values
        acc[language] = acc[language] ? { ...acc[language], value: acc[language].value + 1, stars: acc[language].stars + stargazers_count } : { label: language, value: 1, stars: stargazers_count }
        return acc
    }, {})

    const pieData = Object.values(languages).sort((a, b) => { return b.value - a.value }).slice(0, 5)
    const doughnutData = Object.values(languages).sort((a, b) => { return b.stars - a.stars }).map(i => {
        return { ...i, value: i.stars }
    }).slice(0, 5)

    let { stars, forks } = repos.reduce((accumulator, current) => {
        const { stargazers_count, name, forks } = current;
        accumulator.stars[stargazers_count] = { label: name, value: stargazers_count }
        accumulator.forks[forks] = { label: name, value: forks }
        return accumulator
    }, { stars: {}, forks: {} })

    const columnData = Object.values(stars).slice(-5).reverse()
    const barData = Object.values(forks).slice(-5).reverse()

    return (
        <section className='section'>
            <div className='charts-container'>
                <Pie data={pieData} />
                <Column data={columnData} />
                <Doughnut data={doughnutData} />
                <Bar data={barData} />
            </div>

        </section>
    )
}

export default Repos