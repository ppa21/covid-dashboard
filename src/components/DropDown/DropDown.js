import React from "react";
import { Dropdown } from "semantic-ui-react";

const DropDown = ({ countries, onSelect }) => {
  const countriesDropdown = countries.map((country) => {
    country.text = country.Country;
    country.key = country.Slug;
    country.value = country.Country;
    country.flag = country.Slug;
    return country;
  });

  return (
    <div>
      <Dropdown
        placeholder="Select Country"
        fluid
        search
        selection
        options={countriesDropdown}
        onChange={onSelect}
      />
      <br />
    </div>
  );
};

export default DropDown;
