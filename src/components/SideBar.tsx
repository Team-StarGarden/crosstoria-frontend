/** @jsx jsx */

import React from 'react';
import { jsx, css } from '@emotion/core';

import * as styles from '../constants';
import * as icons from '../assets/Icons';

export const HashTagList: React.FC = () => {
  return (
    <React.Fragment>
      #마타리_결혼식
      <br />
      #스탤은_자유로운_몸이에요
      <br />
      #이벤트_참여
    </React.Fragment>
  );
};

export const MenuButton: React.FC<{ id: string }> = ({ children }) => {
  return <React.Fragment>{children}</React.Fragment>;
};

export const Menubar: React.FC = () => {
  return (
    <React.Fragment>
      <ul>
        <li>
          <MenuButton id="0">트윙클 타운 전체</MenuButton>
        </li>
        <li>
          <MenuButton id="1">호수 &lt;별의 눈 &gt;</MenuButton>
        </li>
        <li>
          <MenuButton id="2">바다 &lt;스타폴 해안 &gt;</MenuButton>
        </li>
      </ul>
    </React.Fragment>
  );
};

export const UserInfoDiv: React.FC = () => {
  return (
    <React.Fragment>
      <div
        css={css`
          background: black;
        `}
      >
        <icons.Heart
          css={css`
            width: 64px;
          `}
        />
        <div
          css={css`
            ${styles.TEXT_L};
            text-align: center;
          `}
        >
          위티
        </div>
        <div
          css={css`
            ${styles.TEXT_S};
            text-align: center;
          `}
        >
          상인
        </div>
      </div>
    </React.Fragment>
  );
};

export const SideBar: React.FC = () => {
  return (
    <React.Fragment>
      <UserInfoDiv />
      <HashTagList />
      <Menubar />
    </React.Fragment>
  );
};

export default SideBar;
