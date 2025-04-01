'use client';

import styled, { createGlobalStyle, keyframes } from 'styled-components';

export const Page = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  font: 400 16px var(--font-geist-sans);
  color: ${(props) => props.theme.foreground};
  background: ${(props) => props.theme.background};
`;

export const Content = styled.div`
  position: relative;
  width: 100vw;
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
`;

export const Conic = styled.div`
  position: absolute;
  width: 30rem;
  height: 22.5rem;
  filter: blur(45px);
  transform: rotate(180deg);
  background: conic-gradient(
    from 180deg at 50% 50%,
    rgba(22, 171, 255, 0.2) 0deg,
    rgba(8, 133, 255, 0.2) 55deg,
    rgba(84, 214, 255, 0.2) 120deg,
    rgba(0, 113, 255, 0.2) 160deg,
    transparent 360deg
  );
  border-radius: 50%;
  animation: ${keyframes`
    0% {
      transform: translateY(0px);
    }

    50% {
      transform: translateY(50px);
    }

    100% {
      transform: translateY(0px);
    }
  `} 6s ease-in-out 0s infinite normal none running;
`;

export const GitHub = styled.a`
  position: fixed;
  width: 1.5625rem;
  height: 1.5625rem;
  left: 1.25rem;
  bottom: 1.25rem;
  z-index: 10;
  cursor: pointer;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(/github.svg);
  transition: opacity 0.2s ease 0s;

  &:hover {
    opacity: 0.5;
  }
`;

export default createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-rendering: optimizeLegibility;
  };

  html {
    line-height: 1.15;
    font-family: sans-serif;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  };

  body {
    overflow: hidden;
    user-select: none;
    background-color: transparent;
    -webkit-font-smoothing: antialiased;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  @media (prefers-color-scheme: dark) {
    html {
      color-scheme: dark;
    }
  }
`;
