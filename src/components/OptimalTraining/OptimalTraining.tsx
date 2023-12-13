"use client"
import React, { useState } from 'react'
import { useInView } from 'framer-motion'
// import './sass/SectionTime.scss';


export const OptimalTraining = () => {
    const [minutes, setMinutes] = useState<string>('');
    const [seconds, setSeconds] = useState<string>('');
    const [percent, setPercent] = useState<string>('');
   
    const timeInSeconds = +minutes * 60 + +seconds;
    const toTimeInSeconds = (+minutes * 60 + +seconds) * 1.05;

    const fromMinutes = Math.floor((+timeInSeconds * (+percent / 100)) / 60)
    const fromSeconds = Math.round(((+timeInSeconds * (+percent / 100)) / 60 - fromMinutes) * 60);

    const toMinutes = Math.floor((+toTimeInSeconds * (+percent / 100)) / 60)
    const toSeconds = Math.round(((+toTimeInSeconds * (+percent / 100)) / 60 - toMinutes) * 60);
  return (
    <>
    <p>Na podstawie osiągniętego tempa w testach biegowych, takich jak test Coopera, dowiesz się, jak intensywnie powinieneś prowadzić swoje treningi.</p>

     <label>Uzyskane tempo biegu: <input
     value={minutes}
     onChange={(e) => setMinutes(e.target.value)}
     />min 
     <input
     value={seconds}
     onChange={(e) => setSeconds(e.target.value)}
     />sek / km</label>
     <label>Procentowy wskaźnik docelowego tempa: <input
     value={percent}
     onChange={(e) => setPercent(e.target.value)}
     /> %</label>
     <p className='result'>Sugerowane tempo: od {fromMinutes !== 0 ? fromMinutes : '--'}' {fromSeconds !== 0 ? fromSeconds : '--'}" / km | do {toMinutes !== 0 ? toMinutes : '--'}' {toSeconds !== 0 ? toSeconds : '--'}" / km"</p>
     </>
  )
}