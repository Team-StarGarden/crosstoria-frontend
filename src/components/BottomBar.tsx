/** @jsx jsx */

import React from 'react';
import { jsx, css } from '@emotion/core';
import { Button } from '../components/Button';

import * as icons from '../assets/Icons';
import * as styles from '../constants';

export const BottomButton: React.FC = ({ children }) => {
  return (
    <Button
      size="regular"
      css={css`
        margin-right: ${styles.SPACE_L};
        height: 80px;
      `}
    >
      {children}
    </Button>
  );
};

export const BottomBar: React.FC = () => {
  return (
    <div
      css={css`
        background: ${styles.BROWN_100};
        position: fixed;
        bottom: 0px;
        right: 0px;
        height: 80px;
        left: 256px;
      `}
    >
      <div
        css={css`
          padding-left: ${styles.SPACE_L};
          position: absolute;
          left: 0;
        `}
      >
        <BottomButton>
          <icons.ArrowLeft />
        </BottomButton>
        <BottomButton>
          <icons.ArrowLeft />
        </BottomButton>
      </div>
      <div
        css={css`
          position: absolute;
          right: 0;
        `}
      >
        <BottomButton>
          <icons.ArrowLeft />
        </BottomButton>

        <BottomButton>
          <icons.ArrowLeft />
        </BottomButton>

        <BottomButton>
          <icons.ArrowLeft />
        </BottomButton>
      </div>
    </div>
  );
};
export default BottomBar;
