import React, { Component } from "react";
import Point from "../point/";
import './pointList.css';

export default class PointList extends Component {
    render() {
        const pointCards = this.props.points.map(
            p => (
            <Point key={p.id} point={p}  upvoteHandler={this.props.upvoteHandler} deleteHandler={this.props.deleteHandler} />
        ));
        return (
            <div className="container-fluid points bg-info">
                <div className="row">{pointCards}</div>
            </div>
        );
    }
}