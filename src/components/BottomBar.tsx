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
        margin-right: ${styles.SPACE_R};
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
        position: fixed;
        left: 256px;
        right: 0px;
        bottom: 0px;
        height: 80px;
        background: ${styles.BROWN_100};
      `}
    >
      <div
        css={css`
          padding-left: ${styles.SPACE_R};
          position: absolute;
          left: 0;
        `}
      >
        <BottomButton>
          <icons.Talk />
        </BottomButton>

        <BottomButton>
          <icons.Log />
        </BottomButton>
      </div>
      <div
        css={css`
          position: absolute;
          right: 0;
        `}
      >
        <BottomButton>
          <icons.Flag />
        </BottomButton>

        <BottomButton>
          <icons.Alarm />
        </BottomButton>

        <BottomButton>
          <icons.Message />
        </BottomButton>
      </div>
    </div>
  );
};
export default BottomBar;
