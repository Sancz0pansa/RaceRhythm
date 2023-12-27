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
  
  return (
    <div className="App">
      <div className='control'><button onClick={()=> setLoginVisible(!loginVisible)} className='control--login'>{lang === 'PL' ? 'Zaloguj się' : "Login"}</button><Login lang={lang} loginVisible={loginVisible}/> <LangButton setLang={setLang} lang={lang}/></div>
      
       <SelectMenu lang={lang} setInView={setIsInView}/>
       <div className='App__container'>
       <div className='App__container--logo'></div>
       <div className='App__container--border'><Calculator lang={lang} isInView={isInView}/></div>
       
       </div>
       
    </div>
  );
}

export default App;
