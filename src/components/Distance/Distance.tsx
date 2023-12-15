"use client"
import React, { useState } from 'react'


export const Distance = ({lang}) => {
    const [minutes, setMinutes] = useState<string>('');
    const [hours, setHours] = useState<string>('');
    const [seconds, setSeconds] = useState<string>('');
    const [secondsTempo, setSecondsTempo] = useState<string>('');
    const [minutesTempo, setMinutesTempo] = useState<string>('');


    const timeInHours = +seconds / 3600 + +minutes / 60 + +hours;

    const kilometers = +timeInHours * (60 / (+minutesTempo + +secondsTempo / 60));

    const totalMeters = kilometers * 1000;
    const kilometersPart = Math.floor(totalMeters / 1000); 
    const metersPart = Math.round(totalMeters % 1000); 
  return (
    <>
    <p>
    {lang === 'PL' ? 'Dzięki temu narzędziu dowiesz się, jak daleko będziesz w stanie przebiec, utrzymując stałe tempo przez określony czas.' : 'This tool will tell you how far you can run at a steady pace over time.'}</p>

     <label>{lang === 'PL' ? 'Planowane tempo biegu: ' : 'Planned running pace: '}<input
     value={minutesTempo}
     onChange={(e) => setMinutesTempo(e.target.value)}
     />min 
     <input
     value={secondsTempo}
     onChange={(e) => setSecondsTempo(e.target.value)}
     />{lang === 'PL' ? 'sek' : 'sec'} / km</label>
     <label>{lang === 'PL' ? 'Planowany czas biegu: ' : 'Planned running time:'}<input
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
     <p className='result'>{lang === 'PL' ? 'Dystans: ' : 'Distance: '}{isNaN(kilometersPart) || !isFinite(kilometersPart) ? '--' : kilometersPart.toFixed(0)} km   {isNaN(metersPart) || !isFinite(metersPart) ? '--' : metersPart.toFixed(0)} m</p>
     </>
  )
}