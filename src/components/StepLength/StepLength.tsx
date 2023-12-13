"use client"
import React, { useState } from 'react'
import { useInView } from 'framer-motion'
// import './sass/SectionTime.scss';


export const StepLength = () => {
    const [meters, setMeters] = useState<string>('');
    const [steps, setSteps] = useState<string>('');
   
   const step = +meters / +steps * 100

  return (
    <>
    <p>Dzięki temu kalkulatorowi możesz określić Długość Kroku, mając informację o liczbie kroków wykonanych na zmierzonej trasie. To narzędzie umożliwia monitorowanie postępów w zakresie techniki biegowej, a także dostosowywanie jej do optymalnej długości kroku. Ważne jest, aby podać łączną ilość wszystkich kroków (suma kroków prawej i lewej nogi), unikając pomyłek z "parokrokami", które często są uwzględniane przy obliczaniu kadencji.</p>

     <label>Ilość wykonanych kroków: <input
     value={steps}
     onChange={(e) => setSteps(e.target.value)}
     />
    </label>
     <label>Dystans odcinka [metry]: <input
     value={meters}
     onChange={(e) => setMeters(e.target.value)}
     /></label>
     <p className='result'>Długość kroku: {isNaN(step) || !isFinite(step) ? '--' : step.toFixed(0)} cm</p>
     </>
  )
}