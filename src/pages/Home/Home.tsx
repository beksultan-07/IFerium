import React from 'react'
import styled from 'styled-components'
import Banner from '../../components/Home/Banner/Banner'
import Benefits from '../../components/Home/Benefits/Benefits'
import IFeruemDesc from '../../components/Home/IFeruemDesc/IFeruemDesc'
import NewsBlock from '../../components/Home/NewsBlock/NewsBlock'
import RoadMap from '../../components/Home/RoadMap/RoadMap'
import WalletConnect from '../../components/Home/WalletConnect/WalletConnect'


const Bg = require("../../assets/home/bg.jpg")

const HomeStyle = styled.div`
    background: url(${Bg}) 0 0 / cover;
    padding-top: 100px;
`


const Home:React.FC = () => {
    return (
        <HomeStyle>
            <Banner/>
            <Benefits/>
            <WalletConnect/>
            {/* <NewsBlock/> */}
            <IFeruemDesc/>
            <RoadMap/>
        </HomeStyle>
    )
}

export default Home