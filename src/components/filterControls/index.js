import React, { Component } from "react";
import "./filterControls.css"

export default class FilterControls extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row bg-warning">
                    <div className="col-md-12">
                        <h4>
                            <span>Filter </span>
                            <input type="text" placeholder="Point Search" />
                            <span> Location: </span>
                            <select id="category">
                                <option value="all">All</option>
                                <option value="north">North</option>
                                <option value="east">East</option>
                                <option value="west">West</option>
                                <option value="south">South</option>
                            </select>
                        </h4>
                    </div>
                </div>
            </div>
        );
    }
}