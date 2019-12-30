/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import * as styles from '../../constants';
import { CharacterProfileImage } from '../CharacterProfile/CharacterProfileImage';

const SideBarOnEvent = () => {
  document.body.classList.add('sidebar-opened');
};

export const SideBarOnButton: React.FC = () => {
  return (
    <div
      css={css`
        z-index: 10;

        ${styles.TRANSITION_SLOW}
        transition-property: left;

        position: absolute;
        top: 0;
        left: 0;
        padding: ${styles.SPACE_XS};

        background-color: ${styles.BROWN_100};
        width: 80px;
        height: 80px;

        ${styles.MEDIAQUERY_OVER_R} {
          left: -80px;
        }
      `}
    >
      <CharacterProfileImage
        src="https://placehold.it/64x64"
        size="large"
        onClick={SideBarOnEvent}
        additionalCSS={css`
          cursor: pointer;

          &:focus, &:hover {
            filter: brightness(0.5);
          }
        `}
      />
    </div>
  );
};

export default SideBarOnButton;
