/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';

export const Add: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M3.19 23H20.8c1.21 0 2.19-.98 2.19-2.19V3.19C23 1.98 22.02 1 20.81 1H3.19C1.98 1 1 1.98 1 3.19V20.8c0 1.22.98 2.2 2.19 2.2zm.89-20h15.83c.6 0 1.09.49 1.09 1.08v15.83c0 .6-.49 1.08-1.08 1.08H4.08C3.49 21 3 20.51 3 19.92V4.08C3 3.49 3.49 3 4.08 3z" />
    <path d="M12.23 6.5h-.46c-.43 0-.77.34-.77.77V11H7.27c-.43 0-.77.34-.77.77v.46c0 .43.34.77.77.77H11v3.73c0 .43.34.77.77.77h.46c.43 0 .77-.34.77-.77V13h3.73c.43 0 .77-.34.77-.77v-.46c0-.43-.34-.77-.77-.77H13V7.27c0-.43-.34-.77-.77-.77z" />
  </svg>
);

export const Alarm: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M23.38 19.07l-3.28-4.92c-.07-.1-.1-.21-.1-.33V10c0-3.74-2.56-6.86-6.03-7.74.02-.09.03-.17.03-.26 0-1.1-.9-2-2-2s-2 .9-2 2c0 .09.01.17.03.26C6.56 3.14 4 6.26 4 10v3.82c0 .12-.03.23-.1.33L.62 19.07c-.27.4.02.93.49.93H8c0 2.21 1.79 4 4 4s4-1.79 4-4h6.89c.47 0 .76-.53.49-.93zM12 22c-1.1 0-2-.9-2-2h4c0 1.1-.9 2-2 2zm7.88-4H4.12c-.16 0-.26-.18-.17-.32l1.72-2.58.33-.49V10c0-3.31 2.69-6 6-6s6 2.69 6 6v4.61l.34.5 1.72 2.58c.08.13-.01.31-.18.31z" />
  </svg>
);

export const Arrow: React.FC<React.SVGProps<SVGSVGElement>> = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path d="M11.3 17.4L4 10.1c-.4-.4-.4-1.1 0-1.5.4-.4 1-.4 1.4 0l5.9 5.9c.4.4 1 .4 1.4 0l5.9-5.9c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7.3 7.3c-.4.4-1 .4-1.4.1z" />
  </svg>
);

export const ArrowDown: React.FC<React.SVGProps<SVGSVGElement>> = props => <Arrow {...props}/>;
export const ArrowUp: React.FC = () => (
  <Arrow style={{ transform: 'rotate(180deg)' }} />
);
export const ArrowLeft: React.FC = () => (
  <Arrow style={{ transform: 'rotate(90deg)' }} />
);
export const ArrowRight: React.FC = () => (
  <Arrow style={{ transform: 'rotate(270deg)' }} />
);

export const Close: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M19 5c-.4-.4-1-.4-1.4 0L12 10.6 6.4 5c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l5.6 5.6L5 17.6c-.4.4-.4 1 0 1.4.4.4 1 .4 1.4 0l5.6-5.6 5.6 5.6c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4L13.4 12 19 6.4c.4-.4.4-1 0-1.4z"/>
  </svg>
);

export const Flag: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M22.85 3h-4.7C17.51 3 17 2.49 17 1.85v-.7C17 .51 16.49 0 15.85 0H1.15C.51 0 0 .51 0 1.15v22.17c0 .37.31.68.68.68h.63c.38 0 .69-.31.69-.68V16h5.85c.64 0 1.15.51 1.15 1.15v.7c0 .64.51 1.15 1.15 1.15h12.7c.63 0 1.15-.51 1.15-1.15V4.15C24 3.51 23.49 3 22.85 3zM22 15.85c0 .63-.51 1.15-1.15 1.15H12.1c-.61 0-1.1-.49-1.1-1.1v-.75c0-.64-.51-1.15-1.15-1.15H3.15C2.51 14 2 13.49 2 12.85v-9.7C2 2.51 2.51 2 3.15 2H13.9c.61 0 1.1.49 1.1 1.1v.75c0 .64.51 1.15 1.15 1.15h4.7c.64 0 1.15.51 1.15 1.15v9.7z" />
  </svg>
);

