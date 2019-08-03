import React from 'react';
import { storiesOf } from '@storybook/react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Header from '../src/components/header/';
import FilterControls from '../src/components/filterControls/';
import Contact from '../src/components/contact/';
import ContactList from '../src/components/contactList/';
import { action } from '@storybook/addon-actions';
import { MemoryRouter, Route } from "react-router";