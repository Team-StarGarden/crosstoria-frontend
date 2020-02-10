/** @jsx jsx */

import React from 'react';
import { jsx, css } from '@emotion/core';

import * as styles from '../../constants';

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

export default NewThreads;
