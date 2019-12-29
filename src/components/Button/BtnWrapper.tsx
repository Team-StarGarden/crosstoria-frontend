/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import * as styles from '../../constants';

type BtnWrapperProps = {
  /* 위치를 결정합니다. */
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' ;
  /* 안쪽 여백을 결정합니다. */
  padding?: 'regular' | 'small' | 'x-small'; 
};

const BtnWrapperStyle = css`
  background: ${styles.BROWN_100};

  &.top-left {
    position: absolute;
    top: 0;
    left: 0;
  }

  &.top-right {
    position: absolute;
    top: 0;
    right: 0;
  }

  &.bottom-left {
    position: absolute;
    bottom: 0;
    left: 0;
  }

  &.bottom-right {
    position: absolute;
    bottom: 0;
    right: 0;
  }
`;

const BtnWrapperPadding = (PaddingSize: 'regular' | 'small' | 'x-small'): string => {
  switch(PaddingSize) {
  case 'regular':
    return `padding: ${styles.SPACE_R}`;
  case 'small':
    return `padding: ${styles.SPACE_S}`;
  case 'x-small':
    return `padding: ${styles.SPACE_XS}`;
  }
};

export const BtnWrapper: React.FC<BtnWrapperProps> = ({ position, padding, ...props }) => {
  const cssSet = [
    BtnWrapperStyle, 
    padding && BtnWrapperPadding(padding)
  ].filter(Boolean);
  return <div className={position && position} css={cssSet} {...props} />;
};