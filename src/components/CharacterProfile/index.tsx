/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import React from 'react';
import * as styles from '../../constants';
import { CharacterProfileImage } from './CharacterProfileImage';

/* TODO: 이미지의 전체 URL이 아니라, CDN에 위치한 프로필 이미지의 이름만 받도록 하여아 합니다. */

type CharacterProfileProps = {
  /* 프로필의 이미지 주소를 설정합니다. */
  src: string;
  /* 프로필의 크기를 설정합니다. */
  size: 'x-large' | 'large' | 'regular' | 'small' | 'x-small';
  /* 프로필의 링크를 설정합니다. */
  href?: string;
}

const CharacterProfileStyle = css`
  ${styles.TRANSITION_SLOW}
  transition-property: filter;

  display: inline-block;
  position: relative;

  &:active.x-large {
    filter: brightness(.5);
  }

  &.x-large {
    width: 128px;
    height: 128px;
  }

  &.large {
    width: 64px;
    height: 64px;
  }

  &.regular {
    width: 48px;
    height: 48px;
  }

  &.small {
    width: 40px;
    height: 40px;
  }

  &.x-small {
    width: 32px;
    height: 32px;
  }
`;

const CharacterProfileHoverStyle = css`
  ${styles.TRANSITION_SLOW}
  transition-property: border;

  border: 0px solid ${styles.YELLOW_100};
  border-radius: 100%;

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  a:focus > &,
  a:hover > &,
  a:active > & {
    border: 8px solid ${styles.YELLOW_100};
  }
`;

export const CharacterProfile: React.FC<CharacterProfileProps> = ({src, size, href, ...props}) => {
  if(href) {
    return (
      <a href={href} css={CharacterProfileStyle} className={size} {...props}>
        <div css={CharacterProfileHoverStyle} />
        <CharacterProfileImage src={src} size={size} />
      </a>
    );
  } else {
    return <CharacterProfileImage src={src} size={size} />;
  }
};