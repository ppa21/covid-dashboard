import React from "react";
import covid from "../../api/covid";
import LineChart from "./Chart";
import "./DisplayChart.css";

class Chart extends React.Component {
  state = {
    countryStats: [],
    countrySlug: "",
    country: "",
    active: [],
    confirmed: [],
    deaths: [],
    recovered: [],
    date: [],
  };

  getCountryStats = async () => {
    if (this.props.country === this.state.country) {
      return;
    }

    await covid.get(`/country/${this.props.countrySlug}`).then((res) => {
      this.setState({
        countryStats: res.data,
        countrySlug: this.props.countrySlug,
        country: this.props.country,
      });

      this.extractDataSets();
    });
  };

  extractDataSets() {
    this.setState({
      active: [],
      confirmed: [],
      deaths: [],
      recovered: [],
      date: [],
    });

    const countryStats = this.state.countryStats;
    const active = this.state.active;
    const confirmed = this.state.confirmed;
    const deaths = this.state.deaths;
    const recovered = this.state.recovered;
    const date = this.state.date;

    for (var i = 0; i < countryStats.length; i++) {
      active.push(countryStats[i].Active);
      confirmed.push(countryStats[i].Confirmed);
      deaths.push(countryStats[i].Deaths);
      recovered.push(countryStats[i].Recovered);
      date.push(countryStats[i].Date);
    }

    const formattedDate = this.formatDate(date);

    this.setState({
      active: active,
      confirmed: confirmed,
      deaths: deaths,
      recovered: recovered,
      date: formattedDate,
    });
  }

  formatDate(date) {
    const formattedDate = [];
    for (var i = 0; i < date.length; i++) {
      formattedDate.push(date[i].split("T")[0]);
    }

    return formattedDate;
  }

  render() {
    if (!this.props.countrySlug) {
      return <div></div>;
    }
    this.getCountryStats();
    return (
      <div className="chart">
        <LineChart
          active={this.state.active}
          confirmed={this.state.confirmed}
          deaths={this.state.deaths}
          recovered={this.state.recovered}
          date={this.state.date}
        />
      </div>
    );
  }
}

export default Chart;
