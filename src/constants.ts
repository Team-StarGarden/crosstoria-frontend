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

export const TEXT_L = css`color: ${YELLOW_100}; font-size: 1.125rem; font-weight: bold;`;
export const TEXT_R = css`color: ${YELLOW_100}; font-size: 1rem;`;
export const TEXT_S = css`color: ${YELLOW_100}; font-size: 0.875rem;`;
export const SUBTEXT_S = css`color: ${YELLOW_500}; font-size: 0.875rem;`;
export const SUBTEXT_XS = css`color: ${YELLOW_500}; font-size: 0.75rem;`;


/* CSS Transition */

export const TRANSITION_FAST = css`transition-duration: .2s;`;
export const TRANSITION_SLOW = css`transition-duration: .1s;`;


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