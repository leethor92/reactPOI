import React, { Component } from 'react';
import './createPoint.css';

export default class Form extends Component {

    state = { name: '', details: '',  lat: '', long:'', category: ''};

    handleNameChange = (e) =>  this.setState({name: e.target.value});
    handleDetailsChange = (e) =>  this.setState({details: e.target.value});
    handleLatChange = (e) => this.setState({lat: e.target.value});
    handleLongChange = (e) => this.setState({long: e.target.value});
    handleCategoryChange = (e) => this.setState({category: e.target.value});

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleAdd( this.state.name, this.state.details, this.state.lat, this.state.long, this.state.category)
        this.setState({ name: '', details:'', lat: '', long: '', category:''})
    }

    render() {
        return (
            <form  className="form bg-dark text-light">
                <h3>Add a new point</h3>
                <div className="form-group">
                    <input type="text"
                           className="form-control"
                           placeholder="Name"
                           value={this.state.name}
                           onChange={this.handleNameChange}/>
                </div>
                <div className="form-group">
                    <input type="text"
                           className="form-control"
                           placeholder="Details"
                           value={this.state.details}
                           onChange={this.handleDetailsChange}/>
                </div>
                <div className="form-group">
                    <input type="number"
                           className="form-control"
                           placeholder="latitude"
                           value={this.state.lat}
                           onChange={this.handleLatChange}/>
                </div>
                <div className="form-group">
                    <input type="number"
                           className="form-control"
                           placeholder="longitude"
                           value={this.state.long}
                           onChange={this.handleLongChange}/>
                </div>
                <div className="form-group">
                    <select value={this.state.category} onChange={this.handleCategoryChange}>
                        <option value="North">North</option>
                        <option value="South">South</option>
                        <option selected value="West">West</option>
                        <option value="East">East</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary"
                        onClick={this.handleSubmit}>Add</button>
            </form>
        );
    }
}