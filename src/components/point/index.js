import React, { Component, Fragment } from "react";
import "./point.css";
import "../../fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import buttons from "../../config/buttonsConfig";
import api from '../../dataStore/stubAPI'

class Point extends Component {
    handleVote = () =>  this.props.upvoteHandler(this.props.point.id);
    state = {
        status: "",
        details: this.props.point.details,
        longitude: this.props.point.longitude,
        latitude: this.props.point.latitude,
        previousDetails: {
            details: this.props.point.details,
            longitude: this.props.point.longitude,
            latitude: this.props.point.latitude,
        }
    };
    handleEdit = () => this.setState({ status: "edit" });
    handleSave = e => {
        e.preventDefault();
        let updatedDetails = this.state.details.trim();
        let updatedLongitude = this.state.longitude.trim();
        let updatedLatitude = this.state.latitude.trim();
        if (!updatedDetails || !updatedLongitude || !updatedLatitude) {
            return;
        }
        let { details, longitude, latitude} = this.state;
        this.setState({ status: "", previousDetails: { details, longitude, latitude} });
        api.update(this.state.previousDetails.id, updatedDetails, updatedLongitude, updatedLatitude);
    };
    handleCancel = () => {
        let { details, longitude, latitude } = this.state.previousDetails;
        this.setState({ status: "", details, longitude, latitude });
    };
    handleDetailsChange = e => this.setState({ details: e.target.value });
    handleLongitudeChange = e => this.setState({ longitude: e.target.value });
    handleLatitudeChange = e => this.setState({ latitude: e.target.value });
    handleDelete = () =>  this.props.deleteHandler(this.props.point.id);

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
            rightButtonHandler = this.handleDelete;
        }
        return (
            <div className="col-sm-3">
                <div className={`card  ${cardColor}`}>
                    <img
                        className="card-img-tag center "
                        alt={this.props.point.name}
                        src={this.props.point.image.thumbnail}
                    />
                    <div className="card-body">
                        <h5 className="card-title ">
                            {`${this.props.point.name}`}
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
                                        value={this.state.longitude}
                                        onChange={this.handleLongitudeChange}
                                    />
                                </p>
                                <p>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={this.state.latitude}
                                        onChange={this.handleLatitudeChange}
                                    />
                                </p>
                            </Fragment>
                            ):(
                            <Fragment>
                                <p>
                                    <span> {this.props.point.details}</span>
                                </p>
                                <p>
                                    <span> {this.props.point.longitude} </span>
                                </p>
                                <p>
                                    <span> {this.props.point.latitude} </span>
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