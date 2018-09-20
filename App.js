import React from "react";

console.disableYellowBox = true;

import Routes from "./src/Routes";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Routes />;
  }
}

export default App;
