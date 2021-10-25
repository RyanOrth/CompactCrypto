import React, { Component } from "react";
import Chart from "react-apexcharts";
import jsonData from '../../data/data.json';
import { getSelectedToken } from '../sideTable/sideTableSlice';
import { useSelector } from "react-redux";

export const CandlestickChart = (props) => {
  const data = [];
  const token = useSelector(getSelectedToken);

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
  const state = {
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
      data,
    }]
  }


  // const token = getSelectedToken();


  // This render function is what actually creates the chart.

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