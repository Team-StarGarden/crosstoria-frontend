/** @jsx jsx */

import React from 'react';
import { jsx, css } from '@emotion/core';
import { FAV } from '../components/CommonComponents';
import { Button } from '../atoms/Button';
import { mapBackground, centerContent, withGlobalOptions } from '../components/GlobalStyles';
import ResponsiveLogo from '../components/ResponsiveLogo';
import { ForgotPasswordLink, LoginButton, SigninButton } from './Login';

import * as icons from '../assets/Icons';

export const Register: React.FC = () => {
  return (
    <form css={css`width: calc(100% - 128px); max-width: 272px;`}>
      <Button hasBorder size="large"><icons.Write /> 테스트</Button><br />
      <Button hasBorder size="regular"><icons.Write /> 테스트</Button><br />
      <Button hasBorder size="small"><icons.Write /> 테스트</Button><br />
      <Button size="large"><icons.Write /> 테스트</Button><br />
      <Button size="regular"><icons.Write /> 테스트</Button><br />
      <Button size="small"><icons.Write /> 테스트</Button><br />
      <FAV><icons.Write /></FAV>
    </form>
  );
};

export default withGlobalOptions(Register, mapBackground, centerContent);
