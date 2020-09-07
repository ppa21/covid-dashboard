import React from "react";
import Countries from "../Countries/Countries";
import GlobalStats from "../GlobalStats/GlobalStats";
import DropDown from "../DropDown/DropDown";
import "./DisplayStats.css";

class DisplayStats extends React.Component {
  state = { country: "", countryStats: null };

  onSelect = async (event, value) => {
    await this.setState({ country: value.value });
    this.setState({ countryStats: this.getCountryStats() });
    this.props.getCountry(this.state.countryStats.Slug, this.state.country);
  };

  getCountryStats() {
    const countries = this.props.countries;
    const country = this.state.country;

    for (var i = 0; i < countries.length; i++) {
      if (countries[i].Country === country) {
        return countries[i];
      }
    }
  }

  render() {
    return (
      <div>
        <div className="drop-down">
          <DropDown countries={this.props.countries} onSelect={this.onSelect} />
        </div>
        <div className="global-stats">
          <GlobalStats globalStats={this.props.globalStats} />
        </div>
        <div className="countries-stats">
          <Countries country={this.state.countryStats} />
        </div>
      </div>
    );
  }
}

export default DisplayStats;
