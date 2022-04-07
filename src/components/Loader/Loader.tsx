import React from 'react'
import { Flex } from '../../uikit/uikit';
import styled, { keyframes } from 'styled-components';

type LoaderProps = {
  showLoader: boolean;
}

const LoaderWrap = styled(Flex)<LoaderProps>`
    display: ${props => props.showLoader?'flex': 'none'};
    background: #000000a2;
    position: absolute;
    height: 100vh;
    width: 100vw;
    z-index: 5;
`

const LoaderWrapInside = styled(Flex)`
  position: relative;
`


const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const LoaderImgWrap = styled.div`
  background: linear-gradient(137.3deg, #FFF151 1.52%, #FFD449 97.81%);
  transform: matrix(1, -0.01, 0, 1, 0, 0);
  border-radius: 50px;
  /* padding: 20px 40px; */
  width: 160px;
  height: 160px;

  animation: ${rotate} 2s linear infinite;
`

const LoaderImg = styled.img`
  width: 80px;
  position: absolute;
  top: 30px;
  left: 40px;
`


const Loader:React.FC<LoaderProps> = (props) => {
  const Logo = require('../../assets/logoBlack.svg')['default']

  return (
    <LoaderWrap justify='center' align='center' showLoader={props.showLoader}>
      <LoaderWrapInside>
        <LoaderImgWrap>
        </LoaderImgWrap>
          <LoaderImg src={Logo} alt="" />
      </LoaderWrapInside>
      </LoaderWrap>
  )
}

export default Loader