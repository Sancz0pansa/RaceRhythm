
import React from 'react';
import './sass/SelectMenu.scss';
import { motion as m, AnimatePresence } from "framer-motion";
import { MenuItem } from '../MenuItem/MenuItem.tsx';

const options = [
  {
    title: "Czas Odcinka",
    describe: "application-with-cool-features",
    id: "czas-odcinka",
  },
  {
    title: "Tempo Biegu",
    id: "tempo-biegu",
    describe: "application with cool features",
  },
  {
    title: "Długość Kroku",
    id: "dlugosc-kroku",
    describe: "application with cool features",
  },
  {
    title: "Odległości",
    id: "odleglosci",
    describe: "application with cool features",
  },
  {
    title: "Optymalnego Tempa",
    id: "OTT",
    describe: "application with cool features",
  },
];

type Props = {
  setInView: (prop:string) => void;
  isInView: string;
}

export const SelectMenu: React.FC<Props> = ({setInView, isInView}) => {
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
                  <MenuItem id={feature.id} setInView={setInView} selectedView={isInView}>
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