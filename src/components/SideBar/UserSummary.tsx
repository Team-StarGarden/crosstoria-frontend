/** @jsx jsx */

import React from 'react';
import { jsx, css } from '@emotion/core';

import * as styles from '../../constants';
import * as icons from '../../assets/Icons';

export const UserSummary: React.FC = () => {
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

export default UserSummary;
