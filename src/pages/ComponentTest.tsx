/** @jsx jsx */

import React from 'react';
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import {
  mapBackground,
  centerContent,
  withGlobalOptions,
} from '../components/GlobalStyles';
import { Button } from '../components/Button';

import * as icons from '../assets/Icons';
import * as styles from '../constants';

export const ComponentTest: React.FC = () => {
  return (
    <React.Fragment>
      <div
        css={css`
          width: 100%;
          max-width: 960px;
          margin: 0 auto;
        `}
      >
        <div
          css={css`
            transition-property: padding, margin;
            background: ${styles.BROWN_100};
            ${styles.TRANSITION_FAST};
            ${styles.PADDING_R_RESPONSIVE};
            ${styles.MARGIN_R_RESPONSIVE};
          `}
        >
          <p
            css={css`
              ${styles.TEXT_R}
            `}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi
            architecto totam laudantium.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ComponentTest;
