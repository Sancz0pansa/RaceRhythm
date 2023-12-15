"use client"
import React, { useState } from 'react'


export const StepLength = ({lang}) => {
    const [meters, setMeters] = useState<string>('');
    const [steps, setSteps] = useState<string>('');
   
   const step = +meters / +steps * 100

  return (
    <>
    <p >{lang === 'PL' ? `Dzięki temu kalkulatorowi możesz określić Długość Kroku, mając informację o liczbie kroków wykonanych na zmierzonej trasie. To narzędzie umożliwia monitorowanie postępów w zakresie techniki biegowej, a także dostosowywanie jej do optymalnej długości kroku. Ważne jest, aby podać łączną ilość wszystkich kroków (suma kroków prawej i lewej nogi), unikając pomyłek z "parokrokami", które często są uwzględniane przy obliczaniu kadencji.` : `Thanks to this calculator, you can determine your Step Length by having information about the number of steps taken on the measured route. This tool allows you to monitor your progress in running technique and adjust it to your optimal stride length. It is important to provide the total number of steps (the sum of the steps of the right and left legs), avoiding confusion with "pair steps", which are often included in the calculation of cadence.`}</p>

     <label>{lang === 'PL' ? 'Ilość wykonanych kroków: ' : 'Number of steps taken: '}<input
     value={steps}
     onChange={(e) => setSteps(e.target.value)}
     />
    </label>
     <label>{lang === 'PL' ? 'Dystans odcinka [metry]: ' : 'Section distance [meters]: '}<input
     value={meters}
     onChange={(e) => setMeters(e.target.value)}
     /></label>
     <p className='result'>{lang === 'PL' ? 'Długość kroku: ' : 'Step Length: '}{isNaN(step) || !isFinite(step) ? '--' : step.toFixed(0)} cm</p>
     </>
  )
}