export const Heart: React.FC<React.SVGProps<SVGSVGElement>> = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path d="M16.29 2.51c-1.57 0-3.08.56-4.29 1.57a6.669 6.669 0 00-4.29-1.57C4.01 2.51 1 5.52 1 9.22c0 .13.04 3.31 3.15 6.42 2.1 2.1 5.3 4.43 6.89 5.54.58.41 1.35.41 1.93 0 1.59-1.11 4.78-3.44 6.89-5.54C22.96 12.53 23 9.35 23 9.22c0-3.7-3.01-6.71-6.71-6.71zm2.15 11.72c-1.68 1.68-3.89 3.37-5.37 4.45-.64.46-1.49.46-2.13 0-1.48-1.08-3.69-2.77-5.37-4.45C3.07 11.73 3 9.31 3 9.22c0-2.6 2.11-4.71 4.71-4.71 1.34 0 2.63.59 3.53 1.63L12 7l.75-.86c.91-1.04 2.19-1.63 3.53-1.63 2.6 0 4.71 2.11 4.71 4.71.01.09-.06 2.51-2.55 5.01z" />
  </svg>
);

export const Image: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M21.59 1H2.41C1.63 1 1 1.63 1 2.41v19.18c0 .78.63 1.41 1.41 1.41h19.18c.78 0 1.41-.63 1.41-1.41V2.41C23 1.63 22.37 1 21.59 1zm-.99 2c-.13 1.6-1.46 2.88-3.1 2.88S14.53 4.6 14.4 3h6.2zM4.06 3h8.34c.13 2.71 2.36 4.88 5.1 4.88 1.36 0 2.58-.54 3.5-1.4v8.79l-3.12-3.12a1.25 1.25 0 00-1.77 0l-1.29 1.29c-.38.38-.99.38-1.37 0L7.88 7.86a1.25 1.25 0 00-1.77 0L3 10.97V4.06C3 3.47 3.47 3 4.06 3zm15.88 18H4.06C3.47 21 3 20.53 3 19.94V13.8l3.32-3.32c.38-.38.99-.38 1.37 0l5.58 5.58c.49.49 1.28.49 1.77 0l1.29-1.29c.38-.38.99-.38 1.37 0l3.3 3.32v1.85c0 .59-.47 1.06-1.06 1.06z" />
  </svg>
);

export const Log: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M3 .65v22.69c0 .37.29.66.65.66h9.65c.44 0 .87-.18 1.18-.49l6.02-6.02c.31-.31.49-.74.49-1.18V.65a.634.634 0 00-.64-.65H3.65C3.29 0 3 .29 3 .65zm12 19.52v-1.39c0-.43.35-.78.78-.78h1.39L15 20.17zM19 16h-5.09c-.5 0-.91.41-.91.91V22H5.65c-.36 0-.65-.29-.65-.65V2.65c0-.36.29-.65.65-.65h12.69c.37 0 .66.29.66.65V16z" />
    <path d="M16.47 6H7.53C7.24 6 7 5.76 7 5.47v-.94c0-.29.24-.53.53-.53h8.93c.3 0 .54.24.54.53v.93c0 .3-.24.54-.53.54zM11.47 10H7.53C7.24 10 7 9.76 7 9.47v-.94c0-.29.24-.53.53-.53h3.93c.3 0 .54.24.54.53v.93c0 .3-.24.54-.53.54zM16.47 10h-1.93c-.3 0-.54-.24-.54-.53v-.94c0-.29.24-.53.53-.53h1.93c.3 0 .54.24.54.53v.93c0 .3-.24.54-.53.54zM16.47 14H7.53c-.29 0-.53-.24-.53-.53v-.93c0-.3.24-.54.53-.54h8.93c.3 0 .53.24.53.53v.93c.01.3-.23.54-.52.54z" />
  </svg>
);

