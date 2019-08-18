import React, { Fragment , Component } from 'react';
import { withRouter } from 'react-router-dom';
import _ from 'lodash'
import api from '../dataStore/stubAPI';
import ReviewList from './reviewList'
import Form from './reviewForm'
import "./reviewPage.css";
import Map from "./map";
import env from '../env.json';

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
        const location = { lng: point.long, lat: point.lat };
        return (
            <Fragment>
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
                <div className="container" >
                    <Map
                        isMarkerShown
                        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${env.REACT_GOOGLE_MAP}&v=3.exp&libraries=geometry,drawing,places`}
                        loadingElement={<div style={{ height: `100%` }} />}
                        location={location}
                        containerElement={<div style={{ height: `400px` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                    />
                </div>
            </Fragment>
        )
    }
}

export default withRouter(ReviewPage);