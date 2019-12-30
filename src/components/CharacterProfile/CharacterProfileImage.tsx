/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import React from 'react';
import * as styles from '../../constants';

/* TODO: 이미지의 전체 URL이 아니라, CDN에 위치한 프로필 이미지의 이름만 받도록 하여아 합니다. */

type CharacterProfileImageProps = {
  /* 프로필의 이미지 주소를 설정합니다. */
  src: string;
  /* 프로필의 크기를 설정합니다. */
  size: 'x-large' | 'large' | 'regular' | 'small' | 'x-small';
}

const CharacterProfileImageStyle = css`
  ${styles.TRANSITION_SLOW}
  transition-property: border, filter;

  z-index: -1;
  
  border-radius: 100%;

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

  a:focus > &, a:hover > & {
    filter: brightness(.5);

    &.x-large {
      filter: none;
    }
  }
`;

export const CharacterProfileImage: React.FC<CharacterProfileImageProps> = ({src, size}: CharacterProfileImageProps) => {
  return (
    <img 
      src={src}
      css={CharacterProfileImageStyle}
      className={size}
    />
  );
};
