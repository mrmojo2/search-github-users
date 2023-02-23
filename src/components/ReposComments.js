import React from 'react'
import { GithubContext } from '../context/context'
import { Bar, Column, Doughnut, Pie, ChartExample } from './Charts'

function Repos() {
    const { repos } = React.useContext(GithubContext)

    // format of chart data:
    // const chartData = [
    //     {
    //         label: "HTML",
    //         value: "13"
    //     },
    //     {
    //         label: "CSS",
    //         value: "23"
    //     },
    //     {
    //         label: "JavaScript",
    //         value: "69"
    //     },

    // ];

    /************  creatng chartData --my method     *************/
    const getValue = (arr, lang) => {
        return arr.filter((i) => (i === lang)).length
    }

    const totaLanguages = repos.map(repo => repo.language)
    const chartData = [...new Set(totaLanguages)].map(lang => {
        let value = getValue(totaLanguages, lang)
        return { label: lang, value: lang ? value : 0 }
    }).filter(i => i.label !== null)
    /**************************************************** */


    /************  creatng chartData   --tutorial method    *************/
    const languages = repos.reduce((acc, curr) => {
        const { language } = curr
        if (!language) return acc    //for null language values
        acc[language] = acc[language] ? { ...acc[language], value: acc[language].value + 1 } : { label: language, value: 1 }
        return acc
    }, {})

    //they are the same!!!
    // console.log(Object.values(languages))
    // console.log(chartData)

    //only selecting the users five biggest languages for cleaner look
    const charData = Object.values(languages).sort((a, b) => { return b.value - a.value }).slice(0.5)




    return (
        <section className='section'>
            <div className='charts-container'>
                <Pie data={charData} />
                <Pie data={charData} />
                <Pie data={charData} />
                <Pie data={charData} />
            </div>

        </section>
    )
}

export default Repos