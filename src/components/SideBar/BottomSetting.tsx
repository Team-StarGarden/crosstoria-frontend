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
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 80px;

        padding: ${styles.SPACE_S};

        background: ${styles.BROWN_100};
      `}
    >
      <Button size="regular">
        <icons.Setting />
      </Button>
    </div>
  );
};

export default BottomSetting;
