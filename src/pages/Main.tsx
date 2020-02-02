/** @jsx jsx */

import React from 'react';
import { jsx, css } from '@emotion/core';

import * as icons from '../assets/Icons';

import * as styles from '../constants';
import { FAV } from '../components/Fav';
import { SideBar } from '../components/SideBar';
import { SideBarOnButton } from '../components/SideBar/SideBarOnButton';
import BottomBar from '../components/BottomBar';
import ResponsiveLogo from '../components/ResponsiveLogo';
import { Thread } from '../components/Thread';
import { SubThread } from '../components/Thread/SubThread';
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

export const NewThreads: React.FC = ({ children }) => {
  return (
    <div
      css={css`
        ${styles.SUBTEXT_S}
        padding: ${styles.SPACE_R};
        
        margin-top: ${styles.SPACE_XL};
        background-color: black;
        text-align: center;

        /* color: ${styles.YELLOW_900}; */
      `}
    >
      <span>새로운 역극이 {children}개 올라왔어요</span>
    </div>
  );
};

export const Contents: React.FC = () => {
  return (
    <div>
      <NewThreads>3</NewThreads>
      <Thread
        username="마타리"
        place="바다"
        time="16분전"
        contents="결혼식 이야기"
        goodCount={0}
        profileIMG="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEX///+nxBvIAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC"
        subThreadCount={2}
      >
        <SubThread
          username="쿠르"
          place="바다"
          time="14분전"
          profileIMG="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEX///+nxBvIAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC"
          contents="..... 결혼식?"
        ></SubThread>
      </Thread>
    </div>
  );
};

export const Main: React.FC = () => {
  return (
    <React.Fragment>
      <SideBar />
      <SideBarOnButton />
      <BottomBar />
      <FAV>
        <icons.Write />
      </FAV>
      <div
        css={css`
          position: relative;
          ${styles.TRANSITION_SLOW}
          transition-property: margin-left;
          margin-left: 256px;
          background-color: ${styles.BROWN_300};
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
