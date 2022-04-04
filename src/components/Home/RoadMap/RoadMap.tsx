import React from 'react'
import { BlockTitle, MiniText } from '../../../uikit/fonts'
import { Container, Flex } from '../../../uikit/uikit'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay} from "swiper";

import { RMItem, RMLine, CheckedIconS } from './RoadMapSC';
import 'swiper/css';

import {useTranslation} from "react-i18next";


const RoadMap:React.FC = () => {
    const CheckedIcon = require('../../../assets/checked.svg')['default']

    const {t} = useTranslation()

    return (
        <div style={{padding: '100px 0'}} id='roadmap'>
            <Container>
                <Flex direction='column' align='center'>
                    <BlockTitle margin='50px 0' color='#FFF'>
                        {t("Home.RoadMap.title")}
                    </BlockTitle>
                </Flex>
            </Container>
            <Swiper
                spaceBetween={0}
                slidesPerView={3}
                loop
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                    reverseDirection: false
                }}
                speed={500}
                modules={[Autoplay ]}
                breakpoints= {{
                    320: {
                        slidesPerView: 1,
                    },
                    670: {
                        slidesPerView: 2,
                    },
                    940: {
                        slidesPerView: 3,
                    }
                  }}
                >
                    <SwiperSlide>
                        <RMItem>
                            <BlockTitle margin='0 0 60px'>2017-2018</BlockTitle>
                            <RMLine></RMLine>
                            <Flex direction='column'>
                                <Flex align='center'>
                                    <CheckedIconS src={CheckedIcon}/>
                                    <MiniText>{t("Home.RoadMap.Blocks.Block1.texts.text1")}</MiniText>
                                </Flex>
                                <Flex align='center' margin='5px 0'>
                                    <CheckedIconS src={CheckedIcon}/>
                                    <MiniText>{t("Home.RoadMap.Blocks.Block1.texts.text2")}</MiniText>
                                </Flex>
                                <Flex align='center' margin='5px 0'>
                                    <CheckedIconS src={CheckedIcon}/>
                                    <MiniText>{t("Home.RoadMap.Blocks.Block1.texts.text3")}</MiniText>
                                </Flex>
                                <Flex align='center' margin='5px 0'>
                                    <CheckedIconS src={CheckedIcon}/>
                                    <MiniText>{t("Home.RoadMap.Blocks.Block1.texts.text4")}</MiniText>
                                </Flex>
                                <Flex align='center' margin='5px 0'>
                                    <CheckedIconS src={CheckedIcon}/>
                                    <MiniText>{t("Home.RoadMap.Blocks.Block1.texts.text5")}</MiniText>
                                </Flex>
                            </Flex>
                        </RMItem>
                    </SwiperSlide>
                    <SwiperSlide>
                        <RMItem>
                            <BlockTitle margin='0 0 60px'>2019</BlockTitle>
                            <RMLine></RMLine>
                            <Flex direction='column'>
                                <Flex align='center' margin='5px 0'>
                                    <CheckedIconS src={CheckedIcon}/>
                                    <MiniText>{t("Home.RoadMap.Blocks.Block2.texts.text1")}</MiniText>
                                </Flex>
                                <Flex align='center' margin='5px 0'>
                                    <CheckedIconS src={CheckedIcon}/>
                                    <MiniText>{t("Home.RoadMap.Blocks.Block2.texts.text2")}</MiniText>
                                </Flex>
                                <Flex align='center' margin='5px 0'>
                                    <CheckedIconS src={CheckedIcon}/>
                                    <MiniText>{t("Home.RoadMap.Blocks.Block2.texts.text3")}</MiniText>
                                </Flex>
                            </Flex>
                        </RMItem>
                    </SwiperSlide>
                    <SwiperSlide>
                        <RMItem>
                            <BlockTitle margin='0 0 60px'>2020</BlockTitle>
                            <RMLine></RMLine>
                            <Flex direction='column'>
                                <Flex align='center' margin='5px 0'>
                                    <CheckedIconS src={CheckedIcon}/>
                                    <MiniText>{t("Home.RoadMap.Blocks.Block3.texts.text1")}</MiniText>
                                </Flex>
                                <Flex align='center' margin='5px 0'>
                                    <CheckedIconS src={CheckedIcon}/>
                                    <MiniText>{t("Home.RoadMap.Blocks.Block3.texts.text2")}</MiniText>
                                </Flex>
                                <Flex align='center' margin='5px 0'>
                                    <CheckedIconS src={CheckedIcon}/>
                                    <MiniText>{t("Home.RoadMap.Blocks.Block3.texts.text3")}</MiniText>
                                </Flex>
                            </Flex>
                        </RMItem>
                    </SwiperSlide>
            </Swiper>
        </div>
  )
}

export default RoadMap