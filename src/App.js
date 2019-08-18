import React, { Component } from "react";
import Header from "./components/header/";
import PointList from "./components/pointList/";
import FilterControls from "./components/filterControls";
import Form from './components/createPoint/';
import api from "./dataStore/stubAPI";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import _ from 'lodash';
import request from "superagent";

class App extends Component {
    componentDidMount() {
        request.get('http://localhost:3002').end((error, res) => {
            if (res) {
                let points = JSON.parse(res.text);
                api.initialize(points);
                this.setState({});
            } else {
                console.log(error);
            }
        });
    }

    state = { search: "", category: "all" };
    addPoint = (name, details, long, lat, category) => {
        api.add(name, details, long, lat, category);
        this.setState({});
    };
    incrementUpvote = (id) => {
        api.upvote(id) ;
        this.setState({});
    };
    deletePoint = (key) => {
        api.delete(key);
        this.setState({});
    };
    handleChange = (type, value) => {
        type === "name"
            ? this.setState({ search: value })
            : this.setState({ category: value });
    };
    render() {
        let points = _.sortBy(api.getAll(), point => -point.upvotes);
        let filteredPoints = points.filter(p => {
            const name = `${p.name}`;
            return name.toLowerCase().search(this.state.search.toLowerCase()) !== -1;
        });
        filteredPoints =
            this.state.category === "all"
                ? filteredPoints
                : filteredPoints.filter(p => p.category === this.state.category);
        let sortedPoints = _.sortBy(filteredPoints, p => p.name.last);
        return (
            <div className="jumbotron">
                <Header numPoints={sortedPoints.length} />
                <FilterControls
                    onUserInput={this.handleChange}
                />
                <Form handleAdd={this.addPoint} />
                <PointList points={sortedPoints}
                           upvoteHandler={this.incrementUpvote}
                           deleteHandler={this.deletePoint}/>
            </div>
        );
    }
}
 export default App;