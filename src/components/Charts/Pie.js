import React from 'react'
import ReactFC from 'react-fusioncharts' //react-fusioncharts COMPONENT
import FusionCharts from 'fusioncharts'  //fusion-charts LIBRARY
import Chart from 'fusioncharts/fusioncharts.charts'//chart TYPE
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion'//include the theme as fusion

ReactFC.fcRoot(FusionCharts, Chart, FusionTheme)

const Pie = ({ data }) => {
    const chartConfigs = {
        type: 'pie2d',
        width: '100%',
        height: '400',
        dataFormat: 'json',

        //for dataSource reference this:
        //https://www.fusioncharts.com/dev/chart-attributes/pie2d
        dataSource: {
            chart: {
                caption: 'Languages',
                theme: 'fusion',
                pieRadius: '35%',
            },
            data,
        }
    }
    return <ReactFC {...chartConfigs} />
}

export default Pie