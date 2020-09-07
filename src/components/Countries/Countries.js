import React from "react";
import { Card } from "semantic-ui-react";

const Countries = ({ country }) => {
  if (!country) {
    return <div></div>;
  }

  return (
    <Card>
      <h1>
        <Card.Content header={"Country Stats"} textAlign="center" />
      </h1>
      <Card.Content>
        <Card.Description>
          <div>Country: {country.Country}</div>
          <div>Country Code: {country.CountryCode}</div>
          <div>Slug: {country.Slug}</div>
          <div>New Confirmed: {country.NewConfirmed}</div>
          <div>New Deaths: {country.NewDeaths}</div>
          <div>New Recovered: {country.NewRecovered}</div>
          <div>Total Confirmed: {country.TotalConfirmed}</div>
          <div>Total Deaths: {country.TotalDeaths}</div>
          <div>Total Recovered: {country.TotalRecovered}</div>
          <div>Date: {country.Date}</div>
        </Card.Description>
      </Card.Content>
    </Card>
  );
};

export default Countries;
