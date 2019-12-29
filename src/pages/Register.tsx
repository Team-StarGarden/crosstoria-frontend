/** @jsx jsx */

import React from 'react';
import { jsx, css } from '@emotion/core';
import { Button } from '../components/Button';
import { ButtonWrapper } from '../components/Button/ButtonWrapper';
import { TextInput } from '../components/Input/TextInput';
import {
  mapBackground,
  centerContent,
  withGlobalOptions,
} from '../components/GlobalStyles';

import * as icons from '../assets/Icons';
import * as styles from '../constants';

export const Register: React.FC = () => {
  return (
    <React.Fragment>
      <ButtonWrapper position="top-left" padding="x-small">
        <Button size="large">
          <icons.ArrowLeft />
        </Button>
      </ButtonWrapper>
      <form
        css={css`
          width: calc(100% - 2 * ${styles.SPACE_XXL});
          max-width: 272px;
        `}
      >
        <h1
          css={css`
            ${styles.TEXT_XL};
            text-align: center;
          `}
        >
          가입 신청
        </h1>
        <h2
          css={css`
            ${styles.TEXT_L};
            text-align: center;
          `}
        >
          연합원 기본 정보 입력
        </h2>
        <TextInput
          id=""
          type="email"
          placeholder="email@example.com"
          width="100%"
          css={css`
            margin-top: 0;
          `}
        />
        <TextInput id="" type="displayName" placeholder="별명" width="100%" />
        <TextInput
          id=""
          type="age"
          placeholder="나이"
          width="100%"
          css={css`
            margin-bottom: 16px;
          `}
        />
        <Button hasBorder size="regular" width="100%">
          가입 신청
        </Button>
      </form>
    </React.Fragment>
  );
};

export default withGlobalOptions(Register, mapBackground, centerContent);