export const Message: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M0 3.92v16.17c0 .5.41.91.92.91h22.17c.51 0 .92-.41.92-.92V3.92a.933.933 0 00-.93-.92H.92C.41 3 0 3.41 0 3.92zM20.26 5l-7.58 5.3c-.41.28-.95.28-1.36 0L3.74 5h16.52zM2 18.24V6.22l9.26 6.48c.44.31 1.03.31 1.47 0L22 6.22v12.02c0 .42-.34.76-.76.76H2.76a.76.76 0 01-.76-.76z" />
  </svg>
);

export const Place: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M12 2.27c3.31 0 6 2.69 6 6 0 3.76-2.86 8.57-5.22 11.82a.974.974 0 01-1.57 0C8.86 16.84 6 12.03 6 8.27c0-3.31 2.69-6 6-6m0-2c-4.42 0-8 3.58-8 8 0 5.74 5.26 12.69 7.25 15.11.39.48 1.12.48 1.51 0C14.74 20.95 20 14.01 20 8.27c0-4.42-3.58-8-8-8z" />
    <path d="M12 7.27c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m0-2c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
  </svg>
);

export const Search: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M17.98 15.36l-.44.44-1.98-1.98a8.632 8.632 0 001.57-6.84C16.48 3.56 13.73.8 10.31.17A8.638 8.638 0 00.16 10.31c.64 3.42 3.4 6.17 6.82 6.82 2.58.49 4.99-.19 6.84-1.57l1.98 1.98-.44.44 5.48 5.48c.72.72 1.9.72 2.62 0 .72-.72.72-1.9 0-2.62l-5.48-5.48zm-9.34-.54c-3.4 0-6.17-2.77-6.17-6.17s2.77-6.17 6.17-6.17 6.17 2.77 6.17 6.17-2.76 6.17-6.17 6.17z" />
  </svg>
);

export const Setting: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M13.66 4.1l.18 1.06.99.44c.45.2.89.45 1.31.76L17 7l1.01-.38 1.38-.52c.36-.13.76.01.95.34l.64 1.12c.19.33.11.75-.18.99l-1.13.93-.83.69.12 1.07c.03.27.04.52.04.76s-.01.49-.04.76l-.12 1.07.83.69 1.13.93c.29.24.37.66.18.99l-.64 1.12c-.19.33-.59.47-.95.34l-1.38-.52L17 17l-.87.64c-.42.31-.86.56-1.31.76l-.99.44-.18 1.06-.24 1.44c-.06.38-.38.66-.77.66h-1.29c-.38 0-.71-.28-.77-.65l-.24-1.44-.18-1.06-.98-.45c-.45-.2-.89-.45-1.31-.76L7 17l-1.01.38-1.38.52a.784.784 0 01-.95-.34l-.64-1.12a.783.783 0 01.18-.99l1.13-.93.83-.69-.12-1.07C5.01 12.49 5 12.24 5 12s.01-.49.04-.76l.12-1.07-.83-.69-1.13-.93a.77.77 0 01-.18-.99l.64-1.12c.19-.33.59-.47.95-.34l1.38.52L7 7l.87-.64c.42-.31.86-.56 1.31-.76l.99-.44.18-1.06.24-1.44c.06-.38.38-.66.77-.66h1.29c.38 0 .71.28.77.65l.24 1.45zM8.89.65l-.45 2.72c-.04.25-.21.46-.43.57-.34.17-.67.36-.99.57a.78.78 0 01-.71.09l-2.58-.97a.784.784 0 00-.95.34L.44 8.03a.77.77 0 00.18.99l2.44 2.01c-.04.32-.06.64-.06.97s.02.65.05.98L.61 14.99c-.29.24-.37.66-.18.99l2.34 4.05c.19.33.59.47.95.34l2.59-.97c.24-.09.5-.05.71.09.32.21.64.4.99.57.23.11.39.32.43.57l.45 2.72c.06.37.39.65.77.65h4.68c.38 0 .71-.28.77-.65l.45-2.72c.04-.25.2-.46.43-.57.34-.17.67-.36.99-.57a.78.78 0 01.71-.09l2.59.97c.36.13.76-.01.95-.34l2.34-4.05c.19-.33.11-.75-.18-.99l-2.44-2.01c.03-.33.05-.65.05-.98s-.02-.65-.05-.98l2.44-2.01c.29-.24.37-.66.18-.99l-2.34-4.05a.784.784 0 00-.95-.34l-2.59.97a.78.78 0 01-.71-.09c-.32-.21-.64-.4-.99-.57a.764.764 0 01-.43-.57L15.11.65a.784.784 0 00-.77-.65H9.66c-.38 0-.71.28-.77.65z" />
    <path d="M12 11c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m0-2c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
  </svg>
);

