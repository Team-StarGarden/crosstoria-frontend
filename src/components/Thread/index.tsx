/** @jsx jsx */

import React from 'react';
import { jsx, css } from '@emotion/core';

import * as styles from '../../constants';

import MainThread from './MainThread';
import EndThread from './EndThread';

type ThreadInfoProps = {
  username: string;
  place: string;
  time: string;
  contents: string;
  goodCount: number;
  subThreadCount: number;
  profileIMG: string;
};

export const Thread: React.FC<ThreadInfoProps> = ({
  children,
  username,
  time,
  place,
  contents,
  goodCount,
  subThreadCount,
  profileIMG,
}) => {
  return (
    <div
      css={css`
        margin-top: ${styles.SPACE_R};
        background: black;
      `}
    >
      <MainThread
        profilePath={profileIMG}
        username={username}
        time={time}
        place={place}
      >
        {contents}
      </MainThread>
      {children}
      <EndThread goodCount={goodCount} subThreadCount={subThreadCount} />
    </div>
  );
};
export default Thread;
