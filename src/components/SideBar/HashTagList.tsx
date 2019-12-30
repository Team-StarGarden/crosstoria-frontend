/** @jsx jsx */

import React from 'react';
import { jsx, css } from '@emotion/core';
import * as styles from '../../constants';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const TagLink: React.FC = props => {
  return (
    <span
      css={css`
        ${styles.SUBTEXT_S}
        border:3px;
        display: block;
        text-align: center;
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
        background: ${styles.BROWN_300};
        padding-top: 1.3rem;
        padding-bottom: 1.3rem;
      `}
    >
      <TagLink>#마타리_결혼식</TagLink>
      <TagLink>#스탤은_자유로운_몸이에요</TagLink>
      <TagLink>#이벤트_참여</TagLink>
    </div>
  );
};
export default HashTagList;
