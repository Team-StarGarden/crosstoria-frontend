import styled from '@emotion/styled';
import * as styles from '../../constants';

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
