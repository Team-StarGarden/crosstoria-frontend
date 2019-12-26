/** @jsx jsx */

import { jsx, css } from '@emotion/core';

import logo from '../assets/logo.png';
import logoWithTypo from '../assets/logo_withtypo.png';

const ResponsiveLogo: React.FC = () => (
  <img src={logoWithTypo} css={{width: '100%'}} alt="Logo" srcSet={`${logo} 617w, ${logoWithTypo} 617w`} sizes="(max-width: 480px) 308px, 617px" />
);

export default ResponsiveLogo;
