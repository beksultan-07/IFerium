import React from 'react'
import { MiniText, TinyText } from '../../../../uikit/fonts'
import { Flex } from '../../../../uikit/uikit'
import { WCLBtn, WCRightWrap, WCLink, WCLInside, WCUl, WCItem, WCBtns, WCBtn } from '../WalletConnectSC'

const WCRight:React.FC = () => {
    const ArrowRightIcon = require('../../../../assets/home/arrowRightBlack.svg')['default']
    const ArrowRightIconWhite = require('../../../../assets/home/arrowRightWhite.svg')['default']

  return (
    <WCRightWrap>
        <WCLInside style={{height: '100%'}}>
            <Flex align='flex-start' justify='space-between' margin='20px 0 0'>
                <Flex direction='column'>
                    <WCLink to='#'>Your Referral Link</WCLink>
                    <TinyText>Connect wallet to see Referral link.</TinyText>
                </Flex>
                <WCLBtn style={{maxWidth: '160px', minWidth: '70px',  margin: '0 0 auto 0'}}>
                    <span>Claim</span>
                </WCLBtn>
            </Flex>

            <WCUl>
                <WCItem>
                    <Flex justify='space-between'>
                        <MiniText>Total invited</MiniText>
                        <MiniText color='#FFEE2D'>0 Users</MiniText>
                    </Flex>
                </WCItem>
                <WCItem>
                    <Flex justify='space-between'>
                        <MiniText>Airdorp tasks</MiniText>
                        <MiniText color='#FFEE2D'>0 MetaUFO</MiniText>
                    </Flex>
                </WCItem>
                <WCItem>
                    <Flex justify='space-between'>
                        <MiniText>IDO Rate</MiniText>
                        <MiniText color='#FFEE2D'>0.00004 BNB/1 MetaUFO</MiniText>
                    </Flex>
                </WCItem>
                <WCItem>
                    <Flex justify='space-between'>
                        <MiniText>IDO Start</MiniText>
                        <MiniText color='#FFEE2D'>Wednesday, Mar 30, 2022</MiniText>
                    </Flex>
                </WCItem>
                <WCItem>
                    <Flex justify='space-between'>
                        <MiniText>IDO end</MiniText>
                        <MiniText color='#FFEE2D'>Friday, April 29, 2022</MiniText>
                    </Flex>
                </WCItem>
                <WCItem>
                    <Flex justify='space-between'>
                        <MiniText>Unlock date</MiniText>
                        <MiniText color='#FFEE2D'>June 28, 2022</MiniText>
                    </Flex>
                </WCItem>
            </WCUl>
            
            <WCBtns>
                <WCLBtn>
                    <span>View Chat</span>
                    <img src={ArrowRightIcon} alt="" />
                </WCLBtn>

                <WCBtn>
                    <span>View Audit</span>
                    <img src={ArrowRightIconWhite} alt="" />
                </WCBtn>

                <WCBtn>
                    <span>Locked LP</span>
                    <img src={ArrowRightIconWhite} alt="" />
                </WCBtn>

            </WCBtns>
        </WCLInside>
    </WCRightWrap>
  )
}

export default WCRight