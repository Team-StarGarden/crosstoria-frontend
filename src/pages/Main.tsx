/** @jsx jsx */

import React from 'react';
import { jsx, css } from '@emotion/core';

import * as styles from '../constants';
import { SideBar } from '../components/SideBar';
import { SideBarOnButton } from '../components/SideBar/SideBarOnButton';

import ResponsiveLogo from '../components/ResponsiveLogo';

export const Banner: React.FC = () => {
  return (
    <div
      css={css`
        height: 250px;
        background-image: ${styles.IMG_BG_WORLDMAP};
        background-size: cover;
        background-position: center;
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      <ResponsiveLogo width="156px" />
    </div>
  );
};

export const Main: React.FC = () => {
  return (
    <React.Fragment>
      <SideBar />
      <div
        css={css`
          position: relative;
          ${styles.TRANSITION_SLOW}
          transition-property: margin-left;

          margin-left: 256px;

          ${styles.MEDIAQUERY_UNDER_R} {
            margin-left: 0;
          }
        `}
      >
        <SideBarOnButton />
        <Banner />
      </div>
    </React.Fragment>
  );
};

export default Main;
