/** @jsx jsx */

import React from 'react';
import { jsx, css } from '@emotion/core';

import * as styles from '../../constants';
import CurrentChar from './CurrentChar';
import HashTagList from './HashTagList';
import PlaceNav from './PlaceNav';
import BottomSetting from './BottomSetting';

const SideBarWrapperStyle = css`
  z-index: 20;

  ${styles.TRANSITION_SLOW}
  transition-property: left;

  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 256px;

  background: ${styles.BROWN_300};

  ${styles.MEDIAQUERY_UNDER_R} {
    left: -256px;

    body.sidebar-opened & {
      left: 0;
    }
  }
`;

const SideBarStyle = css`
  position: relative;
`;

const SideBarMenuWrapperStyle = css`
  ${styles.TRANSITION_SLOW}
  transition-property: left;

  position: fixed;
  top: 250px;
  left: 0;
  bottom: 80px;

  width: 256px;

  overflow-x: auto;

  ${styles.MEDIAQUERY_UNDER_R} {
    left: -256px;

    body.sidebar-opened & {
      left: 0;
    }
  }
`;

export const SideBar: React.FC = () => {
  return (
    <div css={SideBarWrapperStyle}>
      <div css={SideBarStyle}>
        <CurrentChar characterName="캐릭터의 이름" characterJob="캐릭터의 직업" />
          <div css={SideBarMenuWrapperStyle}>
            <HashTagList />
            <PlaceNav />
          </div>
        <BottomSetting />
      </div>
    </div>
  );
};

export default SideBar;
