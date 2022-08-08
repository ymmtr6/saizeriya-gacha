import React from 'react';
import { Navigator } from 'react-onsenui';
import { useState } from 'react';
import ons from 'onsenui';
import MainPage from './MainPage';
import { NavigatorInfo } from '../utils/NavigatorInfo';

const renderPage = (route: any, navigator: any) => {
  const props = route.props || {};
  props.navigator = navigator;
  props.key = route.title;
  return React.createElement(route.component, props);
}

const Block: React.FC = (props) => {

  return (<Navigator
    renderPage={renderPage}
    initialRoute={
      {
        component: MainPage,
        title: 'MainPage'
      } as NavigatorInfo
    }
    swipeable
  />)
}

export default Block;
