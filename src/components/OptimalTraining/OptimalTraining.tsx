"use client"
import React, { useState } from 'react'


export const OptimalTraining = ({lang}) => {
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
    <p>{lang === 'PL' ? 'Na podstawie osiągniętego tempa w testach biegowych, takich jak test Coopera, dowiesz się, jak intensywnie powinieneś prowadzić swoje treningi.' : 'Based on your pace in running tests, such as the Cooper test, you will learn how intensely you should run your training.'}</p>

     <label>{lang === 'PL' ? 'Uzyskane tempo biegu: ' : 'Running pace achieved: '}<input
     value={minutes}
     onChange={(e) => setMinutes(e.target.value)}
     />min 
     <input
     value={seconds}
     onChange={(e) => setSeconds(e.target.value)}
     />{lang === 'PL' ? 'sek' : 'sec'} / km</label>
     <label>{lang === 'PL' ? 'Procentowy wskaźnik docelowego tempa: ' : 'Target Pace Percentage: '}<input
     value={percent}
     onChange={(e) => setPercent(e.target.value)}
     /> %</label>
     <p className='result'>{lang === 'PL' ? 'Sugerowane tempo: ' : `
Suggested pace: `}{lang === 'PL' ? 'od' : 'from'} {fromMinutes !== 0 ? fromMinutes : '--'}' {fromSeconds !== 0 ? fromSeconds : '--'}" / km | {lang === 'PL' ? 'do' : 'to'} {toMinutes !== 0 ? toMinutes : '--'}' {toSeconds !== 0 ? toSeconds : '--'}" / km</p>
     </>
  )
}