/** @jsx jsx */

import React from 'react';
import { jsx, css } from '@emotion/core';

import * as styles from '../../constants';

type ThreadHeaderProps = {
  displayName: string;
  place: string | null;
  time: string;
};
export const ThreadHeader: React.FC<ThreadHeaderProps> = ({
  displayName,
  place,
  time,
  ...props
}) => {
  return (
    <div {...props}>
      <span
        css={css`
          ${styles.TEXT_L};
          margin-right: ${styles.SPACE_R};
        `}
      >
        {displayName}
      </span>
      <span
        css={css`
          ${styles.SUBTEXT_XS};
          margin-right: ${styles.SPACE_XS};
        `}
      >
        {place}
      </span>
      <span
        css={css`
          ${styles.SUBTEXT_XS};
        `}
      >
        {time}
      </span>
    </div>
  );
};
export default ThreadHeader;
