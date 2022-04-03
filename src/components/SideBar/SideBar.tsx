import React from 'react'
import { SideBarWrap, SideBarImgLink, SideBarImg } from './SideBarSC'

const SideBar:React.FC = () => {
    const Icon1 = require('../../assets/sidebar/Frame.svg')['default']
    const Icon2 = require('../../assets/sidebar/Frame-1.svg')['default']
    const Icon3 = require('../../assets/sidebar/Frame-2.svg')['default']
    const Icon4 = require('../../assets/sidebar/Frame-3.svg')['default']
    const Icon5 = require('../../assets/sidebar/Frame-4.svg')['default']
    const Icon6 = require('../../assets/sidebar/Frame-5.svg')['default']
    const Icon7 = require('../../assets/sidebar/Frame-6.svg')['default']
    const Icon8 = require('../../assets/sidebar/Frame-7.svg')['default']
    const Icon9 = require('../../assets/sidebar/Frame-8.svg')['default']



  return (
    <SideBarWrap>
        <SideBarImgLink href='#' target='_blank'>
            <SideBarImg src={Icon1}/>
        </SideBarImgLink>
        <SideBarImgLink href='#' target='_blank'>
            <SideBarImg src={Icon2}/>
        </SideBarImgLink>
        <SideBarImgLink href='#' target='_blank'>
            <SideBarImg src={Icon3}/>
        </SideBarImgLink>
        <SideBarImgLink href='#' target='_blank'>
            <SideBarImg src={Icon4}/>
        </SideBarImgLink>
        <SideBarImgLink href='#' target='_blank'>
            <SideBarImg src={Icon5}/>
        </SideBarImgLink>
        <SideBarImgLink href='#' target='_blank'>
            <SideBarImg src={Icon6}/>
        </SideBarImgLink>
        <SideBarImgLink href='#' target='_blank'>
            <SideBarImg src={Icon7}/>
        </SideBarImgLink>
        <SideBarImgLink href='#' target='_blank'>
            <SideBarImg src={Icon8}/>
        </SideBarImgLink>
        <SideBarImgLink href='#' target='_blank'>
            <SideBarImg src={Icon9}/>
        </SideBarImgLink>
    </SideBarWrap>
  )
}

export default SideBar