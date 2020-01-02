/** @jsx jsx */

import React from 'react';
import { jsx, css } from '@emotion/core';

import { Button } from '../components/Button';
import * as styles from '../constants';
import { SideBar } from '../components/SideBar';
import { SideBarOnButton } from '../components/SideBar/SideBarOnButton';
import BottomBar from '../components/BottomBar';
import ResponsiveLogo from '../components/ResponsiveLogo';
import ButtonWrapper from '../components/Button/ButtonWrapper';

import * as icons from '../assets/Icons';

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
export const WriteButton: React.FC = () => {
  return (
    <ButtonWrapper
      css={css`
        position: fixed;
        background-color: ${styles.YELLOW_100};
        right: 25px;
        bottom: 90px;
        height: max-content;
        width: max-content;
        border-radius: 50%;
        padding: 10px;
      `}
    >
      <Button size="large">
        <icons.Write />
      </Button>
    </ButtonWrapper>
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
      <WriteButton />
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
        <BottomBar />
      </div>
    </React.Fragment>
  );
};

export default Main;
