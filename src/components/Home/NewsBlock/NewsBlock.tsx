import React from 'react'
import { BlockTitle, PreTitle, Text, DateText } from '../../../uikit/fonts'
import { Container, Flex } from '../../../uikit/uikit'
import { NewsItem, NewsItemImg } from './NewsBlockSC'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay} from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';

const NewsBlock:React.FC = () => {
    const newsImg1 = require('../../../assets/news img/news1.jpg') 
    const newsImg2 = require('../../../assets/news img/news2.jpg') 
    const newsImg3 = require('../../../assets/news img/news3.jpg') 


    return (
        <>
            <Container>
                <Flex direction='column' align='center'>
                    <BlockTitle margin='50px 0'>IFEREUM News</BlockTitle>
                </Flex>
            </Container>
                    <Flex>
                        
                    </Flex>
           <Container>
                <Swiper
                        spaceBetween={20}
                        slidesPerView={3}
                        modules={[Pagination, Autoplay]}
                        loop
                        pagination={{ clickable: true }}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                            reverseDirection: false
                        }}
                        speed={500}
                        breakpoints= {{
                            320: {
                                slidesPerView: 1,
                            },
                            400: {
                                slidesPerView: 2,
                            },
                            720: {
                                slidesPerView: 3,
                            }
                          }}
                        >
                            <SwiperSlide>
                                <NewsItem>
                                    <NewsItemImg src={newsImg1}/>
                                    <PreTitle margin='20px 20px 16px 20px'>Why token bridges are important</PreTitle>
                                    <Text margin='0 20px'>One of the main problems of most blockchain networks is their limited ...</Text>
                                    <DateText margin='auto 20px 11px'>April 21 12:00 2022</DateText>
                                </NewsItem>
                            </SwiperSlide>
                            <SwiperSlide>
                                <NewsItem>
                                    <NewsItemImg src={newsImg2}/>
                                    <PreTitle margin='20px 20px 16px 20px'>It’s high time to vote!</PreTitle>
                                    <Text margin='0 20px'>Waiting for another update? It’s already here!</Text>
                                    <DateText margin='auto 20px 11px'>April 21 12:00 2022</DateText>
                                </NewsItem>
                            </SwiperSlide>
                            <SwiperSlide>
                                <NewsItem>
                                    <NewsItemImg src={newsImg3}/>
                                    <PreTitle margin='20px 20px 16px 20px'>IFEREUM will launch its open-code DEX</PreTitle>
                                    <Text margin='0 20px'>The #Metahash team (of course, with the active support of the community...</Text>
                                    <DateText margin='auto 20px 11px'>April 21 12:00 2022</DateText>
                                </NewsItem>
                            </SwiperSlide>
                    </Swiper>
           </Container>
        </>
    )
}

export default NewsBlock