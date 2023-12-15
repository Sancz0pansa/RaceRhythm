"use client"
import React, { useState } from 'react'
import './sass/SectionTime.scss';


export const SectionTime = ({lang}) => {
    const [minutes, setMinutes] = useState<string>('');
    const [seconds, setSeconds] = useState<string>('');
    const [distance, setDistance] = useState<string>('');


    const paceInSeconds = (+seconds || 0) + (+minutes || 0) * 60;

    const wholeRunningTimeSeconds = paceInSeconds * (+distance / 1000);
    const runningTimeHours = Math.floor(wholeRunningTimeSeconds / 3600);
    const runningTimeWithoutHours = wholeRunningTimeSeconds % 3600;
    const runningTimeMinutes = Math.floor(runningTimeWithoutHours / 60);
    const runningTimeSeconds = wholeRunningTimeSeconds % 60;


  return (
    <>
    <p>{lang === 'PL' ? 'Za pomocą kalkulatora Czasu Odcinka, można określić, ile czasu powinno zająć pokonanie konkretnej części trasy, pętli czy okrążenia, zakładając wcześniej ustalone tempo biegu.' : 'Using the Section Time calculator, you can determine how much time it should take to cover a specific part of the route, loop or lap, assuming a previously set running pace.'}</p>

     <label>{lang === 'PL' ? 'Planowane tempo biegu: ' : 'Planned running pace: '}<input
     value={minutes}
     onChange={(e) => setMinutes(e.target.value)}
     />min 
     <input
     value={seconds}
     onChange={(e) => setSeconds(e.target.value)}
     />{lang === 'PL' ? 'sek' : 'sec'} / km</label>
     <label>{lang === 'PL' ? 'Dystans odcinka [metry]: ' : 'Section distance [meters]: '}<input
     value={distance}
     onChange={(e) => setDistance(e.target.value)}
     /></label>
     <p className='result'>{lang === 'PL' ? 'Czas odcinka: ' : 'Section Time: '}{runningTimeHours.toFixed(0)}h {runningTimeMinutes.toFixed(0)}' {runningTimeSeconds.toFixed(0)}"</p>
     </>
  )
}