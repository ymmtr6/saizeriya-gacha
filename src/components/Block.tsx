import React from 'react';
import { Navigator } from 'react-onsenui';
import { useState } from 'react';
import ons from 'onsenui';
import MainPage from './MainPage';
import { NavigatorInfo } from '../utils/NavigatorInfo';

export interface NavigatorProps {
  navigator?: any;
  [prop: string]: any;
}

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
        title: 'MainPage',
        props: { ...props }
      } as NavigatorInfo
    }
    onPostPop={
      (customEvent: any) => {
        if (customEvent.routes.routes.length == 1) {
          const url = document.location.href.split('?')[0];
          history.replaceState('', document.title, url);
        }
      }
    }
    animationOptions={{
      delay: 0.1,
      duration: 0.4
    }}
  />)
}

export default Block;
