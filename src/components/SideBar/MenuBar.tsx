/** @jsx jsx */

import React from 'react';
import { jsx, css } from '@emotion/core';

import * as styles from '../../constants';

/* TODO: 장소의 ID를 입력하면, ID에 따라 배경이 바뀌도록 하여야 합니다. */

export const MenuButton: React.FC<{ id: string }> = ({ children }) => {
  return (
    <li
      css={css`
        ${styles.TRANSITION_FAST}
        transition-property: color;

        position: relative;

        ${styles.SUBTEXT_R};
        height: 64px;
        line-height: 64px;
        text-align: right;

        &:hover {
          color: ${styles.YELLOW_100};
        }
      `}
    >
      <div
        css={css`
          z-index: -1;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;

          /* TODO: 배경 이미지를 받도록 하여야 함. */
        `}
      ></div>
      {children}
    </li>
  );
};

export const MenuBar: React.FC = () => {
  return (
    <React.Fragment>
      <ul
        css={css`
          margin: 0;
        `}
      >
        <MenuButton id="0">트윙클 타운 전체</MenuButton>
        <MenuButton id="1">호수 &lt;별의 눈 &gt;</MenuButton>
        <MenuButton id="2">바다 &lt;스타폴 해안 &gt;</MenuButton>
      </ul>
    </React.Fragment>
  );
};

export default MenuBar;
