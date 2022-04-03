import React from 'react'
import { BlockTitle, MiniText } from '../../../uikit/fonts'
import { Container, Flex } from '../../../uikit/uikit'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay} from "swiper";

import { RMItem, RMLine, CheckedIconS } from './RoadMapSC';
import 'swiper/css';

const RoadMap:React.FC = () => {
    const CheckedIcon = require('../../../assets/checked.svg')['default']

    return (
        <div style={{padding: '100px 0'}}>
            <Container>
                <Flex direction='column' align='center'>
                    <BlockTitle margin='50px 0' color='#FFF'>Project Roadmap</BlockTitle>
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
                                    <MiniText>TraceChain development</MiniText>
                                </Flex>
                                <Flex align='center' margin='5px 0'>
                                    <CheckedIconS src={CheckedIcon}/>
                                    <MiniText>Public release of the project</MiniText>
                                </Flex>
                                <Flex align='center' margin='5px 0'>
                                    <CheckedIconS src={CheckedIcon}/>
                                    <MiniText>Registration in Switzerland</MiniText>
                                </Flex>
                                <Flex align='center' margin='5px 0'>
                                    <CheckedIconS src={CheckedIcon}/>
                                    <MiniText>Mainnet activation</MiniText>
                                </Flex>
                                <Flex align='center' margin='5px 0'>
                                    <CheckedIconS src={CheckedIcon}/>
                                    <MiniText>Forging tests</MiniText>
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
                                    <MiniText>Forging in Mainnet</MiniText>
                                </Flex>
                                <Flex align='center' margin='5px 0'>
                                    <CheckedIconS src={CheckedIcon}/>
                                    <MiniText>Peer node</MiniText>
                                </Flex>
                                <Flex align='center' margin='5px 0'>
                                    <CheckedIconS src={CheckedIcon}/>
                                    <MiniText>Infrastructure Torrent node</MiniText>
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
                                    <MiniText>Service Torrent node</MiniText>
                                </Flex>
                                <Flex align='center' margin='5px 0'>
                                    <CheckedIconS src={CheckedIcon}/>
                                    <MiniText>Verification node</MiniText>
                                </Flex>
                                <Flex align='center' margin='5px 0'>
                                    <CheckedIconS src={CheckedIcon}/>
                                    <MiniText>Update to browser</MiniText>
                                </Flex>
                            </Flex>
                        </RMItem>
                    </SwiperSlide>
            </Swiper>
        </div>
  )
}

export default RoadMap