/** @jsx jsx */

import React from 'react';
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import { TEXT_R, TEXT_S, SUBTEXT_XS, TRANSITION_FAST, YELLOW_100, BROWN_500 } from '../constants';
import { TextInput } from '../components/CommonComponents';
import { mapBackground, centerContent, withGlobalOptions } from '../components/GlobalStyles';
import ResponsiveLogo from '../components/ResponsiveLogo';

export const ForgotPasswordLink = styled(Link)`
  ${SUBTEXT_XS}
  ${TRANSITION_FAST};

  width: 100%;
  margin: 16px 0;

  text-align: right;
  text-decoration: none;

  display: inline-block;

  transition-property: color;

  :hover {
      color: ${YELLOW_100};
  }
`;

export const LoginButton = styled.button`
  ${TEXT_R};
  ${TRANSITION_FAST};

  display: block;
  
  width: 100%;
  line-height: 46px;

  color: ${YELLOW_100};
  border: 1px solid ${YELLOW_100};
  background: none;

  transition-property: color, background;

  cursor: pointer;

  :hover {
    color: ${BROWN_500};
    background: ${YELLOW_100};
  }
`;

export const SigninButton = styled(Link)`
  ${TEXT_S};

  display: block;
  padding: 8px;
  margin: 8px auto 0;
  width: fit-content;

  color: ${YELLOW_100};
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
      <LoginButton>로그인</LoginButton>
      <SigninButton to="/register">회원 가입 신청하기</SigninButton>
    </form>
  );
};

export default withGlobalOptions(Login, mapBackground, centerContent);
