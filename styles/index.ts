import styled, { keyframes } from 'styled-components';

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100px)
  }
  to {
    opacity: 1;
    transform: translateX(0px)
  }
`;

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(100px)
  }
  to {
    opacity: 1;
    transform: translateX(0px)
  }
`;

const appearFromTop = keyframes`
  from {
    opacity: 0;
    transform: translateY(-100px)
  }
  to {
    opacity: 1;
    transform: translateY(0px)
  }
`;
const appearFromBottom = keyframes`
  from {
    opacity: 0;
    transform: translateY(100px)
  }
  to {
    opacity: 1;
    transform: translateY(0px)
  }
`;

export const Container = styled.div`
  background: #4a7b9d;
  width: 100vw;
  height: 100vh;
  overflow: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MainContainer = styled.div`
  width: 800px;
  margin: 0 auto;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: transparent;
  border-radius: 8px;
  border-style: dashed;
  border-color: rgba(0, 0, 0, 0.4);
  border-width: 2px;
  padding: 30px;
  animation: ${appearFromLeft} 1s;
  transition: border-color 0.4s;

  :hover {
    border-color: #000;
  }

  @media (max-width: 650px) {
    border: none;
    padding: 0%;
  }

  > button {
    margin-top: -15%;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    border-style: solid;
    border-color: #000;
    border-width: 3px;
    background: #fff;
    height: 180px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 180px;
    transition: all 1s ease;
    animation: ${appearFromTop} 1s;

    &:hover {
      border-color: rgba(0, 0, 0, 0.8);
    }

    @media (max-width: 650px) {
      width: 140px;
      height: 140px;
    }

    > img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
`;

export const Informations = styled.div`
  width: 50%;
  height: auto;
  margin-top: 20px;
  animation: ${appearFromBottom} 1s;

  @media (max-width: 650px) {
    width: 100%;
  }

  strong {
    width: 100%;
    display: block;
    text-align: center;
    font-size: 24px;
  }

  a {
    :hover {
      color: rgba(0, 0, 0, 0.6);
    }
  }

  span,
  a {
    color: rgba(0, 0, 0, 0.9);
    width: 100%;
    display: block;
    text-align: center;
    font-size: 20px;
    margin: 5px 0;
    text-decoration: none;
  }
`;

export const SocialNetworksContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  animation: ${appearFromRight} 1s;

  a {
    text-decoration: none;
    transition: 0.5s ease-in-out;

    :hover {
      opacity: 0.7;
      transform: rotateX(360deg);
    }

    & + a {
      margin-left: 30px;
    }

    > svg {
      color: rgba(2525, 255, 255, 0.7);
    }
  }
`;

export const Username = styled.span`
  width: 100%;
  display: block;
  background: red;
`;
