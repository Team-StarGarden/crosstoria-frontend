/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';

import * as styles from '../../constants';
import * as icons from '../../assets/Icons';
import { Button } from '../../components/Button';

type EndTheadProps = {
  goodCount: number;
  subThreadCount: number;
};

export const EndThead: React.FC<EndTheadProps> = ({
  goodCount,
  subThreadCount,
}) => {
  return (
    <div
      css={css`
        padding: ${styles.SPACE_XS} ${styles.SPACE_L} ${styles.SPACE_XS}
          ${styles.SPACE_R};
        display: flex;
      `}
    >
      <Button
        size="small"
        css={css`
          margin-right: auto;
        `}
      >
        <icons.Add />
        <span> 역할극 잇기</span>
      </Button>
      <div>
        <Button size="small">
          <icons.Message />
          {subThreadCount}
        </Button>
        <Button size="small">
          <icons.Heart />
          {goodCount}
        </Button>
      </div>
    </div>
  );
};
export default EndThead;
