import React from 'react';
import { storiesOf } from '@storybook/react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Header from '../src/components/header/'
import FilterControls from '../src/components/filterControls/';
import CreatePoint from '../src/components/createPoint/';
import Point from '../src/components/point/';
import PointList from '../src/components/pointList/';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { action } from "@storybook/addon-actions";
import { MemoryRouter, Route } from "react-router";
import ReviewForm from "../src/components/reviewForm";
import Review from "../src/components/review";
import ReviewList from "../src/components/reviewList";
import LoginForm from "../src/components/authentication/loginForm";



const point = {
    id: 1 ,
    picture: {thumbnail: './inishmore.png'},
    name: 'Aran Island',
    details: 'The Aran Islands are 3 rocky isles guarding the mouth of Galway Bay, in western Ireland',
    category: 'West',
    longitude: '53.1289',
    latitude: '9.7197',
    upvotes: 10
}



storiesOf("Point List App/Point", module).add("default", () => (
    <Point point={point}/>
));

storiesOf("Point List App/Review page/Review Form", module)
    .addDecorator(story => (
        <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
    ))
    .add("default", () => (
    <ReviewForm point={point} addReviewHandler={action("review added")} />
));

storiesOf("Point List App/Review page/Review", module).addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
)).add("default", () => (
    <Review upvoteHandler={action("upvoted")} review={review} />
));

storiesOf("Point List App/Header", module)
    .addDecorator(story => (
        <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
    ))
    .add("default", () => <Header />);

const review = {
    id: 1,
    author: "Joe Bloggs",
    review: "I agree with .....",
    upvotes: 10
};

storiesOf("Point List App/Review page/Review List", module).add("default", () => {
    const defaultReviews = [
        review,
        { ...review, author: "Jane Smith", upvotes: 3, id: 2 },
        { ...review, review: "On the other hand", id: 3 },
        { ...review, author: "Jill Dwyer", upvotes: 5, id: 4 }
    ];
    return (
        <ReviewList upvoteHandler={action("upvoted")} reviews={defaultReviews} />
    );
});

storiesOf("Point List App/Header", module)
    .addDecorator(story => (
        <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
    )).add("default", () => (
    <Header numPoints= {10} />
));

storiesOf("Point List App/Point", module)
    .addDecorator(story => (
        <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
    ))
    .add("default", () => <Point point={point} upvoteHandler={action("upvoted")} /> )
    .add("No point", () => <Point point={{ ...point, name: "" }} upvoteHandler={action("upvoted")}/>);

storiesOf("Point List App/Filter Controls", module)
    .add("default", () => (
    <FilterControls />
));

storiesOf("Point List App/Create Point", module).add("default", () => <CreatePoint />);

storiesOf("Point List App/Point List", module).addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
)).add("default", () => {
    const samples = [point, point, point, point, point]
    return <PointList points={samples}/>
});

storiesOf("Point List App/Point", module)
    .addDecorator(story => (
        <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
    )).add("default", () => (
    <Point point={point} deleteHandler={action('Delete confirmed') }/>
));

storiesOf("Point List App/Login Form", module)
    .addDecorator(story => (
        <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
    ))
    .add("default", () => (
        <LoginForm />
    ));

