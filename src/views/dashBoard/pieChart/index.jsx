import React from 'react'
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/pie'

var myChart = null
export default class LineChart extends React.Component {
    componentDidMount() {
        myChart = echarts.init(document.getElementById('pieChartId'))
        myChart.setOption({
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
              },
              legend: {
                left: 'center',
                bottom: '10',
                data: ['Industries', 'Technology', 'Forex', 'Gold', 'Forecasts']
              },
              calculable: true,
              series: [
                {
                  name: 'WEEKLY WRITE ARTICLES',
                  type: 'pie',
                  roseType: 'radius',
                  radius: [15, 95],
                  center: ['50%', '38%'],
                  data: [
                    { value: 320, name: 'Industries' },
                    { value: 240, name: 'Technology' },
                    { value: 149, name: 'Forex' },
                    { value: 100, name: 'Gold' },
                    { value: 59, name: 'Forecasts' }
                  ],
                  animationEasing: 'cubicInOut',
                  animationDuration: 2600
                }
              ]
        })
    }
    componentWillUnmount(){
        myChart.dispose()
        myChart =  null
        console.log(myChart)
    }
    render() {
        const {height='400px',width='100%'} = this.props
        return <div id='pieChartId' style={{width,height}}></div>
    }
}

