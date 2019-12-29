/** @jsx jsx */

import React from 'react';
import { jsx } from '@emotion/core';

export const MenuButton: React.FC<{ id: string }> = ({ children }) => {
  return <React.Fragment>{children}</React.Fragment>;
};

export const MenuBar: React.FC = () => {
  return (
    <React.Fragment>
      <ul>
        <li>
          <MenuButton id="0">트윙클 타운 전체</MenuButton>
        </li>
        <li>
          <MenuButton id="1">호수 &lt;별의 눈 &gt;</MenuButton>
        </li>
        <li>
          <MenuButton id="2">바다 &lt;스타폴 해안 &gt;</MenuButton>
        </li>
      </ul>
    </React.Fragment>
  );
};

export default MenuBar;
