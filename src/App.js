import React, { Component } from "react";
import Header from "./components/header/";
import PointList from "./components/pointList/";
import FilterControls from "./components/filterControls/";
import api from "./dataStore/stubAPI";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import _ from 'lodash';

class App extends Component {
    state = { search: "", category: "all" };
    incrementUpvote = (id) => {
        api.upvote(id) ;
        this.setState({});
    };
    render() {
        let points = _.sortBy(api.getAll(), point => -point.upvotes);
        return (
            <div className="jumbotron">
                <Header numPoints={points.length} />
                <FilterControls />
                <PointList points={points}
                           upvoteHandler={this.incrementUpvote}/>
            </div>
        );
    }
}

export default App;