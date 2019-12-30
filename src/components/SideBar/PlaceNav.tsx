/** @jsx jsx */

import React from 'react';
import { jsx, css } from '@emotion/core';

import * as styles from '../../constants';
import bgTownmap from '../../assets/bg_townmap.jpg';

type PlaceNavItemProps = {
  /* 장소의 ID를 설정합니다. */
  id: string;
  /* 장소의 이미지를 설정합니다. */
  /* TODO: 현재는 배경 이미지의 URL이지만, 장소의 ID에 따라 배경이 바뀌도록 하여야 합니다. */
  place: string;
  /* 장소가 이미 현재 장소라면, 해당 props를 추가합니다. */
  isCurrent?: boolean;
};

const PlaceNavItemStyle = css`
  ${styles.TRANSITION_FAST}
  transition-property: color;

  position: relative;

  padding-right: ${styles.SPACE_R};

  ${styles.SUBTEXT_R};
  height: 64px;
  line-height: 64px;
  text-align: right;

  cursor: pointer;

  &:hover {
    color: ${styles.YELLOW_100};
  }

  &.current {
    color: ${styles.YELLOW_100};
    font-weight: bold;
    cursor: unset;
  }
`;

const PlaceNavItemBackgroundStyle = css`
  ${styles.TRANSITION_FAST}
  transition-property: opacity;

  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-size: cover;
  background-position: center;
  opacity: 0.4;

  li:hover > &,
  li.current > & {
    opacity: 1;
  }

  li:active > & {
    opacity: 0.4;
  }
`;

export const PlaceNavItem: React.FC<PlaceNavItemProps> = ({
  id,
  place,
  isCurrent,
  children,
}) => {
  return (
    <li
      css={css`
        ${PlaceNavItemStyle}
      `}
      className={isCurrent ? 'current' : ''}
    >
      <div
        css={css`${PlaceNavItemBackgroundStyle} background-image: url(${place});`}
      />
      {children}
    </li>
  );
};

export const PlaceNav: React.FC = () => {
  return (
    <React.Fragment>
      <ul
        css={css`
          margin: 0;
        `}
      >
        <PlaceNavItem isCurrent id="0" place={bgTownmap}>
          트윙클 타운 전체
        </PlaceNavItem>
        <PlaceNavItem id="1" place={bgTownmap}>
          호수 &lt;별의 눈&gt;
        </PlaceNavItem>
        <PlaceNavItem id="2" place={bgTownmap}>
          바다 &lt;스타폴 해안&gt;
        </PlaceNavItem>
      </ul>
    </React.Fragment>
  );
};

export default PlaceNav;
