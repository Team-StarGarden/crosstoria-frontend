import styled from '@emotion/styled';
import * as styles from '../constants';

/* Input: type text */

export const TextInput = styled.input`
  ${styles.TEXT_R};
  ${styles.TRANSITION_FAST};

  width: 100%;
  height: 40px;
  margin-top: 16px;

  color: ${styles.YELLOW_500};
  text-align: center;
  line-height: 40px;

  border: 0;
  border-bottom: 1px solid ${styles.YELLOW_500};
  background: none;

  transition-property: color, border-bottom;

  :focus,
  :hover {
    color: ${styles.YELLOW_100};
    border-bottom: 1px solid ${styles.YELLOW_100};
  }

  :first-child {
    margin-top: 0;
  }

  ::placeholder {
    color: ${styles.YELLOW_500};
  }
`;

/* FAV */

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

  transition-property: background;

  cursor: pointer;

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

    svg {
      fill: ${styles.BROWN_500};
    }
  }
`;
