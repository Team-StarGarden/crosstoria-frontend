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
        background: black;
      `}
    >
      <Button size="small">
        <icons.Add />
        <span> 역할극 잇기</span>
      </Button>
      <Button size="small">
        <icons.Message />
        {subThreadCount}
      </Button>
      <Button size="small">
        <icons.Heart />
        {goodCount}
      </Button>
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
}) => {
  return (
    <div>
      <MainThread username={username} time={time} place={place}>
        {contents}
      </MainThread>
      {/* TODO: input subThreadList */}
      <EndThead goodCount={goodCount} subThreadCount={subThreadCount} />
    </div>
  );
};

export default Thread;
