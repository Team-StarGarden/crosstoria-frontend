/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';
import { action } from '@storybook/addon-actions';
import { TextInput } from '../../src/components/Input/TextInput';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import * as style from '../../src/constants';

export default {
  title: 'Crosstoria/Component/Input',
  component: TextInput,
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
  /* 입력창의 placeholder를 정의합니다 */
  const placeholder = text('placeholder', 'Placeholder');

  /* 입력창의 종류를 선택합니다 */
  const type = select(
    'size',
    {
      text: 'text',
      password: 'password',
      number: 'number',
    },
    'regular'
  );

  return (
    <div css={Background}>
      <TextInput {...{ placeholder, type }} />
    </div>
  );
};
