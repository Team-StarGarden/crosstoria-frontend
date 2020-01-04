/** @jsx jsx */

import React from 'react';
import { jsx, css } from '@emotion/core';

import * as styles from '../../constants';

type ThreadInfoProps = {
  username: string;
  place: string;
  time: string;
};
export const ThreadHeader: React.FC<ThreadInfoProps> = ({
  username,
  place,
  time,
}) => {
  return (
    <div>
      <span
        css={css`
          ${styles.TEXT_L};
          margin-right: ${styles.SPACE_R};
        `}
      >
        {username}
      </span>
      <span
        css={css`
          ${styles.SUBTEXT_XS};
          margin-right: ${styles.SPACE_XS};
        `}
      >
        {place}
      </span>
      <span
        css={css`
          ${styles.SUBTEXT_XS};
        `}
      >
        {time}
      </span>
    </div>
  );
};

export const MainThread: React.FC<ThreadInfoProps> = ({
  children,
  username,
  time,
  place,
}) => {
  return (
    <div
      css={css`
        margin-top: ${styles.SPACE_R};
        padding: ${styles.SPACE_R} ${styles.SPACE_R} 0 ${styles.SPACE_R};
        background-color: black;
      `}
    >
      <img
        src=""
        alt="profile IMG"
        css={css`
          display: inline-block;
          border-radius: 50%;
          padding: 5%;
          height: 100px;
          width: 100px;
        `}
      />
      <div
        css={css`
          display: inline-block;
        `}
      >
        <ThreadHeader username={username} place={place} time={time} />
        {/* Thrend Contents */}
        <div
          css={css`
            ${styles.TEXT_R};
            color: ${styles.YELLOW_500};
          `}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
export default MainThread;
