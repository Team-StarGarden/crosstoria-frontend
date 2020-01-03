import styled from '@emotion/styled';
import * as styles from '../../constants';

export const FAV = styled.button`
  ${styles.TRANSITION_SLOW};

  position: absolute;
  bottom: 116px;
  right: 32px;

  width: 80px;
  height: 80px;

  border: 0;
  background: ${styles.YELLOW_100};
  border-radius: 100%;

  transition-property: background-color, bottom, right;

  cursor: pointer;

  ${styles.MEDIAQUERY_UNDER_R} {
    bottom: 104px;
    right: 24px;
  }

  svg {
    ${styles.TRANSITION_SLOW};

    position: relative;
    top: 2px;

    width: 32px;
    fill: ${styles.BROWN_500};

    transition-property: fill;
  }

  :focus,
  :hover {
    svg {
      fill: ${styles.YELLOW_500};
    }
  }

  :active {
    background: ${styles.YELLOW_500};

    svg {
      fill: ${styles.YELLOW_900};
    }
  }

  :disabled {
    background: ${styles.YELLOW_900};

    cursor: none;

    svg {
      fill: ${styles.BROWN_500};
    }
  }
`;
