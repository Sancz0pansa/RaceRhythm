
import React from 'react';
import './sass/Menu.scss';
import { motion as m, AnimatePresence } from "framer-motion";
import { MenuItem } from '../MenuItem/MenuItem.tsx';

const options = [
  {
    title: "Czas odcinka",
    describe: "application-with-cool-features",
    id: "to-do-app",
  },
  {
    title: "Tempo biegu",
    id: "product-catalog",
    describe: "application with cool features",
  },
  {
    title: "Długość Kroku",
    id: "lawyers-ebsite",
    describe: "application with cool features",
  },
  {
    title: "Odległości",
    id: "website-and-gallery",
    describe: "application with cool features",
  },
  {
    title: "Optymalnego Tempa Treningu",
    id: "museum-website",
    describe: "application with cool features",
  },
];



export const Menu: React.FC = () => {
  const layoutVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };
    return (
      <div className='menu'>
        <ul className='menu__list'>
              {options.map((feature) => (
                <li className="menu__list--item" key={feature.id}>
                  <MenuItem id={feature.id}>
                    {feature.title}
                    
                  </MenuItem>
                </li>
              ))}
            </ul>
      {/* <AnimatePresence exitBeforeEnter={false} initial={false}>
        {options.map((option) => (
          <m.div
            key={option.id}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={layoutVariants}
            transition={{ duration: 0.75 }}
            className="menu__item fadeIn"
          >
            {option.title}
          </m.div>
        ))}
      </AnimatePresence> */}
    </div>
      

      // <ul className='menu'>
      //   {options.map((option) => (<li key={option.id} className='menu__item fadeIn'>{option.title}</li>))}
        
      // </ul>
)};