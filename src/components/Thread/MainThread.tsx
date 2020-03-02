/** @jsx jsx */

import React from 'react';
import { jsx, css } from '@emotion/core';

import * as styles from '../../constants';
import * as icons from '../../assets/Icons';
import { ThreadHeader } from './ThreadHeader';
import { Button } from '../Button';
import { CharacterProfile } from '../CharacterProfile';

type ThreadInfoProps = {
  displayName: string;
  place: string;
  time: string;
  profilePath: string;
};

export const MainThread: React.FC<ThreadInfoProps> = ({
  children,
  displayName,
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
      <div
        css={css`
          vertical-align: top;
          margin-right: 30px;
          margin-top: ${styles.SPACE_R};
        `}
      >
        <CharacterProfile size="large" href="" src={profilePath} />
      </div>
      <div
        css={css`
          margin-top: ${styles.SPACE_R};
        `}
      >
        <ThreadHeader displayName={displayName} place={place} time={time} />
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
