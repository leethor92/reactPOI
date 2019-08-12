import React, { Component } from "react";
import "./filterControls.css"

export default class FilterControls extends Component {
    handleChange = (e, type, value) => {
        e.preventDefault();
        this.props.onUserInput(type, value);
    };
    handleTextChange = e => {
        this.handleChange(e, "name", e.target.value);
    };
    handleCategoryChange = e => {
        this.handleChange(e, "category", e.target.value);
    };
    render() {
        return (
            <div className="container-fluid">
                <div className="row bg-warning">
                    <div className="col-md-12">
                        <h4>
                            <span>Filter </span>
                            <input type="text"
                                   placeholder="Point Search"
                                   onChange={this.handleTextChange}
                            />
                            <span> Location: </span>
                            <select id="category" type="text"
                                    onChange={this.handleCategoryChange}
                            >
                                <option value="all">All</option>
                                <option value="North">North</option>
                                <option value="East">East</option>
                                <option value="West">West</option>
                            </select>
                        </h4>
                    </div>
                </div>
            </div>
        );
    }
}