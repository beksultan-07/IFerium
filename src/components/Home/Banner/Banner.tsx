import React from 'react'
import { BigText, MiniText, Text, BiggerText } from '../../../uikit/fonts'
import { Container, Flex } from '../../../uikit/uikit'
import { BannerBtn, BannerInfo, BannerLogo, BannerRates, BannerRatesItem, BannerRatesItem2, BannerRatesItemWrap, BannerRatesItem2Texts, BannerInfoSide } from './BannerSC'
import {useTranslation} from "react-i18next";


const Banner:React.FC = () => {
    const ArrowRightIcon = require('../../../assets/home/arrowRightBlack.svg')['default']
    const Logo = require('../../../assets/home/banner.svg')['default']
    const Icon1 = require('../../../assets/home/icon1.svg')['default']
    const Icon2 = require('../../../assets/home/icon2.svg')['default']
    const Icon3 = require('../../../assets/home/icon3.svg')['default']

    const {t} = useTranslation()

    return (
        <Container>
            <BannerInfo justify='space-between' align='flex-start' margin='85px 0 0'>
                <BannerInfoSide direction='column' flex={1}>
                    <BigText color='#F6F6F6' style={{maxWidth: '660px'}}>
                        {t("Home.Banner.title")}
                    </BigText>
                    <Text margin='20px 0'>{t("Home.Banner.text")}</Text>
                    <BannerBtn>
                        <span>{t("Home.Banner.btn")}</span>
                        <img src={ArrowRightIcon}/>
                    </BannerBtn>
                </BannerInfoSide>
                <BannerLogo src={Logo}/>
            </BannerInfo>

            <BannerRates>
                <BannerRatesItemWrap>
                    <BannerRatesItem>
                        <img src={Icon1}/>
                        <Flex direction='column'>
                            <MiniText margin='0 0 10px 0' style={{maxWidth: '210px'}}>{t("Home.Banner.trades.trade1")}</MiniText>
                            <BiggerText>0.1%</BiggerText>
                        </Flex>
                    </BannerRatesItem>
                    <BannerRatesItem>
                        <img src={Icon2}/>
                        <Flex direction='column'>
                            <MiniText margin='0 0 10px 0' style={{maxWidth: '210px'}}>{t("Home.Banner.trades.trade2")}</MiniText>
                            <BiggerText>up to 90%</BiggerText>
                        </Flex>
                    </BannerRatesItem>
                </BannerRatesItemWrap>
                <BannerRatesItem2>
                    <img src={Icon3}/>
                    <BannerRatesItem2Texts>
                        <MiniText margin='0 0 10px 0'>{t("Home.Banner.trades.trade3")}</MiniText>
                        <BiggerText color='#F6F6F6'>$625 347 594</BiggerText>
                    </BannerRatesItem2Texts>
                    <BannerRatesItem2Texts>
                        <MiniText margin='0 0 10px 0'>{t("Home.Banner.trades.trade4")}</MiniText>
                        <BiggerText color='#F6F6F6'>$625 347 594</BiggerText>
                    </BannerRatesItem2Texts>
                     
                </BannerRatesItem2>
            </BannerRates>
        </Container>
    )
}

export default Banner