/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';

import * as styles from '../../constants';
import { ThreadHeader } from './ThreadHeader';

type ThreadInfoProps = {
  username: string;
  place: string | null;
  time: string;
  profileIMG: string;
  contents: string;
};

export const SubThread: React.FC<ThreadInfoProps> = ({
  children,
  username,
  time,
  contents,
  place,
  profileIMG,
}) => {
  return (
    <div
      css={css`
        ${styles.TEXT_R};
        display: flex;
        background: ${styles.BROWN_100};
        color: ${styles.YELLOW_500};
      `}
    >
      <div
        css={css`
          padding: ${styles.SPACE_R} 0 ${styles.SPACE_R} ${styles.SPACE_XL};
        `}
      >
        <img
          src={profileIMG}
          alt="profile IMG"
          css={css`
            vertical-align: top;
            display: inline-block;
            border-radius: 50%;
            height: 80px;
            width: 80px;
            margin-right: 30px;
          `}
        />
        <div
          css={css`
            display: inline-block;
          `}
        >
          <ThreadHeader username={username} place={null} time={time} />
          <div>{contents}</div>
        </div>
      </div>
      <div
        css={css`
          background: black;
          vertical-align: middle;
          display: flex;
          margin-left: auto;
          padding: ${styles.SPACE_S};
        `}
      >
        <p
          css={css`
            margin-top: auto;
            margin-bottom: auto;
          `}
        >
          +3
        </p>
      </div>
    </div>
  );
};
export default SubThread;
