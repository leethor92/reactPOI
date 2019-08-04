import React, { Component } from "react";
import Header from "./components/header/";
import PointList from "./components/pointList/";
import FilterControls from "./components/filterControls/";
import api from "./dataStore/stubAPI";

class App extends Component {
    render() {
        let points = api.getAll();
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