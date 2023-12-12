"use client"
import React, { useRef, useEffect } from 'react'
import { useInView } from 'framer-motion'
import { SectionTime } from '../SectionTime/SectionTime.tsx';
import './sass/Calculator.scss';
import { Pace } from '../Pace/Pace.tsx';


export const Calculator = ({isInView}) => {
    switch (isInView) {
      case 'czas-odcinka':
        return (
          <div className='calculator'>
          <SectionTime />
          </div>
          
        )
        case 'tempo-biegu':
          return (
            <div className='calculator'>
            <Pace />
            </div>
            
          )
      default: 
      return (
        <div></div>
    
      )
    }
  
}