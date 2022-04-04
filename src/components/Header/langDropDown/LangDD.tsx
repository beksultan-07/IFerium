import React from 'react'
import { LDDIcon, LDDWrap } from '../HeaderSC'
import {changeLang} from "../../../Translater/i18next";


type Props = {
  ddShow: boolean;
  activeLang: string;
  setActiveLang: any;
}

const LangDD:React.FC<Props> = (props) => {
  const LangIco1 = require("../../../assets/langs/En.svg")['default']
  const LangIco2 = require("../../../assets/langs/ru.png")
  const [langs, setLangs] = React.useState([
    {
      lang: 'en',
      img: LangIco1
    },
    {
      lang: 'ru',
      img: LangIco2
    }
  ])

  return (
    <LDDWrap ddShow={props.ddShow}>
      {langs.map((el, index) => {
        return <LDDIcon key={index} src={el.img} onClick={() => {
          props.setActiveLang(el.lang)
          changeLang(el.lang)
        }}/>
      }
      )}
    </LDDWrap>
  )
}

export default LangDD