import React from 'react'
import { PreTitle } from '../../../../uikit/fonts'
import { Flex } from '../../../../uikit/uikit'
import Airdrop from '../Airdrop/Airdrop'
import IDO from '../IDO/IDO'
import { WCLBtn1, WCLBtn2, WCLeftWrap} from '../WalletConnectSC'

const WCLeft:React.FC = () => {
    const [activeSide, setActiveSide] = React.useState(true)
  return (
    <WCLeftWrap>
        <Flex width='100%'>
            <WCLBtn1 
                activeBtn={activeSide} 
                onClick={() => setActiveSide(true)}>
                <PreTitle 
                    style={{color: activeSide?'#171717':'#F6F6F6'}}>
                        Bye IDO
                </PreTitle>
            </WCLBtn1>
            <WCLBtn2 
                activeBtn={activeSide} 
                onClick={() => setActiveSide(false)}>
                    <PreTitle 
                    style={{color: !activeSide?'#171717':'#F6F6F6'}}>
                        Join Airdrop
                    </PreTitle>
            </WCLBtn2>
        </Flex>
        {activeSide?<IDO/>:<Airdrop/>}
    </WCLeftWrap>
  )
}

export default WCLeft