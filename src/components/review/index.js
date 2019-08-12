import React, { Component, Fragment } from "react";
import "../../fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './review.css'

export default class Review extends Component {
    handleVote = () => {
        this.props.upvoteHandler(this.props.review.id);
    };
    render() {
        return (
            <Fragment>
        <span className=" ptr" onClick={this.handleVote}>
          <FontAwesomeIcon icon={["fas", "thumbs-up"]} size="2x" />
            {` ${this.props.review.upvotes}`}
        </span>
                <span className="reviewitem">
          {`${this.props.review.review} (by ${this.props.review.author})`}
        </span>
                <p></p>
            </Fragment>
        );
    }
}