import { css } from '@emotion/core';
import * as styles from '../../constants';

const RegularButton = css`
  ${styles.TEXT_R};
  color: ${styles.YELLOW_500};

  padding: 0 19px;
  height: 64px;
  line-height: 62px;

  svg {
    position: relative;
    top: 5px;
    width: 24px;
  }

  &.hasBorder {
    color: ${styles.YELLOW_100};

    padding: 0 16px;
    height: 48px;
    line-height: 48px;

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
