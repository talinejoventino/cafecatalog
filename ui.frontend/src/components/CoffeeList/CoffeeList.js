// src/components/CoffeeList/CoffeeList.js
import React from "react";
import {
  MapTo,
  withComponentMappingContext,
  AllowedComponentsContainer
} from "@adobe/aem-react-editable-components";
import "./CoffeeList.css";

const EditConfig = {
  emptyLabel: "Coffee List",
  isEmpty: (props) =>
    !props || !props.cqItems || Object.keys(props.cqItems).length === 0
};

const CoffeeList = (props) => (
  <div className="coffee-list-root">
    <AllowedComponentsContainer {...props} />
  </div>
);

export default MapTo("cafecatalog/components/coffeelist")(
  withComponentMappingContext(CoffeeList),
  EditConfig
);
