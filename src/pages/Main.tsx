/** @jsx jsx */

import React from 'react';
import { jsx, css } from '@emotion/core';
import { SideBar } from '../components/SideBar';

export const Banner: React.FC = () => {
  return <React.Fragment>banner</React.Fragment>;
};

export const Main: React.FC = () => {
  return <SideBar />;
};

export default Main;
