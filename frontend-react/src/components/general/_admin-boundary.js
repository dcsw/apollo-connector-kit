import { compose, branch, renderComponent, pure } from "recompose";
import { graphql } from "react-apollo";
import { adminQuery } from "../../api";
import { default as Loading } from "./_loading";
import Delay from "react-delay-render";
import React from "react";

const connectionData = graphql(adminQuery, {
  options: { fetchPolicy: "network-only" }
});

const ConnectionResult = ({ children }) => children;
const NoChildren = () => "";

const hideHoC = branch(
  ({ data: { _checkAdmin = false } = {} }) => !_checkAdmin,
  renderComponent(Delay({ delay: 200 })(NoChildren)),
);

export default compose(
  connectionData,
  Loading,
  hideHoC,
  pure
)(ConnectionResult);
