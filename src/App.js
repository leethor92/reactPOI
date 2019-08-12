import React, { Component } from "react";
import Header from "./components/header/";
import PointList from "./components/pointList/";
import FilterControls from "./components/filterControls/";
import api from "./dataStore/stubAPI";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import _ from 'lodash';
import request from "superagent";

class App extends Component {
    componentDidMount() {
        request.get('https://randomapi.com/api/?key=XZC6-0Q64-1Z7Z-WPWG&ref=5zmyhkkb&results=10').end((error, res) => {
            if (res) {
                let { results: points } = JSON.parse(res.text);
                api.initialize(points);
                this.setState({});
            } else {
                console.log(error);
            }
        });
    }
    state = { search: "", category: "all" };
    incrementUpvote = (id) => {
        api.upvote(id) ;
        this.setState({});
    };
    deletePoint = (key) => {
        api.delete(key);
        this.setState({});
    };
    render() {
        let points = _.sortBy(api.getAll(), point => -point.upvotes);
        return (
            <div className="jumbotron">
                <Header numPoints={points.length} />
                <FilterControls />
                <PointList points={points}
                           upvoteHandler={this.incrementUpvote}
                           deleteHandler={this.deletePoint}/>
            </div>
        );
    }
}

export default App;