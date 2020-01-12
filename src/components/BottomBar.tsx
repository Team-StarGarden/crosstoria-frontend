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
        margin-right: ${styles.SPACE_XS};

        ${styles.MEDIAQUERY_OVER_R} {
          &:last-of-type {
            margin-right: ${styles.SPACE_S};
          }
        }

        ${styles.MEDIAQUERY_UNDER_R} {
          margin: 0 calc(10vw - 24px);
        }
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
        ${styles.TRANSITION_SLOW};
        transition-property: left, padding-left;

        position: fixed;
        left: 256px;
        right: 0px;
        bottom: 0px;

        padding: ${styles.SPACE_S} 0;

        height: 80px;

        background: ${styles.BROWN_100};

        ${styles.MEDIAQUERY_OVER_R} {
          padding-left: ${styles.SPACE_S};
        }

        ${styles.MEDIAQUERY_UNDER_R} {
          left: 0;
        }
      `}
    >
      <div
        css={css`
          position: absolute;
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
