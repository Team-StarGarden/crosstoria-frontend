import { css } from '@emotion/core';
import * as styles from '../../constants';

const SmallButton = css`
  padding: 0 8px;
  height: 32px;
  line-height: 30px;

  svg {
    position: relative;
    top: 4px;
    width: 16px;
  }

  &.hasBorder {
    padding: 0 8px;
    height: 32px;
    line-height: 32px;

    svg {
      top: 3px;
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

export default SmallButton;
