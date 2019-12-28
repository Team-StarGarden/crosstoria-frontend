import { css } from '@emotion/core';
import * as styles from '../../constants';

const RegularButton = css`
  ${styles.TEXT_R};
  color: ${styles.YELLOW_500};

  padding: 0 12px;
  height: 48px;
  line-height: 46px;

  svg {
    position: relative;
    top: 6px;
    width: 24px;
  }

  &.hasBorder {
    color: ${styles.YELLOW_100};

    padding: 0 19px;
    height: 64px;
    line-height: 64px;

    svg {
      top: 6px;
    }

    :focus, :hover, :active {
      color: ${styles.BROWN_500};
    }

    :disabled {
      background: none;
      
      color: ${styles.YELLOW_500}; 

      path {
        fill: ${styles.YELLOW_500};
      }
    }
  }
`;

export default RegularButton;
