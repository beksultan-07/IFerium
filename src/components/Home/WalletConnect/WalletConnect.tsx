import React from 'react'
import { Container } from '../../../uikit/uikit'
import WCLeft from './WCLeft/WCLeft'
import WCRight from './WCRight/WCRight'
import { WCWrap } from './WalletConnectSC'

const WalletConnect:React.FC = () => {
  return (
    <Container>
        <WCWrap>
            <WCLeft/>
            <WCRight/>
        </WCWrap>
    </Container>
  )
}

export default WalletConnect