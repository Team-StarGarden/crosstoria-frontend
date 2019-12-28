/** @jsx jsx */

import React from 'react';
import { jsx, css } from '@emotion/core';
import { TextInput } from '../components/CommonComponents';
import { Button } from '../components/Button';
import { mapBackground, centerContent, withGlobalOptions } from '../components/GlobalStyles';

import * as icons from '../assets/Icons';
import * as styles from '../constants';

export const Register: React.FC = () => {
  return (
    <React.Fragment>
      <div css={css`position: absolute; top: 0; left: 0; padding: 8px; background: ${styles.BROWN_100};`}><Button size="large"><icons.ArrowLeft /></Button></div>
      <form css={css`width: calc(100% - 128px); max-width: 272px;`}>
        <h1>가입 신청 ddd</h1>
        <h2>연합 기본 정보 입력</h2>
        <TextInput id="" type="email" placeholder="email@example.com" width="100%" />
        <TextInput id="" type="displayName" placeholder="별명" width="100%" />
        <TextInput id="" type="age" placeholder="나이" width="100%" />
        <Button hasBorder size="regular" width="100%">가입 신청</Button>
      </form>
    </React.Fragment>
  );
};

export default withGlobalOptions(Register, mapBackground, centerContent);
