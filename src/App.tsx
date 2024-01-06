import React, { useState } from 'react';

import './App.scss';
import { SelectMenu } from './components/SelectMenu/SelectMenu.tsx';
import { Calculator } from './components/Calculator/Calculator.tsx';
import { LangButton } from './components/LangButton/LangButton.tsx';
import { Lang } from './types/Lang.ts';
import { Login } from './components/Login/Login.tsx';



function App() {
  const [isInView, setIsInView] = useState<string>('');
  const [lang, setLang] = useState<Lang>('PL')
  const [loginVisible, setLoginVisible] = useState<boolean>(false)
  const [loggedin, setLoggedin] = useState<boolean>(false);
  const [username, setUsername] = useState<string>('');

  
  return (
    <div className="App">
      <div className='login'>{loggedin ? <div>{lang === 'PL' ? 'Cześć': 'Hello'}, <span>{username}</span> ! <button onClick={()=> setLoggedin(false)} className='login__button'>{lang === 'PL' ? 'Wyloguj się' : "Logout"}</button></div>: <button onClick={()=> setLoginVisible(!loginVisible)} className='login__button'>{lang === 'PL' ? 'Zaloguj się' : "Login"}</button>}<Login setUsername={setUsername} setLoginVisible={setLoginVisible} setLoggedin={setLoggedin} lang={lang} loginVisible={loginVisible}/></div>
      <div className='control'> <LangButton setLang={setLang} lang={lang}/></div>
      
       <SelectMenu lang={lang} setInView={setIsInView}/>
       <div className='App__container'>
       <div className='App__container--logo'></div>
       <div className='App__container--border'><Calculator lang={lang} isInView={isInView}/></div>
       
       </div>
       
    </div>
  );
}

export default App;
