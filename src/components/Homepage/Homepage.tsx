import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';

import '../../App.scss';
import { SelectMenu } from '../SelectMenu/SelectMenu.tsx';
import { Calculator } from '../Calculator/Calculator.tsx';
import { LangButton } from '../LangButton/LangButton.tsx';
import { Lang } from '../../types/Lang.ts';
import { Login } from '../Login/Login.tsx';
import { useNavigate } from 'react-router-dom';

type Props = {
    setLang: Dispatch<SetStateAction<Lang>>;
    lang: Lang;
}

export const Homepage: React.FC<Props> = ({setLang, lang}) => {
  const [isInView, setIsInView] = useState<string>('');

  const [loginVisible, setLoginVisible] = useState<boolean>(false)
  const [loggedin, setLoggedin] = useState<boolean>(false);
  const [username, setUsername] = useState<string>('');
  const navigate = useNavigate();
  useEffect(()=> {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    if (isLoggedIn !== 'false' && isLoggedIn !== null) {
        setUsername(isLoggedIn);
        setLoggedin(true);
    }
  }, [])

  console.log(true)
  
  return (
    <div className="App">
      <div className={`login ${loggedin && 'loggedin'}`}>{loggedin ? <div>{lang === 'PL' ? 'Cześć': 'Hello'}, <span>{username}</span> ! <button onClick={()=> {setLoggedin(false); sessionStorage.setItem('isLoggedIn', 'false');}} className='login__button'>{lang === 'PL' ? 'Wyloguj się' : "Logout"}</button><button onClick={()=> navigate('/results')} className='login__button'>{lang === 'PL' ? 'Wyniki' : "Results"}</button></div>
      : <button onClick={()=> setLoginVisible(!loginVisible)} className='login__button'>{lang === 'PL' ? 'Zaloguj się' : "Login"}</button>}<Login setUsername={setUsername} setLoginVisible={setLoginVisible} setLoggedin={setLoggedin} lang={lang} loginVisible={loginVisible}/></div>
      <div className='control'> <LangButton setLang={setLang} lang={lang}/></div>
      
       <SelectMenu lang={lang} setInView={setIsInView}/>
       <div className='App__container'>
       <div className='App__container--logo'></div>
       <div className='App__container--border'><Calculator lang={lang} isInView={isInView}/></div>
       
       </div>
       
    </div>
  );
}