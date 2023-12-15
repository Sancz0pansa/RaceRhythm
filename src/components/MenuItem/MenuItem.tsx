"use client"
import React, { useRef, useEffect } from 'react'
import { useInView } from 'framer-motion'
import './sass/MenuItem.scss';


export const MenuItem = ({ children, id, setInView}) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

   useEffect(()=>{
     if (isInView) {
      setInView(id);}
     
   }, [isInView, id, setInView])

  return (
    <p ref={ref} className={isInView ? "item selected" : "item not" }>
                {children}
    </p>
  )
}