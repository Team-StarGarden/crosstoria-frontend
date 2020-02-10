/** @jsx jsx */

import React from 'react';
import { jsx, css } from '@emotion/core';

import * as styles from '../../constants';
import * as icons from '../../assets/Icons';
import { ThreadHeader } from './ThreadHeader';
import { Button } from '../Button';

type ThreadInfoProps = {
  username: string;
  place: string;
  time: string;
  profilePath: string;
};

export const MainThread: React.FC<ThreadInfoProps> = ({
  children,
  username,
  time,
  place,
  profilePath,
}) => {
  return (
    <div
      css={css`
        display: flex;
        ${styles.TEXT_R};
        color: ${styles.YELLOW_500};
        padding: 0 ${styles.SPACE_S} ${styles.SPACE_R} ${styles.SPACE_R};
      `}
    >
      <img
        src={profilePath}
        alt="profile IMG"
        css={css`
          margin-top: ${styles.SPACE_R};
          vertical-align: top;
          border-radius: 50%;
          height: 100px;
          width: 100px;
          margin-right: 30px;
        `}
      />
      <div
        css={css`
          margin-top: ${styles.SPACE_R};
        `}
      >
        <ThreadHeader username={username} place={place} time={time} />
        {/* Thrend Contents */}
        {children}
      </div>
      <Button
        size="regular"
        css={css`
          margin-left: auto;
        `}
      >
        <icons.ArrowDown />
      </Button>
    </div>
  );
};
export default MainThread;
