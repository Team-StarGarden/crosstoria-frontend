/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';
import * as styles from '../../constants';
import LargeButton from './LargeButton';
import RegularButton from './RegularButton';
import SmallButton from './SmallButton';

type ButtonProps = {
  /* 버튼의 테두리의 여부를 설정합니다. */
  hasBorder?: boolean;
  /* 버튼의 크기를 설정합니다. */
  size: 'large' | 'regular' | 'small';
  /* 버튼의 너비를 임의로 설정합니다. */
  width?: string | number;
  /* 클릭해서 발생하는 이벤트가 있다면, 해당 props를 사용합니다. */
  onClick?: () => void;
};

const Common = css`
  ${styles.TRANSITION_FAST};
  cursor: pointer;
  user-select: none;

  :disabled {
    cursor: unset;
  }
`;

const BorderOn = css`
  ${styles.SUBTEXT_XS};
  border: 1px solid ${styles.YELLOW_100};
  background: none;

  color: ${styles.YELLOW_100};

  transition-property: color, border, background-color;

  cursor: pointer;

  path {
    ${styles.TRANSITION_FAST};

    transition-property: fill;
    fill: ${styles.YELLOW_100};
  }

  :focus,
  :hover {
    color: ${styles.BROWN_500};
    background: ${styles.YELLOW_100};

    path {
      fill: ${styles.BROWN_500};
    }
  }

  :active,
  :disabled {
    color: ${styles.BROWN_500};
    background: ${styles.YELLOW_500};
    border-color: ${styles.YELLOW_500};

    path {
      fill: ${styles.BROWN_500};
    }
  }
`;

const BorderOff = css`
  ${styles.SUBTEXT_XS};

  border: 0;
  background: none;

  color: ${styles.YELLOW_500};

  transition-property: color;

  path {
    ${styles.TRANSITION_FAST};
    transition-property: fill;

    fill: ${styles.YELLOW_500};
  }

  :focus,
  :hover {
    color: ${styles.YELLOW_100};

    path {
      fill: ${styles.YELLOW_100};
    }
  }

  :active,
  :disabled {
    color: ${styles.YELLOW_900};

    path {
      fill: ${styles.YELLOW_900};
    }
  }
`;

const Buttons = {
  large: LargeButton,
  regular: RegularButton,
  small: SmallButton,
} as const;

export const Button: React.FC<ButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  hasBorder,
  size,
  width,
  onClick,
  ...props
}) => {
  const cssSet = [
    Common,
    hasBorder ? BorderOn : BorderOff,
    Buttons[size],
  ].filter(Boolean);
  return (
    <button
      className={hasBorder ? 'hasBorder' : ''}
      style={{ width: width || 'fit-content' }}
      css={cssSet}
      onClick={onClick}
      {...props}
    />
  );
};
