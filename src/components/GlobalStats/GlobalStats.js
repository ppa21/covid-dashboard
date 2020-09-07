import React from "react";
import { Card } from "semantic-ui-react";

const GlobalStats = ({ globalStats }) => {
  return (
    <Card>
      <h1>
        <Card.Content header={"Global Stats"} textAlign="center" />
      </h1>
      <Card.Content>
        <Card.Description>
          <div>New Confirmed: {globalStats.NewConfirmed}</div>
          <div>New Deaths: {globalStats.NewDeaths} </div>
          <div>New Recovered: {globalStats.NewRecovered} </div>
          <div>Total Confirmed: {globalStats.TotalConfirmed} </div>
          <div>Total Deaths: {globalStats.TotalDeaths} </div>
          <div>Total Recovered: {globalStats.TotalRecovered} </div>
        </Card.Description>
      </Card.Content>
    </Card>
  );
};

export default GlobalStats;
