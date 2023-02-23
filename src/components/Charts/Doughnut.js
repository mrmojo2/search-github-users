import React from 'react'
import ReactFC from 'react-fusioncharts'
import FusionCharts from 'fusioncharts'
import Chart from 'fusioncharts/fusioncharts.charts'
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion'

ReactFC.fcRoot(FusionCharts, Chart, FusionTheme)


const Doughnut = ({ data }) => {
    const chartConfigs = {
        type: 'doughnut2d',
        width: '100%',
        height: '400',
        dataFormat: 'json',
        dataSource: {
            chart: {
                caption: 'Stars Per Language',
                theme: 'fusion',
                decimals: 0,
                douughnutRadius: '60%',
                showPercentVAlues: 0,
            },
            data,
        }
    }
    return <ReactFC {...chartConfigs} />
}

export default Doughnut