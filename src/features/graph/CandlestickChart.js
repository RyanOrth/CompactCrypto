import React, { Component } from "react";
import Chart from "react-apexcharts";

export class CandlestickChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
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
      // This is where the data goes that is displayed. Format for x is 'HH:mm', and format for y is [Timestamp, Open, High, Low, Close]
      series: [{
        data: [{
          x: '12:00',
          y: [51.98, 56.29, 51.59, 53.85]
        },
        {
          x: '12:30',
          y: [53.66, 54.99, 51.35, 52.95]
        },
        {
          x: '01:00',
          y: [52.76, 57.35, 52.15, 57.03]
        }]
      }]
    }
  }
  // This render function is what actually creates the chart.
  render() {
    return (
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="candlestick"
              width="750"
              height="500"
            />
    );
  }
}
