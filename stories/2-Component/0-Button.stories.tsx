/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '../../src/components/Button';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import * as style from '../../src/constants';

export default {
  title: 'Crosstoria/Component/Button',
  component: Button,
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
  const innerText = text('inner text', 'Button');
  /* 버튼의 테두리의 여부를 설정합니다. */
  const hasBorder = boolean('hasBorder', true);
  /* 버튼의 크기를 설정합니다. */
  const size = select(
    'size',
    {
      large: 'large',
      regular: 'regular',
      small: 'small',
    },
    'regular'
  );
  /* 버튼의 너비를 임의로 설정합니다. */
  const width = text('width', '');
  return (
    <div css={Background}>
      <Button
        onClick={action('clicked')}
        {...{
          hasBorder,
          size,
          width: width ? width : undefined,
        }}
      >
        {innerText}
      </Button>
    </div>
  );
};

export const Bordered = (): React.ReactNode => (
  <div css={Background}>
    <p>Small</p>
    <Button size="small" hasBorder>
      BUTTON
    </Button>
    <p>Regular</p>
    <Button size="regular" hasBorder>
      BUTTON
    </Button>
    <p>Large</p>
    <Button size="large" hasBorder>
      BUTTON
    </Button>
  </div>
);

export const NotBordered = (): React.ReactNode => (
  <div css={Background}>
    <p>Small</p>
    <Button size="small">BUTTON</Button>
    <p>Regular</p>
    <Button size="regular">BUTTON</Button>
    <p>Large</p>
    <Button size="large">BUTTON</Button>
  </div>
);

export const CustomWidth = (): React.ReactNode => (
  <div css={Background}>
    <p>
      <code>12em</code> Width
    </p>
    <Button hasBorder size="regular" width="12em">
      BUTTON
    </Button>
    <p>
      <code>100%</code> Width
    </p>
    <Button hasBorder size="regular" width="100%">
      BUTTON
    </Button>
  </div>
);

export const Disabled = (): React.ReactNode => (
  <div css={Background}>
    <p>Not Bordered</p>
    <Button disabled size="regular">
      BUTTON
    </Button>
    <p>Bordered</p>
    <Button disabled size="regular" hasBorder>
      BUTTON
    </Button>
  </div>
);
