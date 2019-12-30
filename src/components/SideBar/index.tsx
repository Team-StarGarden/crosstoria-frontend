/** @jsx jsx */

import React from 'react';
import { jsx, css } from '@emotion/core';

import * as styles from '../../constants';
import UserSummary from './UserSummary';
import HashTagList from './HashTagList';
import MenuBar from './MenuBar';

export const SideBar: React.FC = () => {
  return (
    <div
      css={css`
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        width: 256px;

        background: ${styles.BROWN_300};
      `}
    >
      <UserSummary characterName="캐릭터의 이름" characterJob="캐릭터의 직업" />
      <HashTagList />
      <MenuBar />
    </div>
  );
};

export default SideBar;
