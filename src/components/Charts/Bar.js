import React from 'react'
import ReactFC from 'react-fusioncharts' //react-fusioncharts COMPONENT
import FusionCharts from 'fusioncharts'  //fusion-charts LIBRARY
import Chart from 'fusioncharts/fusioncharts.charts'//chart TYPE
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion'//include the theme as fusion

ReactFC.fcRoot(FusionCharts, Chart, FusionTheme)

const Bar = ({ data }) => {
    const chartConfigs = {
        type: 'bar2d',
        width: '100%',
        height: '400',
        dataFormat: 'json',

        //for dataSource reference this:
        //https://www.fusioncharts.com/dev/chart-attributes/pie2d
        dataSource: {
            chart: {
                caption: 'Most Forked Repos',
                yAxisName: 'Forks',
                xAxisName: 'Repos',
                XAxisNameFontSize: '16px',
                YAxisNameFontSize: '16px',
                theme: 'fusion',
                paletteColors:
                    "#5D62B5, #2caeba, #FFC533, #F2726F, #8d6e63, #1de9b6, #6E80CA",
            },
            data,
        }
    }
    return <ReactFC {...chartConfigs} />
}

export default Bar