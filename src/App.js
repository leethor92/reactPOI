import React, { Component } from "react";
import Header from "./components/header/";
import PointList from "./components/pointList/";
import FilterControls from "./components/filterControls/";

class App extends Component {
  render() {
    const sample = {
      id: 1 ,
      name: 'Aran Island',
      details: 'The Aran Islands are 3 rocky isles guarding the mouth of Galway Bay, in western Ireland',
      location: 'West',
      longitude: '53.1289',
      latitude: '9.7197',
      upvotes: 10
    }

    const points = [sample, sample, sample, sample, sample];

    return (
        <div className="jumbotron">
          <Header numPoints={points.length} />
          <FilterControls />
          <PointList points={points} />
        </div>
    );
  }
}

export default App;