/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';
import { action } from '@storybook/addon-actions';
import { Thread } from '../../src/components/Thread';
import { MainThread } from '../../src/components/Thread/MainThread';
import { NewThreads } from '../../src/components/Thread/NewThread';
import { SubThread } from '../../src/components/Thread/SubThread';
import { EndThread } from '../../src/components/Thread/EndThread';
import {
  withKnobs,
  text,
  boolean,
  select,
  number,
} from '@storybook/addon-knobs';
import * as style from '../../src/constants';

export default {
  title: 'Crosstoria/Component/Thread',
  component: [NewThreads, Thread, MainThread],
  decorators: [withKnobs],
};

const Background = css`
  background-color: ${style.BROWN_100};
  color: ${style.WHITE_100};
  padding: 2rem;

  & > * {
    margin-right: 1rem;

    &:last-child {
      margin-right: 0;
    }
  }
`;

const blankImg =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEX///+nxBvIAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC';

export const Default = (): React.ReactNode => {
  /* 쓰레드의 작성자를 정의합니다 */
  const username = text('username', '마타리');

  /* 쓰레드의 업로드시간을 정의합니다 */
  const time = text('time', '16분전');

  /* 쓰레드의 장소을 정의합니다 */
  const place = text('place', '바다');

  /* 쓰레드의 내용을 정의합니다 */
  const contents = text('contents', '결혼식 이야기');

  /* 쓰레드의 좋아요 개수를 정의합니다 */
  const goodCount = number('goodCount', 0);

  /* 쓰레드의 작성자의 프로필 사진을 정의합니다 */
  const profileIMG = text('profileIMG', blankImg);

  /* 쓰레드의 서브쓰레드 개수를 정의합니다 */
  const subThreadCount = number('subThreadCount', 0);

  /* 쓰레드의 작성자를 정의합니다 */
  const subThreadUsername = text('subThread_username', '쿠르');

  /* 쓰레드의 업로드시간을 정의합니다 */
  const subThreadTime = text('subThread_time', '14분전');

  /* 쓰레드의 장소을 정의합니다 */
  const subThreadPlace = text('subThread_place', '바다');

  /* 쓰레드의 작성자의 프로필 사진을 정의합니다 */
  const subThreadProfileIMG = text('subThread_profileIMG', blankImg);

  /* 쓰레드의 내용을 정의합니다 */
  const subThreadContents = text('subThread_contents', '결혼식 이야기');

  /* 쓰레드의 서브쓰레드의 갯수를 정의합니다*/
  const childThreadCount = number('subCount', 3);

  return (
    <div css={Background}>
      <Thread
        {...{
          username,
          time,
          place,
          contents,
          goodCount,
          subThreadCount,
          profileIMG,
        }}
      >
        <SubThread
          {...{
            username: subThreadUsername,
            time: subThreadTime,
            place: subThreadPlace,
            profileIMG: subThreadProfileIMG,
            contents: subThreadContents,
            childThreadCount: childThreadCount,
          }}
        ></SubThread>
      </Thread>
    </div>
  );
};

export const NewThreadDemo = (): React.ReactNode => {
  /* 새 쓰레드의 개수를 정의합니다 */
  const howMany = text('howMany', '3');

  return (
    <div css={Background}>
      <NewThreads>{howMany}</NewThreads>
    </div>
  );
};

export const MainThreadDemo = (): React.ReactNode => {
  /* 쓰레드의 작성자를 정의합니다 */
  const username = text('username', '마타리');

  /* 쓰레드의 업로드시간을 정의합니다 */
  const time = text('time', '16분전');

  /* 쓰레드의 장소을 정의합니다 */
  const place = text('place', '바다');

  /* 쓰레드의 작성자의 프로필 사진을 정의합니다 */
  const profilePath = text('profileIMG', blankImg);

  /* 쓰레드의 내용을 정의합니다 */
  const innerHTML = text('innerHTML', '결혼식 이야기');

  return (
    <div css={Background}>
      <MainThread
        {...{
          username,
          time,
          place,
          profilePath,
        }}
      >
        {innerHTML}
      </MainThread>
    </div>
  );
};

export const SubThreadDemo = (): React.ReactNode => {
  /* 쓰레드의 작성자를 정의합니다 */
  const username = text('username', '쿠르');

  /* 쓰레드의 업로드시간을 정의합니다 */
  const time = text('time', '14분전');

  /* 쓰레드의 장소을 정의합니다 */
  const place = text('place', '바다');

  /* 쓰레드의 작성자의 프로필 사진을 정의합니다 */
  const profileIMG = text('profileIMG', blankImg);

  /* 쓰레드의 내용을 정의합니다 */
  const contents = text('contents', '결혼식 이야기');

  /* 쓰레드의 서브쓰레드 갯수를 정의합니다*/
  const childThreadCount = number('subCount', 3);

  return (
    <div css={Background}>
      <SubThread
        {...{
          username,
          time,
          place,
          profileIMG,
          contents,
          childThreadCount,
        }}
      />
    </div>
  );
};

export const EndThreadDemo = (): React.ReactNode => {
  /* 쓰레드의 좋아요 개수를 정의합니다 */
  const goodCount = number('goodCount', 0);

  /* 쓰레드의 서브쓰레드 개수를 정의합니다 */
  const subThreadCount = number('subThreadCount', 0);

  return (
    <div css={Background}>
      <EndThread
        {...{
          goodCount,
          subThreadCount,
        }}
      />
    </div>
  );
};