export const SignIn: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M8.8 6.7l-.6.6c-.23.23-.23.59 0 .82L11.09 11H4.08a.58.58 0 00-.58.58v.84c0 .32.26.58.58.58h7.01L8.2 15.88c-.23.23-.23.59 0 .82l.6.6c.23.23.59.23.82 0l4.44-4.44c.47-.47.47-1.24 0-1.71L9.62 6.7a.592.592 0 00-.82 0z" />
    <path d="M9.5.63v.73c0 .36.28.64.63.64h7.41c.53 0 .96.43.96.96v18.08c0 .53-.43.96-.96.96h-7.41c-.35 0-.63.28-.63.63v.73c0 .35.28.63.63.63h8.39c1.09 0 1.98-.89 1.98-1.98V1.98C20.5.89 19.61 0 18.52 0h-8.39c-.35 0-.63.28-.63.63z" />
  </svg>
);

export const Talk: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M12 2.41c5.51 0 10 3.26 10 7.27 0 3.62-4.17 7.09-9.63 7.22a.9.9 0 00-.63.3l-2.1 2.38v-2.33a.58.58 0 00-.41-.55l-1.02-.3C4.5 15.27 2 12.57 2 9.68c0-4.01 4.49-7.27 10-7.27m0-2C5.37.41 0 4.56 0 9.68c0 3.81 2.98 7.08 7.24 8.5.23.08.4.29.4.54v4.29c0 .51.62.77.98.41l4.37-4.37c.09-.09.22-.15.35-.16 6-.52 10.66-4.44 10.66-9.21C24 4.56 18.63.41 12 .41z" />
  </svg>
);

export const Write: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M22.35 6.67V2.98c0-1.06-1.29-1.6-2.04-.84l-3.64 3.64c-.2.2-.47.31-.74.31H13.9c-2.4 0-4.71.9-6.46 2.53l-.04.03a9.497 9.497 0 00-3.04 6.97v2.39c-.02.05-.04.09-.06.14L2.65 19.8c-.64.64-1 1.51-1 2.41.91 0 1.77-.36 2.41-1l1.65-1.65c.05-.02.09-.04.14-.06h7.22c4.13 0 7.38-4.31 8.46-5.95a.4.4 0 00-.34-.62h-1.25c-.33 0-.51-.4-.29-.65 1.55-1.67 2.7-3.51 2.7-5.61zm-6.52 6.52l-1.51 1.34h3.65c.26 0 .4.32.21.5-1.17 1.12-3.11 2.48-5.11 2.48H8.24c-.17 0-.26-.21-.14-.33l6.5-6.5a.38.38 0 00-.27-.65c-1.22 0-2.39.49-3.26 1.35l-4.38 4.38c-.12.12-.33.04-.33-.14v-.02c0-2.07.86-4.05 2.39-5.46l.06-.06a7.49 7.49 0 015.1-2h2.95c.22 0 .43-.09.58-.24l2.92-2.92v1.74c-.01 2.32-2.24 4.5-4.53 6.53z" />
  </svg>
);
