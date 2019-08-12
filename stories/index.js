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

<<<<<<< HEAD

=======
>>>>>>> 7fb5a2ec1940880aa6bb7456b817840499efe373
const sample = {
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
    <Point point={sample}/>
));

storiesOf("Point List App/Header", module).add("default", () => (
    <Header numPoints= {10} />
));

storiesOf("Point List App/Point", module)
    .add("default", () => <Point point={point} upvoteHandler={action("upvoted")} /> )
    .add("No point", () => <Point point={{ ...point, name: "" }} upvoteHandler={action("upvoted")}/>);

storiesOf("Point List App/Filter Controls", module).add("default", () => (
    <FilterControls />
));

storiesOf("Point List App/Create Point", module).add("default", () => <CreatePoint />);

storiesOf("Point List App/Point List", module).add("default", () => {
    const samples = [sample, sample, sample, sample, sample]
    return <PointList points={samples}/>
});
<<<<<<< HEAD

storiesOf("Point List App/Point", module).add("default", () => (
    <Point point={sample} deleteHandler={action('Delete confirmed') }/>
));
=======
>>>>>>> 7fb5a2ec1940880aa6bb7456b817840499efe373
