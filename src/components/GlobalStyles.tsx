/** @jsx jsx */

import { jsx, css, Global, SerializedStyles } from '@emotion/core';
import React from 'react';
import * as styles from '../constants';

export const mapBackground = css`
body {
  background-image: ${styles.IMG_BG_WORLDMAP};
  background-size: cover;
  background-position: center;
}
`;

export const centerContent = css`
#root {
  display: flex;
  justify-content: center;
  align-items: center; 
}
`;

export function withGlobalOptions<P>(Component: React.ComponentType<P>, ...options: SerializedStyles[]): React.FC<P> {
  const WithGlobalOptions: React.FC<P> = (props) => (
    <React.Fragment>
      <Global styles={[...options]} />
      <Component {...props} />
    </React.Fragment>
  );
  return WithGlobalOptions;
}