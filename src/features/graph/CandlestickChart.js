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
        xaxis: {
          labels: {
            showLabels: true,
            datetimeFormatter: {
              year: 'yyyy',
              month: 'MMM \'yy',
              day: 'dd MMM',
              hour: 'HH:mm'
            },
            format: 'HH:mm'
          }
  }
      },
      // this is where the data goes that is displayed, format is [Timestampo]
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

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="candlestick"
              width="500"
            />
          </div>
        </div>
      </div>
    );
  }
}
