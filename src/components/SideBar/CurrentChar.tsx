/** @jsx jsx */

import React from 'react';
import { jsx, css } from '@emotion/core';

import * as styles from '../../constants';
import * as icons from '../../assets/Icons';

import { Button } from '../Button';
import { CharacterProfile } from '../CharacterProfile';

/* TODO: 정보를 나타낼 캐릭터의 고유 번호를 설정하면 나머지 요소가 저절로 정해지도록 하여야 합니다. */

type CurrentCharProps = {
  /* 캐릭터의 이름을 설정합니다. */
  characterName: string;
  /* 캐릭터의 직업을 설정합니다. */
  characterJob: string;
};

/* 모바일일 경우, 펼쳐진 sidebar를 닫는 함수입니다. */

const sidebarCloseEvent = (): void => {
  document.body.classList.remove('sidebar-opened');
};

export const CurrentChar: React.FC<CurrentCharProps> = ({
  characterName,
  characterJob,
}) => {
  return (
    <React.Fragment>
      <div
        css={css`
          padding: ${styles.SPACE_L};
          background: ${styles.BROWN_100};
          text-align: center;
        `}
      >
        <div
          css={css`
            position: absolute;
            top: ${styles.SPACE_S};
            left: ${styles.SPACE_S};

            ${styles.MEDIAQUERY_OVER_R} {
              display: none;
            }
          `}
        >
          <Button size="regular" onClick={sidebarCloseEvent}>
            <icons.Close />
          </Button>
        </div>
        <div
          css={css`
            position: absolute;
            top: ${styles.SPACE_S};
            right: ${styles.SPACE_S};
          `}
        >
          <Button size="regular">
            <icons.ArrowDown />
          </Button>
        </div>
        <CharacterProfile
          href="https://www.naver.com"
          src="https://placehold.it/128x128"
          size="x-large"
        />
        <p
          css={css`
            ${styles.TEXT_L};
            margin: ${styles.SPACE_XS} 0 0;
          `}
        >
          {characterName}
        </p>
        <p
          css={css`
            ${styles.SUBTEXT_XS};
            margin: 2px 0 0;
          `}
        >
          {characterJob}
        </p>
      </div>
    </React.Fragment>
  );
};

export default CurrentChar;
