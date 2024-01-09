import React, { Dispatch, SetStateAction, useState } from 'react';

import '../../App.scss';
import './sass/Results.scss'
import { Lang } from '../../types/Lang.ts';
import { useNavigate, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { LangButton } from '../LangButton/LangButton.tsx';

type Props = {
    setLang: Dispatch<SetStateAction<Lang>>;
    lang: Lang;
}


export const Results: React.FC<Props> = ({setLang, lang}) => {

  


  return (
    <div className="App">
      <div className='App__back'><Link to='/RaceRhythm'><FontAwesomeIcon icon={faArrowLeftLong} /></Link></div>
      <div className='control'> <LangButton setLang={setLang} lang={lang}/></div>
       
       <div className='App__container'>
       <div className='App__container--logo'></div>
       
       
       </div>
       
    </div>
  );
}