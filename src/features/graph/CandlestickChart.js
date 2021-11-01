import React from "react";
import Chart from "react-apexcharts";
import jsonData from '../../data/data.json';
import { getSelectedToken } from '../sideTable/sideTableSlice';
import { getGraphViewToken } from "../graphViewTable/graphViewTableSlice";
import { useSelector } from "react-redux";
import { BiHelpCircle } from 'react-icons/bi';
import './candleStick.css';
export const CandlestickChart = (props) => {
  const data = [];
  const compact_token = useSelector(getSelectedToken);
	const graph_token = useSelector(getGraphViewToken);
  const token = (props.currentPage === 'COMPACT_VIEW') ? compact_token : graph_token;
  const objOfDays = jsonData.filter(x => x.SYMBOL === token).pop()['DATA'];
  for (let d = new Date('2021-10-10'); d <= new Date('2021-10-23'); d.setDate(d.getDate() + 1)) {
    const dayData = objOfDays[d.toISOString().substr(0, 10)];
    data.push({
      x: d.toISOString().substr(0, 10),
      y: [dayData['open'], dayData['high'], dayData['low'], dayData['close']],
    });
  }
  const state = {
    options: {
      chart: {
        id: "basic-bar",
        toolbar: {
          tools: {
            download: true,
            customIcons: [{
              icon: '<span>(?)</span>',//'<BiHelpCircle size=5  color="black">',
              index: 6,
              title: 'Help',
              class: 'custom-icon',
              click: function (chart, options, e) {
                console.log('click')
              },

            }],
          },
        },
      },
      size: {
        x: props.width,
        y: props.height,
      },
      // This section lets you define the properties for the x-axis. Many more at https://apexcharts.com/docs/options/xaxis/
      xaxis: {
        type: 'datetime',
        labels: {
          showLabels: true,
          // format: 'yyyy MM dd',
          style: {
            colors: 'white'
          },
          datetimeFormatter: {
            year: 'yyyy',
            month: 'MMM \'yy',
            day: 'MMM dd'
          }
        }
      },
      // These are the y-axis options. They are set automatically so not much to change here
      yaxis: {
        labels: {
          style: {
            colors: 'white'
          }
        }
      },
    },
    // This is where the data goes that is displayed. Format for x is 'HH:mm', and format for y is [Open, High, Low, Close]
    series: [{
      data,
    }]
  }


  // const token = getSelectedToken();



  return (
    <Chart
      options={state.options}
      series={state.series}
      type="candlestick"
      width={state.options.size.x}
      height={state.options.size.y}
    />
  );

}




/*
export class CandlestickChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        size: {
          x: props.width,
          y: props.height,
        },
        // This section lets you define the properties for the x-axis. Many more at https://apexcharts.com/docs/options/xaxis/
        xaxis: {
          labels: {
            showLabels: true,
            format: 'HH:mm',
            style: {
              colors: 'white'
            }
          }
        },
        // These are the y-axis options. They are set automatically so not much to change here
        yaxis: {
          labels: {
            style: {
              colors: 'white'
            }
          }
        }
      },
      // This is where the data goes that is displayed. Format for x is 'HH:mm', and format for y is [Open, High, Low, Close]
      series: [{
        data: this.getData(props.token)
      }]
    }
  }
  getData(token) {
    // const token = getSelectedToken();
    const data = [];
    const objOfDays = jsonData.filter(x => x.SYMBOL === token).pop()['DATA'];
    console.log(objOfDays);
    for (let d = new Date('2021-10-10'); d <= new Date('2021-10-23'); d.setDate(d.getDate() + 1)) {
      const dayData = objOfDays[d.toISOString().substr(0, 10)];
      console.log(dayData);
      data.push({
        x: d.toISOString().substr(0, 10),
        y: [dayData['open'], dayData['high'], dayData['low'], dayData['close']],
      });
    }
    return data;
  }
  // This render function is what actually creates the chart.
  render() {
    return (
      <Chart
        options={this.state.options}
        series={this.state.series}
        type="candlestick"
        width={this.state.options.size.x}
        height={this.state.options.size.y}
      />
    );
  }
}
*/