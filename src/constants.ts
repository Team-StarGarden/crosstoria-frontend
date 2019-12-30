import { css } from '@emotion/core';

/* eslint-disable @typescript-eslint/camelcase */
import bg_worldmap from './assets/bg_worldmap.jpg';

import logo from './assets/logo.png';
import logo_withtypo from './assets/logo_withtypo.png';
/* eslint-enable @typescript-eslint/camelcase */

/* Colors */

export const YELLOW_100 = 'rgb(255, 240, 150)';
export const YELLOW_500 = 'rgb(170, 160, 100)';
export const YELLOW_900 = 'rgb(90, 80, 50)';

export const BROWN_500 = 'rgb(40, 35, 35)';
export const BROWN_300 = 'rgb(32, 28, 28)';
export const BROWN_100 = 'rgb(23, 20, 20)';

export const BROWN_100_A70 = 'rgba(23, 20, 20, 0.7)';

export const RED_500 = 'rgb(255, 90, 90)';
export const TURQUOISE_500 = 'rgb(60, 200, 170)';
export const WHITE_100 = 'rgb(250, 250, 250)';
export const BLUE_700 = 'rgb(70, 70, 170)';

/* Fonts */

export const TEXT_XL = css`
  color: ${YELLOW_100};
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1.5;
`;
export const TEXT_L = css`
  color: ${YELLOW_100};
  font-size: 1.125rem;
  font-weight: bold;
  line-height: 1.5;
`;
export const TEXT_R = css`
  color: ${YELLOW_100};
  font-size: 1rem;
  line-height: 1.5;
`;
export const TEXT_S = css`
  color: ${YELLOW_100};
  font-size: 0.875rem;
  line-height: 1.5;
`;
export const SUBTEXT_R = css`
  color: ${YELLOW_500};
  font-size: 1rem;
  line-height: 1.5;
`;
export const SUBTEXT_S = css`
  color: ${YELLOW_500};
  font-size: 0.875rem;
  line-height: 1.5;
`;
export const SUBTEXT_XS = css`
  color: ${YELLOW_500};
  font-size: 0.75rem;
  line-height: 1.5;
`;

/* CSS Transition */

export const TRANSITION_FAST = css`
  transition-duration: 0.2s;
`;
export const TRANSITION_SLOW = css`
  transition-duration: 0.1s;
`;

/* BreakPoints */

export const BREAKPOINT_XL = 1200;
export const BREAKPOINT_L = 960;
export const BREAKPOINT_R = 768;
export const BREAKPOINT_S = 480;

export const MEDIAQUERY_OVER_XL = `@media (min-width: ${BREAKPOINT_XL + 1}px)`;
export const MEDIAQUERY_UNDER_XL = `@media (max-width: ${BREAKPOINT_XL}px)`;

export const MEDIAQUERY_OVER_L = `@media (min-width: ${BREAKPOINT_L + 1}px)`;
export const MEDIAQUERY_UNDER_L = `@media (max-width: ${BREAKPOINT_L}px)`;

export const MEDIAQUERY_OVER_R = `@media (min-width: ${BREAKPOINT_R + 1}px)`;
export const MEDIAQUERY_UNDER_R = `@media (max-width: ${BREAKPOINT_R}px)`;

export const MEDIAQUERY_OVER_S = `@media (min-width: ${BREAKPOINT_S + 1}px)`;
export const MEDIAQUERY_UNDER_S = `@media (max-width: ${BREAKPOINT_S}px)`;

/* Space */

export const SPACE_XXL = '4rem'; // 64px
export const SPACE_XL = '3rem'; // 48px
export const SPACE_L = '2rem'; // 32px
export const SPACE_R = '1.5rem'; // 24px
export const SPACE_S = '1rem'; // 16px
export const SPACE_XS = '.5rem'; // 8px

export const PADDING_L_RESPONSIVE = css`
  ${MEDIAQUERY_OVER_R} {
    padding: ${SPACE_L};
  }
  ${MEDIAQUERY_UNDER_R} {
    padding: ${SPACE_R};
  }
`;

export const PADDING_R_RESPONSIVE = css`
  ${MEDIAQUERY_OVER_R} {
    padding: ${SPACE_R};
  }
  ${MEDIAQUERY_UNDER_R} {
    padding: ${SPACE_S};
  }
`;

export const MARGIN_L_RESPONSIVE = css`
  ${MEDIAQUERY_OVER_R} {
    margin: ${SPACE_L};
  }
  ${MEDIAQUERY_UNDER_R} {
    margin: ${SPACE_R} 0;
  }
`;

export const MARGIN_R_RESPONSIVE = css`
  ${MEDIAQUERY_OVER_R} {
    margin: ${SPACE_R};
  }
  ${MEDIAQUERY_UNDER_R} {
    margin: ${SPACE_S} 0;
  }
`;

/* Image URL */

/* eslint-disable @typescript-eslint/camelcase */
export const IMG_BG_WORLDMAP = `url("${bg_worldmap}")`;

export const IMG_LOGO = `url(${logo})`;
export const IMG_LOGO_WITHTYPO = `url(${logo_withtypo})`;
/* eslint-enable @typescript-eslint/camelcase */

/* Image Background */

export const BG_WORLDMAP = css`
  background-image: ${IMG_BG_WORLDMAP};
  background-size: cover;
  background-position: center;
`;
