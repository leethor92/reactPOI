import React from 'react';
import { storiesOf } from '@storybook/react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Header from '../src/components/header/'
import FilterControls from '../src/components/filterControls/';
import CreatePoint from '../src/components/createPoint/';


storiesOf("Point List App/Header", module).add("default", () => (
    <Header numPoints={10} />
));

storiesOf("Point List App/Filter Controls", module).add("default", () => (
    <FilterControls />
));

storiesOf("Point List App/Create Point", module).add("default", () => <CreatePoint />);