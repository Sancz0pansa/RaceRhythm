import React, { useState } from 'react';

import './App.scss';
import { SelectMenu } from './components/SelectMenu/SelectMenu.tsx';
import { Calculator } from './components/Calculator/Calculator.tsx';



function App() {
  const [isInView, setIsInView] = useState<any>(null);
  return (
    <div className="App">
      {/* <OptionsMenu />
       */}
       <SelectMenu setInView={setIsInView} isInView={isInView}/>
       <div className='App__container'>
       <div className='App__container--logo'></div>
       <div className='App__container--border'><Calculator isInView={isInView}/></div>
       </div>
       
    </div>
  );
}

export default App;
