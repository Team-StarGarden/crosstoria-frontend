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
        padding: ${styles.SPACE_L} ${styles.SPACE_L} 0 ${styles.SPACE_L};
      `}
    >
      <img
        src={profileIMG}
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
        <ThreadHeader username={username} place={null} time={time} />
        <div
          css={css`
            ${styles.TEXT_R};
            color: ${styles.YELLOW_500};
          `}
        >
          {contents}
        </div>
      </div>
    </div>
  );
};
export default SubThread;
