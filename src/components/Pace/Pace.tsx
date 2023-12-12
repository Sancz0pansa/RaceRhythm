"use client"
import React, { useState } from 'react'
import { useInView } from 'framer-motion'
// import './sass/SectionTime.scss';


export const Pace = () => {
    const [hours, setHours] = useState<string>('');
    const [minutes, setMinutes] = useState<string>('');
    const [seconds, setSeconds] = useState<string>('');
    const [kilometers, setKilometers] = useState<string>('');
    const [meters, setMeters] = useState<string>('');



        const wholeDistance = +kilometers || 0 + (+meters || 0) / 1000;
        const wholeTimeMinutes = (+seconds || 0) / 60 + (+minutes || 0)  + (+hours || 0) * 60;
        const paceMin = Math.floor(wholeTimeMinutes / wholeDistance)
        const paceSec = (wholeTimeMinutes / wholeDistance - paceMin) * 60;
        const speed = wholeDistance / (wholeTimeMinutes / 60);


    
  return (
    <>
    <p>Z pomocą kalkulatora Tempa Biegu możesz ustalić,
         jakie jest niezbędne tempo Twojego biegu do osiągnięcia zaplanowanego rezultatu na określonym dystansie.</p>

     <label>Dystans: <input
     value={kilometers}
     onChange={(e) => setKilometers(e.target.value)}
     />km 
     <input
     value={meters}
     onChange={(e) => setMeters(e.target.value)}
     />m</label>
     <label>Planowany wynik: <input
     value={hours}
     onChange={(e) => setHours(e.target.value)}
     /> h 
     <input
     value={minutes}
     onChange={(e) => setMinutes(e.target.value)}
     /> min 
     <input
     value={seconds}
     onChange={(e) => setSeconds(e.target.value)}
     /> sec
     </label>
     <p className='result'>Tempo: {isNaN(paceMin) ? '--' : paceMin.toFixed(0)}' {isNaN(paceSec) ? '--' : paceSec.toFixed(0)}" / km | Prędkość: {isNaN(speed) || !isFinite(speed) ? '--' : speed.toFixed(2)} km/h</p>
     </>
  )
}