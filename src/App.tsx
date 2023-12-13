import React, { useState } from 'react';

import './App.scss';
import { SelectMenu } from './components/SelectMenu/SelectMenu.tsx';
import { Calculator } from './components/Calculator/Calculator.tsx';

type Lang = 'PL' | 'EN';

function App() {
  const [isInView, setIsInView] = useState<string>('');
  const [lang, setLang] = useState<Lang>('PL')
  return (
    <div className="App">
       <SelectMenu setInView={setIsInView} isInView={isInView}/>
       <div className='App__container'>
       <div className='App__container--logo'></div>
       <div className='App__container--border'><Calculator isInView={isInView}/></div>
       
       </div>
       
    </div>
  );
}

export default App;
