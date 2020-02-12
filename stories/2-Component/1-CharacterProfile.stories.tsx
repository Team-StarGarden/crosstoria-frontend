/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';
import { action } from '@storybook/addon-actions';
import { CharacterProfile } from '../../src/components/CharacterProfile';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import * as style from '../../src/constants';

export default {
  title: 'Crosstoria/Component/CharacterProfile',
  component: CharacterProfile,
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

export const Default = (): React.ReactNode => {
  const href = text('href', '/user/test-0101');
  /* 프로필의 크기를 설정합니다. */
  const size = select(
    'size',
    {
      'x-large': 'x-large',
      large: 'large',
      regular: 'regular',
      small: 'small',
      'x-small': 'x-small',
    },
    'regular'
  );
  /* 프로필의 이미지를 설정합니다. */
  const src = text('src', 'https://cdn.crosstor.ia/user/profile/test-0101.png');
  return (
    <div css={Background}>
      <CharacterProfile
        {...{
          href,
          size,
          src,
        }}
      />
    </div>
  );
};
