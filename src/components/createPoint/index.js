import React, { Component } from 'react';
import './createPoint.css';

const regions = [
    { label: "North", value: 1 },
    { label: "South", value: 2 },
    { label: "East", value: 3 },
    { label: "West", value: 4 },
];

export default class Form extends Component {
    render() {
        return (
            <form  className="form bg-dark text-light">
                <h3>Add a new point</h3>
                <div className="form-group">
                    <input type="text"
                           className="form-control"
                           placeholder="Name"></input>
                </div>
                <div className="form-group">
                    <input type="text"
                           className="form-control"
                           placeholder="Details"></input>
                </div>

                <div className="form-group">
                    <input type="text"
                           className="form-control"
                           placeholder="0.00000"></input>
                </div>
                <div className="form-group">
                    <input type="text"
                           className="form-control"
                           placeholder="0.00000"></input>
                </div>
                <div className="form-group">
                    <select>
                        <option value="north">North</option>
                        <option value="south">South</option>
                        <option selected value="west">West</option>
                        <option value="east">East</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Add</button>
            </form>
        );
    }
}