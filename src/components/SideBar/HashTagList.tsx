/** @jsx jsx */

import React from 'react';
import { jsx, css } from '@emotion/core';
import * as styles from '../../constants';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

/* TODO: TagLink를 클릭할 시, 해당 태그에 관련된 글 리스트로 페이지가 이동되도록 하여야 합니다. */

export const TagLink: React.FC = props => {
  return (
    <span
      css={css`
        ${styles.TRANSITION_FAST}
        transition-property: color, border-color;

        ${styles.SUBTEXT_S}
        display: inline-block;
        text-align: center;
        border: 1px solid ${styles.YELLOW_500};
        margin-top: ${styles.SPACE_XS};

        cursor: pointer;

        &:first-of-type {
          margin-top: 0;
        }

        &:focus,
        &:hover {
          color: ${styles.YELLOW_100};
          border-color: ${styles.YELLOW_100};
        }

        &:active {
          color: ${styles.YELLOW_500};
          border-color: ${styles.YELLOW_500};
        }
      `}
    >
      {props.children}
    </span>
  );
};

export const HashTagList: React.FC = () => {
  return (
    <div
      css={css`
        padding: 32px 0;
        background: ${styles.BROWN_300};
        text-align: center;
      `}
    >
      <TagLink>#마타리_결혼식</TagLink>
      <TagLink>#스탤은_자유로운_몸이에요</TagLink>
      <TagLink>#이벤트_참여</TagLink>
    </div>
  );
};
export default HashTagList;
