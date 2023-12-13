"use client"
import React, { useState } from 'react'
// import './sass/SectionTime.scss';


export const Distance = () => {
    const [minutes, setMinutes] = useState<string>('');
    const [hours, setHours] = useState<string>('');
    const [seconds, setSeconds] = useState<string>('');
    const [secondsTempo, setSecondsTempo] = useState<string>('');
    const [minutesTempo, setMinutesTempo] = useState<string>('');


    const timeInHours = +seconds / 3600 + +minutes / 60 + +hours;

    const kilometers = +timeInHours * (60 / (+minutesTempo + +secondsTempo / 60));

    const totalMeters = kilometers * 1000;
    const kilometersPart = Math.floor(totalMeters / 1000); // Cała liczba kilometrów
const metersPart = Math.round(totalMeters % 1000); // Reszta w metrach
  return (
    <>
    <p>
    Dzięki temu narzędziu dowiesz się, jak daleko będziesz w stanie przebiec, utrzymując stałe tempo przez określony czas.</p>

     <label>Planowane tempo biegu: <input
     value={minutesTempo}
     onChange={(e) => setMinutesTempo(e.target.value)}
     />min 
     <input
     value={secondsTempo}
     onChange={(e) => setSecondsTempo(e.target.value)}
     />sek / km</label>
     <label>Planowany czas biegu: <input
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
     <p className='result'>Dystans: {isNaN(kilometersPart) || !isFinite(kilometersPart) ? '--' : kilometersPart.toFixed(0)} km   {isNaN(metersPart) || !isFinite(metersPart) ? '--' : metersPart.toFixed(0)} m</p>
     </>
  )
}