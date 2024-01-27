import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { SectionTime } from '../SectionTime/SectionTime.tsx';
import { Pace } from '../Pace/Pace.tsx';
import { StepLength } from '../StepLength/StepLength.tsx';
import { Distance } from '../Distance/Distance.tsx';
import './sass/Calculator.scss';
import { OptimalTraining } from '../OptimalTraining/OptimalTraining.tsx';
import { Lang } from '../../types/Lang.ts';

type Props = {
  isInView: string;
  lang: Lang;
}

export const Calculator: React.FC<Props> = ({ isInView, lang }) => {
  const getComponent = () => {
    switch (isInView) {
      case 'czas-odcinka':
        return <SectionTime lang={lang} />;
      case 'tempo-biegu':
        return <Pace  lang={lang}/>;
      case 'dlugosc-kroku':
        return <StepLength  lang={lang}/>;
      case 'odleglosci':
        return <Distance  lang={lang}/>;
      case 'OTT':
        return <OptimalTraining  lang={lang}/>;
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
            transition={{ duration: 0.3 }}
          >
            {getComponent()}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};


