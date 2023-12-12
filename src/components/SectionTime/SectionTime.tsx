"use client"
import React, { useState } from 'react'
import { useInView } from 'framer-motion'
import './sass/SectionTime.scss';


export const SectionTime = () => {
    const [minutes, setMinutes] = useState<string>('');
    const [seconds, setSeconds] = useState<string>('');
    const [distance, setDistance] = useState<string>('');
    let runningTimeHours = 0;
    let runningTimeMinutes = 0;
    let runningTimeSeconds = 0;

    if (minutes && seconds && distance) {
      const paceInSeconds = +seconds + +minutes * 60;

    const wholeRunningTimeSeconds = paceInSeconds * (+distance / 1000);
    runningTimeHours = Math.floor(wholeRunningTimeSeconds / 3600);
    const runningTimeWithoutHours = wholeRunningTimeSeconds % 3600;
    runningTimeMinutes = Math.floor(runningTimeWithoutHours / 60);
    runningTimeSeconds = wholeRunningTimeSeconds % 60;
    }

  return (
    <>
    <p>Za pomocą kalkulatora Czasu Odcinka, można określić, ile czasu powinno zająć pokonanie konkretnej części trasy, pętli czy okrążenia, zakładając wcześniej ustalone tempo biegu.</p>

     <label>Planowane tempo biegu: <input
     value={minutes}
     onChange={(e) => setMinutes(e.target.value)}
     />min 
     <input
     value={seconds}
     onChange={(e) => setSeconds(e.target.value)}
     />sek / km</label>
     <label>Dystans odcinka [metry]: <input
     value={distance}
     onChange={(e) => setDistance(e.target.value)}
     /></label>
     <p className='result'>Czas odcinka: {runningTimeHours.toFixed(0)}h {runningTimeMinutes.toFixed(0)}' {runningTimeSeconds.toFixed(0)}"</p>
     </>
  )
}