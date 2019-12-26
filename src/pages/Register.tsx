/** @jsx jsx */

import React from 'react';
import { jsx, css } from '@emotion/core';
import { TextInput } from '../components/CommonComponents';
import { mapBackground, centerContent, withGlobalOptions } from '../components/GlobalStyles';
import ResponsiveLogo from '../components/ResponsiveLogo';
import { ForgotPasswordLink, LoginButton, SigninButton } from './Login';

export const Register: React.FC = () => {
  return (
    <form css={css`width: calc(100% - 128px); max-width: 272px;`}>

      <ResponsiveLogo />
      <TextInput placeholder="test1" />
      <TextInput placeholder="test2" />
      <TextInput placeholder="test3" />
      <TextInput placeholder="test4" />
    </form>
  );
};

export default withGlobalOptions(Register, mapBackground, centerContent);
