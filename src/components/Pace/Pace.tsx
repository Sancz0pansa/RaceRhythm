"use client"
import React, { useState } from 'react'


export const Pace = ({lang}) => {
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
    <p>{lang === 'PL' ? `Z pomocą kalkulatora Tempa Biegu możesz ustalić,
         jakie jest niezbędne tempo Twojego biegu do osiągnięcia zaplanowanego rezultatu na określonym dystansie.` : `With the help of the Running Pace calculator you can determine
         what is the necessary pace of your run to achieve the planned result over a specific distance.`}</p>

     <label>{lang === 'PL' ? 'Dystans: ' : 'Distance: '}<input
     value={kilometers}
     onChange={(e) => setKilometers(e.target.value)}
     />km 
     <input
     value={meters}
     onChange={(e) => setMeters(e.target.value)}
     />m</label>
     <label>{lang === 'PL' ? 'Planowany wynik: ' : 'Planned result: '}<input
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
     /> {lang === 'PL' ? 'sek' : 'sec'}
     </label>
     <p className='result'>{lang === 'PL' ? 'Tempo: ' : 'Pace: '}{isNaN(paceMin) ? '--' : paceMin.toFixed(0)}' {isNaN(paceSec) ? '--' : paceSec.toFixed(0)}" / km | {lang === 'PL' ? 'Prędkość: ' : 'Speed: '}{isNaN(speed) || !isFinite(speed) ? '--' : speed.toFixed(2)} km/h</p>
     </>
  )
}