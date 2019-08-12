import React, { Component, Fragment } from "react";
import "./point.css";
import "../../fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import buttons from "../../config/buttonsConfig";
import api from '../../dataStore/stubAPI';
import { Link } from 'react-router-dom';

class Point extends Component {
    handleVote = () =>  this.props.upvoteHandler(this.props.point.id);
    state = {
        status: "",
        details: this.props.point.details,
        long: this.props.point.long,
        lat: this.props.point.lat,
        previousDetails: {
            details: this.props.point.details,
            long: this.props.point.long,
            lat: this.props.point.lat,
        }
    };
    handleEdit = () => this.setState({ status: "edit" });
    handleCancel = () => {
        let { details, long, lat } = this.state.previousDetails;
        this.setState({ status: "", details, long, lat});
    };
    handleSave = e => {
        e.preventDefault();
        let updatedDetails = this.state.details.trim();
        let updatedLong = this.state.long;
        let updatedLat = this.state.lat;
        if (!updatedDetails || !updatedLong || !updatedLat) {
            return;
        }
        let { details, long, lat} = this.state;
        this.setState({ status: "", previousDetails: { details, long, lat} });
        api.update(this.state.previousDetails.id, updatedDetails, updatedLong, updatedLat);
    };


    handleDetailsChange = e => this.setState({ details: e.target.value });
    handleLongChange = e => this.setState({ long: e.target.value });
    handleLatChange = e => this.setState({ lat: e.target.value });
    handleDelete = () =>  this.setState({ status : 'del'} );
    handleConfirm = (e) => {
        e.preventDefault();
        this.props.deleteHandler(this.props.point.id);
    };

    render() {

        let activeButtons = buttons.normal;
        let leftButtonHandler = this.handleEdit;
        let rightButtonHandler = this.handleDelete;
        let cardColor = "bg-white";
        if (this.state.status === "edit") {
            cardColor = "bg-primary";
            activeButtons = buttons.edit;
            leftButtonHandler = this.handleSave;
            rightButtonHandler = this.handleCancel;
        } else if (this.state.status === 'del' ) {
            cardColor = "bg-warning";
            activeButtons = buttons.delete;
            leftButtonHandler = this.handleCancel;
            rightButtonHandler = this.handleConfirm;
        }
        return (
            <div className="col-sm-3">
                <div className={`card  ${cardColor}`}>

                    <div className="card-body">
                        <h5 className="card-title ">
                            {`${this.props.point.name}`}
                            <span>
                            <Link to={`/points/${this.props.point.id}` }>Reviews</Link>
                            </span>
                        </h5>
                        {this.state.status === "edit"?(
                            <Fragment>
                                <p>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={this.state.details}
                                    onChange={this.handleDetailsChange}
                                />
                                </p>
                                <p>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={this.state.long}
                                        onChange={this.handleLongChange}
                                    />
                                </p>
                                <p>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={this.state.lat}
                                        onChange={this.handleLatChange}
                                    />
                                </p>
                            </Fragment>
                            ):(
                            <Fragment>
                                <p>
                                    <span> {this.props.point.details}</span>
                                </p>
                                <p>
                                    <span> {this.props.point.long} </span>
                                </p>
                                <p>
                                    <span> {this.props.point.lat} </span>
                                </p>
                                <p>
                                    <span> {this.props.point.category} </span>
                                </p>
                            </Fragment>
                        )}
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
                            <button type="button" className={"btn w-100 " + activeButtons.leftButtonColor}
                                    onClick={leftButtonHandler}>
                                <FontAwesomeIcon icon={["fas", "edit"]} />
                                {activeButtons.leftButtonVal}
                            </button>

                            <button type="button" className={"btn w-100 " + activeButtons.rightButtonColor}
                                    onClick={rightButtonHandler}>
                                <FontAwesomeIcon icon={["fas", "trash-alt"]} />
                                {activeButtons.rightButtonVal}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Point;