import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { SectionTime } from '../SectionTime/SectionTime.tsx';
import { Pace } from '../Pace/Pace.tsx';
import { StepLength } from '../StepLength/StepLength.tsx';
import { Distance } from '../Distance/Distance.tsx';
import './sass/Calculator.scss';
import { OptimalTraining } from '../OptimalTraining/OptimalTraining.tsx';

export const Calculator = ({ isInView }) => {
  const getComponent = () => {
    switch (isInView) {
      case 'czas-odcinka':
        return <SectionTime />;
      case 'tempo-biegu':
        return <Pace />;
      case 'dlugosc-kroku':
        return <StepLength />;
      case 'odleglosci':
        return <Distance />;
      case 'OTT':
        return <OptimalTraining />;
      default:
        return null;
    }
  };

  return (
    <div className='calculator'>
      <AnimatePresence mode='wait'>
        {isInView && (
          <motion.div
          className='calculator'
            key={isInView}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {getComponent()}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};


