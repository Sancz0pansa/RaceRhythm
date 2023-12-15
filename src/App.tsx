import React, { useState } from 'react';

import './App.scss';
import { SelectMenu } from './components/SelectMenu/SelectMenu.tsx';
import { Calculator } from './components/Calculator/Calculator.tsx';
import { LangButton } from './components/LangButton/LangButton.tsx';
import { Lang } from './types/Lang.ts';



function App() {
  const [isInView, setIsInView] = useState<string>('');
  const [lang, setLang] = useState<Lang>('PL')

  
  return (
    <div className="App">
      <div className='lang'><LangButton setLang={setLang} lang={lang}/></div>
      
       <SelectMenu lang={lang} setInView={setIsInView}/>
       <div className='App__container'>
       <div className='App__container--logo'></div>
       <div className='App__container--border'><Calculator lang={lang} isInView={isInView}/></div>
       
       </div>
       
    </div>
  );
}

export default App;
