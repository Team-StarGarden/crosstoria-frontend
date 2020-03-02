/** @jsx jsx */

import React from 'react';
import { jsx, css } from '@emotion/core';

import * as styles from '../../constants';

import MainThread from './MainThread';
import EndThread from './EndThread';
import { Character } from '../../utils/Character';
import SubThread from './SubThread';

interface ThreadInfo {
  id: number;
  character: Character;
  place: string;
  time: string;
  contents: string;
  likeCount: number;
  subThreads: ThreadInfo[];
}

export const Thread: React.FC<{ [threadInfo: string]: ThreadInfo }> = ({
  threadInfo: { character, place, time, contents, likeCount, subThreads },
}) => {
  return (
    <div
      css={css`
        margin-top: ${styles.SPACE_R};
        background: black;
      `}
    >
      <MainThread
        profilePath={character.profileIMG}
        displayName={character.displayName}
        time={time}
        place={place}
      >
        {contents}
      </MainThread>
      {subThreads.map(subThread => {
        return (
          <SubThread
            key={subThread.id}
            {...subThread}
            childThreadCount={subThread.subThreads.length}
          >
            {subThread.contents}
          </SubThread>
        );
      })}
      <EndThread likeCount={likeCount} subThreadCount={subThreads.length} />
    </div>
  );
};
export default Thread;
