/** @jsx jsx */

import React from 'react';
import { TextInput } from '../components/Input/TextInput';

import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { ButtonWrapper } from '../components/Button/ButtonWrapper';

import {
  mapBackground,
  centerContent,
  withGlobalOptions,
} from '../components/GlobalStyles';

import * as icons from '../assets/Icons';
import * as styles from '../constants';

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
        margin: 0 auto;
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
      <p
        css={css`
          ${styles.TEXT_R};
          word-break: keep-all;
        `}
      >
        재설정할 계정의 이메일 주소를 입력해주세요.
      </p>
    </div>
  );
};
export const LostPassword: React.FC = () => {
  return (
    <React.Fragment>
      <ButtonWrapper position="top-left" padding="x-small">
        <Link to=".">
          <Button size="large">
            <icons.ArrowLeft />
          </Button>
        </Link>
      </ButtonWrapper>

      <form
        css={css`
          width: calc(100% - 2 * ${styles.SPACE_L});
        `}
      >
        <PageHint />
        <div
          css={css`
            width: 100%;
            max-width: 272px;
            margin: 0 auto;
          `}
        >
          <TextInput
            id=""
            type="email"
            width="272px"
            placeholder="email@example.com"
            css={css`
              margin-bottom: 16px;
            `}
          />
          <Button hasBorder size="regular" width="100%">
            이메일 주소 입력
          </Button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default withGlobalOptions(LostPassword, mapBackground, centerContent);
