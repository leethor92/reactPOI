import React, { Component } from "react";
import "./point.css";
import "../../fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Point extends Component {
    handleVote = () =>  this.props.upvoteHandler(this.props.point.id);
    state = {
        status: "",
        name: this.props.point.name,
        details: this.props.point.details,
        category: this.props.point.category,
        longitude: this.props.point.longitude,
        latitude: this.props.point.latitude,
        previousDetails: {
            name: this.props.point.name,
            details: this.props.point.details,
            longitude: this.props.point.longitude,
            latitude: this.props.point.latitude,
            category: this.props.point.category,
        }
    };
    render() {
        return (
            <div className="col-sm-3">
                <div className="card">
                    <img
                        className="card-img-tag center "
                        alt={this.props.point.name}
                        src={this.props.point.image.thumbnail}
                    />
                    <div className="card-body">
                        <h5 className="card-title ">
                            {`${this.props.point.name}`}
                        </h5>
                        <p key="location">
                            <span> {this.props.point.details}</span>
                        </p>
                        <p key="location">
                            <span> {this.props.point.category}</span>
                        </p>
                        <p key="longitude">
                            <span> {this.props.point.longitude} </span>
                        </p>
                        <p key="longitude">
                            <span> {this.props.point.latitude} </span>
                        </p>
                        <span className="ptr" onClick={this.handleVote}>
                    <FontAwesomeIcon icon={["fas", "heart"]} size="2x" />
                            {` ${this.props.point.upvotes}`}
                        </span>
                    </div>
                    <div className="card-footer">
                        <div
                            className="btn-group d-flex btn-group-justified"
                            role="group"
                            aria-label="..."
                        >
                            <button type="button" className={"btn btn-default w-100"}>
                                <FontAwesomeIcon icon={["fas", "edit"]} />
                                {" Edit "}
                            </button>
                            <button type="button" className={"btn btn-danger w-100"}>
                                <FontAwesomeIcon icon={["fas", "trash-alt"]} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Point;