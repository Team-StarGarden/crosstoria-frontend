/** @jsx jsx */

import { jsx, css, SerializedStyles } from '@emotion/core';

import logo from '../assets/logo.png';
import logoWithTypo from '../assets/logo_withtypo.png';

interface ResponsiveLogoProps {
  width?: string | number;
  additionalCSS?: SerializedStyles;
}

const ResponsiveLogo: React.FC<ResponsiveLogoProps> = ({
  width,
  additionalCSS,
  ...props
}) => {
  return (
    <img
      src={logoWithTypo}
      css={css`
        width: ${width || '100%'};
        ${additionalCSS}
      `}
      alt="Logo"
      srcSet={`${logoWithTypo} 617w, ${logo} 617w`}
      sizes="(min-width: 480px) 617px, (max-width: 480px) 617px"
      {...props}
    />
  );
};

export default ResponsiveLogo;
