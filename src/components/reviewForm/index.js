import React, { Component } from "react";

export default class reviewForm extends Component {
    state = { review: "", author: "" };

    handleReviewChange = e => {
        this.setState({ review: e.target.value });
    };

    handleAuthorChange = e => {
        this.setState({ author: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();
        let review = this.state.review.trim();
        let author = this.state.author.trim();
        if (!review) {
            return;
        }
        this.props.addReviewHandler(review, author);
        this.setState({ review: "", author: "" });
    };

    render() {
        return (
            <form style={{ marginTop: "30px" }}>
                <h3>Add a new review, Be kind!!!</h3>

                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Review"
                        value={this.state.review}
                        onChange={this.handleReviewChange}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Your name"
                        value={this.state.author}
                        onChange={this.handleAuthorChange}
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={this.onSubmit}
                >
                    Submit
                </button>
            </form>
        );
    }
}