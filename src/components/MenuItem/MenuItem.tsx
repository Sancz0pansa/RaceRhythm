"use client"
import React, { useRef, useEffect } from 'react'
import { useInView } from 'framer-motion'
import './sass/MenuItem.scss';


export const MenuItem = ({ children, id, setInView, selectedView}) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { margin: "-42% 0px -42% 0px" });
//     const inViewFeature = useFeatureStore((state) => state.inViewfeature)

   useEffect(()=>{
     if (isInView) {
      
      console.log(selectedView)
      setInView(id);}
    //  if (!isInView && selectedView === id) setInView(null)
     
   }, [isInView, id, setInView])

  return (
    <p ref={ref} className={isInView ? "item selected" : "item not" }>
                {children}
    </p>
  )
}