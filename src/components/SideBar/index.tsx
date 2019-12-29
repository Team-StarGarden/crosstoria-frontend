/** @jsx jsx */

import React from 'react';
import { jsx } from '@emotion/core';

import UserSummary from './UserSummary';
import HashTagList from './HashTagList';
import MenuBar from './MenuBar';

export const SideBar: React.FC = () => {
  return (
    <React.Fragment>
      <UserSummary />
      <HashTagList />
      <MenuBar />
    </React.Fragment>
  );
};

export default SideBar;
