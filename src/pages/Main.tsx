/** @jsx jsx */

import React from 'react';
import { jsx, css } from '@emotion/core';

import * as icons from '../assets/Icons';

import * as styles from '../constants';
import { FAV } from '../components/FAV';
import { Button } from '../components/Button';
import { SideBar } from '../components/SideBar';
import { SideBarOnButton } from '../components/SideBar/SideBarOnButton';
import BottomBar from '../components/BottomBar';
import ResponsiveLogo from '../components/ResponsiveLogo';
import ButtonWrapper from '../components/Button/ButtonWrapper';

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

export const Contents: React.FC = () => {
  return <React.Fragment></React.Fragment>;
};

export const Main: React.FC = () => {
  return (
    <React.Fragment>
      <SideBar />
      <SideBarOnButton />
      <BottomBar />
      <FAV><icons.Write /></FAV>
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
        <Banner />
        <Contents />
      </div>
    </React.Fragment>
  );
};

export default Main;
