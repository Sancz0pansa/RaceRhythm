"use client"
import React, { useRef, useEffect } from 'react'
import { useInView } from 'framer-motion'
import './sass/LangButton.scss';
import { Lang } from '../../types/Lang';

type Props = {
    setLang: (x: Lang) => void;
    lang: Lang;
}

export const LangButton: React.FC<Props> = ({setLang, lang}) => {
   

  return (
    <div className="switch">
	    <input id="language-toggle" onChange={()=> lang === 'PL' ? setLang('EN') : setLang('PL')} className="check-toggle check-toggle-round-flat" type="checkbox" checked={lang === 'EN'}/>
	    <label htmlFor="language-toggle"></label>
	    <span className="on">PL</span>
	    <span className="off">EN</span>
  	</div>
  )
}