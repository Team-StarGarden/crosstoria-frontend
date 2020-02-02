/** @jsx jsx */

import React from 'react';
import { jsx, css } from '@emotion/core';

import * as styles from '../../constants';
import * as icons from '../../assets/Icons';
import { Button } from '../../components/Button';

export const BottomSetting: React.FC = () => {
  return (
    <div
      css={css`
        ${styles.TRANSITION_SLOW}
        transition-property: left;

        position: fixed;
        left: 0;
        bottom: 0;
        width: 256px;
        height: 80px;

        padding: ${styles.SPACE_S};

        background: ${styles.BROWN_100};

        ${styles.MEDIAQUERY_UNDER_R} {
          left: -256px;

          body.sidebar-opened & {
            left: 0;
          }
        }
      `}
    >
      <Button size="regular">
        <icons.Setting />
      </Button>
    </div>
  );
};

export default BottomSetting;
