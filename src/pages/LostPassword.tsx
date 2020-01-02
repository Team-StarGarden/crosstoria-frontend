/** @jsx jsx */

import React from 'react';
import { TextInput } from '../components/Input/TextInput';
import * as styles from '../constants';
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';

import {
  mapBackground,
  centerContent,
  withGlobalOptions,
} from '../components/GlobalStyles';

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
export const PageHint: React.FC = () => {
  return (
    <div
      css={css`
        text-align: center;
      `}
    >
      <h1
        css={css`
          ${styles.TEXT_XL};
        `}
      >
        비밀번호 재설정
      </h1>
      {/*TODO: need to prevent breakRow */}
      <h2
        css={css`
          ${styles.TEXT_L};
          color: ${styles.YELLOW_500};
          word-break: keep-all;
          
        `}
      >
        재설정할 계정의 이메일 주소를 입력해 주세요
      </h2>
    </div>
  );
};
export const LostPassword: React.FC = () => {
  return (
    <form
      css={css`
        width: calc(100% - 2 * ${styles.SPACE_XXL});
        max-width: 272px;
      `}
    >
      <PageHint />
      <TextInput
        id=""
        type="email"
        width="100%"
        placeholder="email@example.com"
        css={css`
          margin-bottom: 16px;
        `}
      />
      <Button hasBorder size="regular" width="100%">
        이메일 주소 입력
      </Button>
    </form>
  );
};

export default withGlobalOptions(LostPassword, mapBackground, centerContent);
