/** @jsx jsx */

import React from 'react';
import { jsx, css } from '@emotion/core';

import * as styles from '../../constants';
import { ThreadHeader } from './ThreadHeader';

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
        ${styles.TEXT_R};
        color: ${styles.YELLOW_500};
        padding: ${styles.SPACE_R};
      `}
    >
      <img
        src={profilePath}
        alt="profile IMG"
        css={css`
          vertical-align: top;
          display: inline-block;
          border-radius: 50%;
          height: 100px;
          width: 100px;
          margin-right: 30px;
        `}
      />
      <div
        css={css`
          display: inline-block;
        `}
      >
        <ThreadHeader username={username} place={place} time={time} />
        {/* Thrend Contents */}
        <div>{children}</div>
      </div>
    </div>
  );
};
export default MainThread;
