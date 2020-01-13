/** @jsx jsx */

import React from 'react';
import { jsx, css } from '@emotion/core';

import * as styles from '../../constants';
import * as icons from '../../assets/Icons';
import { Button } from '../../components/Button';

import MainThread from './MainThread';

type ThreadInfoProps = {
  username: string;
  place: string;
  time: string;
  contents: string;
  goodCount: number;
  subThreadCount: number;
  profileIMG:string;
};
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
        padding-top: ${styles.SPACE_L};
        background: black;
        position: absolute;
        left: 0px;
        right: 0px;
        height: 30px;
      `}
    >
      <Button
        size="small"
        css={css`
          position: absolute;
          bottom: 0;
          left: 0;
        `}
      >
        <icons.Add />
        <span> 역할극 잇기</span>
      </Button>
      <div
        css={css`
          position: absolute;
          bottom: 0;
          right: 0;
        `}
      >
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
export const Thread: React.FC<ThreadInfoProps> = ({
  children,
  username,
  time,
  place,
  contents,
  goodCount,
  subThreadCount,
  profileIMG
}) => {
  return (
    <div >
      <MainThread
        profilePath={profileIMG}
        username={username}
        time={time}
        place={place}
      >
        {contents}
      </MainThread>
      {children}
      <EndThead goodCount={goodCount} subThreadCount={subThreadCount} />
    </div>
  );
};
export default Thread;
