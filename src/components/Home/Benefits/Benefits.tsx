import React from 'react'
import { BlockTitle, MiniText, PreTitle } from '../../../uikit/fonts'
import { Container, Flex } from '../../../uikit/uikit'
import { BItem, BItemImg, BItems } from './BenefitsSC'
import {useTranslation} from "react-i18next";


const Benefits:React.FC = () => {
    const Icon1 = require('../../../assets/home/benefits/icon1.svg')['default']
    const Icon2 = require('../../../assets/home/benefits/icon2.svg')['default']
    const Icon3 = require('../../../assets/home/benefits/icon3.svg')['default']
    const Icon4 = require('../../../assets/home/benefits/icon4.svg')['default']

    const {t} = useTranslation()


    return (
        <Container>
            <Flex direction='column' align='center'>
                <BlockTitle margin='100px 0 75px'>{t("Home.Benefits.title")}</BlockTitle>

                <BItems>
                    <BItem>
                        <BItemImg src={Icon1}/>
                        <PreTitle margin='14px 0 10px' color='#F6F6F6'>{t("Home.Benefits.First.title")}</PreTitle>
                        <MiniText>{t("Home.Benefits.First.text")}</MiniText>
                    </BItem>
                    <BItem>
                        <BItemImg src={Icon2}/>
                        <PreTitle margin='14px 0 10px' color='#F6F6F6'>{t("Home.Benefits.Second.title")}</PreTitle>
                        <MiniText>{t("Home.Benefits.Second.text")}</MiniText>
                    </BItem>
                    <BItem>
                        <BItemImg src={Icon3}/>
                        <PreTitle margin='14px 0 10px' color='#F6F6F6'>{t("Home.Benefits.Third.title")}</PreTitle>
                        <MiniText>{t("Home.Benefits.Third.text")}</MiniText>
                    </BItem>
                    <BItem>
                        <BItemImg src={Icon4}/>
                        <PreTitle margin='14px 0 10px' color='#F6F6F6'>{t("Home.Forth.Second.title")}</PreTitle>
                        <MiniText>{t("Home.Benefits.Forth.text")}</MiniText>
                    </BItem>
                </BItems>
            </Flex>
        </Container>
  )
}

export default Benefits