import { css } from '@emotion/core';
import * as styles from '../../constants';

const LargeButton = css`
  ${styles.TEXT_R};
  color: ${styles.YELLOW_500};

  padding: 0 2px;
  height: 80px;
  line-height: 78px;

  svg {
    position: relative;
    top: 9px;
    width: 32px;
  }

  &.hasBorder {
    color: ${styles.YELLOW_100};

    padding: 0 24px;
    height: 80px;
    line-height: 80px;

    svg {
      top: 8px;
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

export default LargeButton;
