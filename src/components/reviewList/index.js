import React, {Fragment} from 'react';
import Review from '../review';

export default ( {reviews, upvoteHandler} )  => {
    let items = reviews.map(
        (review,index) =>
            <Review key={index}
                     review={review} upvoteHandler={upvoteHandler}  />
    )
    return (
        <Fragment>
            {items}
        </Fragment>
    )
};