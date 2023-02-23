import React from 'react'
import ReactFC from 'react-fusioncharts' //react-fusioncharts COMPONENT
import FusionCharts from 'fusioncharts'  //fusion-charts LIBRARY
import Chart from 'fusioncharts/fusioncharts.charts'//chart TYPE
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion'//include the theme as fusion

ReactFC.fcRoot(FusionCharts, Chart, FusionTheme)

const Column = ({ data }) => {
    const chartConfigs = {
        type: 'column2d',
        width: '100%',
        height: '400',
        dataFormat: 'json',

        //for dataSource reference this:
        //https://www.fusioncharts.com/dev/chart-attributes/pie2d
        dataSource: {
            chart: {
                caption: 'Most Popular Repos',
                yAxisName: 'Stars',
                xAxisName: 'Repos',
                XAxisNameFontSize: '16px',
                YAxisNameFontSize: '16px',
                valueFontSize: 16,
                placeValuesInside: 1,
                theme: 'fusion',
                paletteColors:
                    "#2caeba, #5D62B5, #FFC533, #F2726F, #8d6e63, #1de9b6, #6E80CA",
            },
            data,
        }
    }
    return <ReactFC {...chartConfigs} />
}

export default Column