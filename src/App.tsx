import React, { useState } from 'react';

import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Homepage } from './components/Homepage/Homepage.tsx';
import { Results } from './components/Results/Results.tsx';
import { Lang } from './types/Lang.ts';



function App() {
  const [lang, setLang] = useState<Lang>('PL')
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/RaceRhythm" element={<Homepage setLang={setLang} lang={lang}/>}/>


        <Route path="/results" element={<Results setLang={setLang} lang={lang}/>}>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
