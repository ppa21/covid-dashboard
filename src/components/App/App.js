import React from "react";
import covid from "../../api/covid";
import DisplayStats from "../DisplayStats/DisplayStats";
import DisplayChart from "../DisplayChart/DisplayChart";
import "./App.css";

class App extends React.Component {
  state = { globalStats: {}, countries: [], countrySlug: "", country: "" };

  async componentDidMount() {
    await covid.get("/summary").then((res) => {
      this.setState({
        globalStats: res.data.Global,
        countries: res.data.Countries,
      });
    });
  }

  getCountry = (countrySlug, country) => {
    this.setState({ countrySlug: countrySlug, country: country });
  };

  render() {
    return (
      <div className="grid-container">
        <div className="grid-item stats">
          <DisplayStats
            globalStats={this.state.globalStats}
            countries={this.state.countries}
            getCountry={this.getCountry}
          />
        </div>
        <div className="grid-item chart">
          <DisplayChart
            countrySlug={this.state.countrySlug}
            country={this.state.country}
          />
        </div>
      </div>
    );
  }
}

export default App;
