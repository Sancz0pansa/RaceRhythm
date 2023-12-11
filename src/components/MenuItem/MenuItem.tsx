"use client"
import React, { useRef, useEffect } from 'react'
import { useInView } from 'framer-motion'
import './sass/MenuItem.scss';


export const MenuItem = ({ children, id }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { margin: "-42% 0px -42% 0px" })
//     const setInViewFeature = useFeatureStore(state => state.setInViewFeature)
//     const inViewFeature = useFeatureStore((state) => state.inViewfeature)

//    useEffect(()=>{
//      if (isInView) setInViewFeature(id);
//      if (!isInView && inViewFeature === id) setInViewFeature(null)
//    }, [isInView, id, setInViewFeature])

  return (
    <p ref={ref} className={isInView ? "item selected" : "item not" }>
                {children}
    </p>
  )
}