import { css } from '@emotion/core';
import * as styles from '../../constants';

const LargeButton = css`
  ${styles.TEXT_R};
  color: ${styles.YELLOW_500};

  padding: 0 8px;
  height: 64px;
  line-height: 62px;

  svg {
    position: relative;
    top: 8px;
    width: 48px;
  }

  &.hasBorder {
    color: ${styles.YELLOW_100};

    padding: 0 23px;
    height: 96px;
    line-height: 94px;

    svg {
      top: 18px;
    }

    :focus,
    :hover,
    :active {
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
