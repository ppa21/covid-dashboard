import React from "react";
import { Line } from "react-chartjs-2";

class Chart extends React.Component {
  populateGraph() {
    const data = {
      labels: this.props.date,
      datasets: [
        {
          label: "Active",
          fillColor: "rgba(60,179,113,0.2)",
          borderColor: "rgba(60,179,113,0.2)",
          strokeColor: "rgba(60,179,113,0.2)",
          pointColor: "rgba(60,179,113,1)",
          pointBackgroundColor: "rgba(60,179,113,1)",
          pointHoverBackgroundColor: "rgba(60,179,113,1)",
          pointHoverBorderWidth: "30",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(220,220,220,1)",
          data: this.props.active,
        },
        {
          label: "Confirmed",
          fillColor: "rgba(204,204,0,0.2)",
          borderColor: "rgba(204,204,0,0.2)",
          strokeColor: "rgba(151,187,205,1)",
          pointColor: "rgba(204,204,0,1)",
          pointBackgroundColor: "rgba(204,204,0,1)",
          pointHoverBorderWidth: "30",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(151,187,205,1)",
          data: this.props.confirmed,
        },
        {
          label: "Deaths",
          fillColor: "rgba(220,20,60,0.2)",
          borderColor: "rgba(220,20,60,0.2)",
          strokeColor: "rgba(151,187,205,1)",
          pointColor: "rgba(220,20,60,0.5)",
          pointBackgroundColor: "rgba(220,20,60,0.5)",
          pointHoverBorderWidth: "30",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(151,187,205,1)",
          data: this.props.deaths,
        },
        {
          label: "Recovered",
          fillColor: "rgba(0,191,255,0.2)",
          borderColor: "rgba(0,191,255,0.2)",
          strokeColor: "rgba(151,187,205,1)",
          pointColor: "rgba(0,191,255,1)",
          pointBackgroundColor: "rgba(0,191,255,1)",
          pointHoverBorderWidth: "30",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(151,187,205,1)",
          data: this.props.recovered,
        },
      ],
    };

    return data;
  }

  render() {
    return (
      <div>
        <h2>{this.props.country}</h2>
        <Line
          redraw
          data={this.populateGraph()}
          options={{ responsive: true }}
        />
      </div>
    );
  }
}

export default Chart;
