import React from 'react'
import { TinyText } from '../../../../uikit/fonts'
import { Flex } from '../../../../uikit/uikit'
import { WCLInput, WCLInside, WCLTitle, WCLBlock, WCLInput2, WCLBlock2, WCLBtn, WCLBlock3 } from '../WalletConnectSC'

const IDO:React.FC = () => {
    const ArrowRightIcon = require('../../../../assets/home/arrowRightBlack.svg')['default']
    const WCIcon = require('../../../../assets/WC.svg')['default']

    const [inputValue1, setInputValue1] = React.useState('')
    const [inputValue2, setInputValue2] = React.useState('')
    const [inputValue3, setInputValue3] = React.useState('')

  return (
    <WCLInside>
        <WCLTitle>Enter BNB amount</WCLTitle>
        <Flex>
            <WCLBlock>
                <WCLInput 
                    type='text' 
                    placeholder='Enter amount'
                    onChange={(e) => setInputValue1(e.target.value)}    
                />
            </WCLBlock>
            <WCLBlock2>
                <WCLInput2 
                    type='text' 
                    placeholder='To Receive'
                    onChange={(e) => setInputValue2(e.target.value)}
                />
            </WCLBlock2>
        </Flex>

        <Flex justify='space-between' margin='14px 0 30px'>
            <TinyText>IDO Level:0.27%</TinyText>
            <TinyText style={{textAlign: 'end'}}>$MetaUFO to Receive</TinyText>
        </Flex>

        <WCLTitle>Payment Method</WCLTitle>

        <WCLBlock3>
            <img src={WCIcon} alt="" />
            <WCLInput 
                type='text' 
                placeholder=''
                onChange={(e) => setInputValue3(e.target.value)}    
            />
        </WCLBlock3>


        <WCLBtn>
            <span>Connect Wallet</span>
            <img src={ArrowRightIcon}/>
        </WCLBtn>
    </WCLInside>
  )
}

export default IDO