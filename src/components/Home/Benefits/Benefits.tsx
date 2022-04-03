import React from 'react'
import { BlockTitle, MiniText, PreTitle } from '../../../uikit/fonts'
import { Container, Flex } from '../../../uikit/uikit'
import { BItem, BItemImg, BItems } from './BenefitsSC'

const Benefits:React.FC = () => {
    const Icon1 = require('../../../assets/home/benefits/icon1.svg')['default']
    const Icon2 = require('../../../assets/home/benefits/icon2.svg')['default']
    const Icon3 = require('../../../assets/home/benefits/icon3.svg')['default']
    const Icon4 = require('../../../assets/home/benefits/icon4.svg')['default']


    return (
        <Container>
            <Flex direction='column' align='center'>
                <BlockTitle margin='100px 0 75px'>Our Benefits</BlockTitle>

                <BItems>
                    <BItem>
                        <BItemImg src={Icon1}/>
                        <PreTitle margin='14px 0 10px'>3-type Referral System</PreTitle>
                        <MiniText>Invite your friends and earn a certain commission reward every time they make a swap on Ifereum and 5% from their income in Farms & Launchpools.</MiniText>
                    </BItem>
                    <BItem>
                        <BItemImg src={Icon2}/>
                        <PreTitle margin='14px 0 10px'>The Lowest Exchange Fee</PreTitle>
                        <MiniText>Safely buy and sell your cryptocurrency with the lowest exchange fee in the DeFi space.</MiniText>
                    </BItem>
                    <BItem>
                        <BItemImg src={Icon3}/>
                        <PreTitle margin='14px 0 10px'>Trade Fee Reimbursement</PreTitle>
                        <MiniText>Make a swap on Ifereum at no cost. Up to 90% of the trading fee returned in BSW tokens.</MiniText>
                    </BItem>
                    <BItem>
                        <BItemImg src={Icon4}/>
                        <PreTitle margin='14px 0 10px'>Competitions</PreTitle>
                        <MiniText>Participate in the regular Ifereum trading competitions and win exclusive prizes.</MiniText>
                    </BItem>
                </BItems>
            </Flex>
        </Container>
  )
}

export default Benefits