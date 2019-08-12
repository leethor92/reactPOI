import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import _ from 'lodash'
import api from '../dataStore/stubAPI';
import ReviewList from './reviewList'
import Form from './reviewForm'

class ReviewPage extends Component {

    addReview = (review, author) => {
        let pointId =  this.getId()
        api.addReview(pointId,review ,author );
        this.setState({});
    };

    incrementUpvote = (reviewId) => {
        let pointId =  this.getId()
        api.upvoteReview(pointId,reviewId) ;
        this.setState({});
    };

    getId = () => parseInt( this.props.match.params.point_id, 10);

    render() {
        let pointId = this.getId()
        let point = api.getPoint(pointId);
        let line = point.link?
            <a>{point.name} </a> :
            <span>{point.name} </span> ;
        let reviews = _.sortBy(point.reviews,
            (review) => - review.upvotes
        );
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-9 col-md-offset-1">
                        <h3>{line}</h3>
                        <ReviewList reviews={reviews}
                                     upvoteHandler={this.incrementUpvote } />
                        <Form point={point}  addReviewHandler={this.addReview} />
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(ReviewPage);