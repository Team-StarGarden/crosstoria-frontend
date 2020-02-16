/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';

import * as styles from '../../constants';
import { ThreadHeader } from './ThreadHeader';
import { CharacterProfile } from '../CharacterProfile';

type ThreadInfoProps = {
  username: string;
  place: string | null;
  time: string;
  profileIMG: string;
  contents: string;
  childThreadCount: number;
};

export const SubThread: React.FC<ThreadInfoProps> = ({
  username,
  time,
  contents,
  place,
  profileIMG,
  childThreadCount,
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
        <div
          css={css`
            vertical-align: top;
            display: inline-block;
            margin-right: 30px;
          `}
        >
          <CharacterProfile size="regular" href="" src={profileIMG} />
        </div>
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
          {childThreadCount < 1 ? '' : '+' + childThreadCount}
        </p>
      </div>
    </div>
  );
};
export default SubThread;
