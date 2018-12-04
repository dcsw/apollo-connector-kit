import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from 'react-apollo'
import apolloClient from "./apollo";
import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <ApolloProvider client={apolloClient}>
      <App match={{}} />
    </ApolloProvider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
