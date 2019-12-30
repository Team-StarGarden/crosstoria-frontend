/** @jsx jsx */

import React from 'react';
import { jsx, css } from '@emotion/core';

import UserSummary from './UserSummary';
import HashTagList from './HashTagList';
import MenuBar from './MenuBar';

export const SideBar: React.FC = () => {
  return (
    <div
      css={css`
        position: fixed;
        width: 15rem;
      `}
    >
      <UserSummary />
      <HashTagList />
      <MenuBar />
    </div>
  );
};

export default SideBar;
