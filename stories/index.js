import React from 'react';
import { storiesOf } from '@storybook/react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Header from '../src/components/header/'
import FilterControls from '../src/components/filterControls/';
import CreatePoint from '../src/components/createPoint/';
import Point from '../src/components/point/'

const sample = {
    id: 1 ,
    name: 'Aran Island',
    details: 'The Aran Islands are 3 rocky isles guarding the mouth of Galway Bay, in western Ireland',
    location: 'West',
    longitude: '53.1289',
    latitude: '9.7197',
    upvotes: 10
}

storiesOf("Point List App/Point", module).add("default", () => (
    <Point point={sample}/>
));

storiesOf("Point List App/Header", module).add("default", () => (
    <Header numPoints={10} />
));

storiesOf("Point List App/Filter Controls", module).add("default", () => (
    <FilterControls />
));

storiesOf("Point List App/Create Point", module).add("default", () => <CreatePoint />);