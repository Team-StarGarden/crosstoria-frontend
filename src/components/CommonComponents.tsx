/** @jsx jsx */

import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import * as styles from '../constants';


/* Button: Icon and Text without Border */
export const BtnIconWithBorder = css`
    ${styles.TRANSITION_FAST};
    
    width: 80px;
    height: 80px;

    border: 1px solid ${styles.YELLOW_100};
    background: none;

    transition-property: color, background;

    :hover {
        
        background: ${styles.YELLOW_100};
    }

    :active {

        background: ${styles.YELLOW_500};
    }
    
    :disabled {

        border: 1px solid ${styles.YELLOW_900};
    }
`;


/* Button: Icon and Text with Border */

export const BtnIconAndTextWithBorder = css`
    ${styles.TRANSITION_FAST};

    color: ${styles.YELLOW_100};
    border: 1px solid ${styles.YELLOW_100};
    background: none;

    transition-property: color, background;
    
    :hover {
        color: ${styles.BROWN_500};
        background: ${styles.YELLOW_100};
    }

    :active {
        color: ${styles.BROWN_500};
        background: ${styles.YELLOW_500};
    }
    
    :disabled {
        color: ${styles.YELLOW_900};
        border: 1px solid ${styles.YELLOW_900};
    }
`;

export const BtnIconAndTextWithBorderL = styled.button`
    ${BtnIconAndTextWithBorder};
    
    padding: 0 24px;
    height: 80px;

    line-height: 78px;
`;

export const BtnIconAndTextWithBorderS = styled.button`
    ${BtnIconAndTextWithBorder};

    padding: 0 16px;
    height: 48px;

    line-height: 46px;
`;


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

    :focus, :hover {
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

