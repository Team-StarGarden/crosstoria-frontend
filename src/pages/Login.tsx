/** @jsx jsx */

import React from 'react';
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import { TextInput } from '../components/CommonComponents';
import { mapBackground, centerContent, withGlobalOptions } from '../components/GlobalStyles';
import ResponsiveLogo from '../components/ResponsiveLogo';
import { Button } from '../components/Button';

import * as icons from '../assets/Icons';
import * as styles from '../constants';

export const ForgotPasswordLink = styled(Link)`
  ${styles.SUBTEXT_XS}
  ${styles.TRANSITION_FAST};

  width: 100%;
  margin: 16px 0;

  text-align: right;
  text-decoration: none;

  display: inline-block;

  transition-property: color;

  :hover {
      color: ${styles.YELLOW_100};
  }
`;

export const SigninButton = styled(Link)`
  ${styles.TEXT_S};

  display: block;
  padding: 8px;
  margin: 8px auto 0;
  width: fit-content;

  color: ${styles.YELLOW_100};
  text-align: center;
  text-decoration: none;
`;

export const Login: React.FC = () => {
  return (
    <form css={css`width: calc(100% - 128px); max-width: 272px;`}>
      <ResponsiveLogo />
      <TextInput id="" type="email" placeholder="email@example.com"/>
      <TextInput id="" type="password" placeholder="＊＊＊＊＊＊＊＊"/>
      <ForgotPasswordLink to="/lost-password">비밀번호를 잊으셨나요?</ForgotPasswordLink>
      <Button hasBorder size="regular" width="100%"><icons.SignIn />로그인</Button>
      <SigninButton to="/register">회원 가입 신청하기</SigninButton>
    </form>
  );
};

export default withGlobalOptions(Login, mapBackground, centerContent);
