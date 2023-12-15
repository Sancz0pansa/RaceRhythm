
import React from 'react';
import './sass/SelectMenu.scss';
import { MenuItem } from '../MenuItem/MenuItem.tsx';
import { Lang } from '../../types/Lang.ts';

const options = [
  {
    title: "Czas Odcinka",
    titleEN: "Section Time",
    id: "czas-odcinka",
  },
  {
    title: "Tempo Biegu",
    id: "tempo-biegu",
    titleEN: "Run Pace",
  },
  {
    title: "Długość Kroku",
    id: "dlugosc-kroku",
    titleEN: "Step Length",
  },
  {
    title: "Odległości",
    id: "odleglosci",
    titleEN: "Distance",
  },
  {
    title: "Optymalnego Tempa",
    id: "OTT",
    titleEN: "Optimal Pace",
  },
];

type Props = {
  setInView: (prop:string) => void;
  lang: Lang;
}

export const SelectMenu: React.FC<Props> = ({setInView, lang}) => {

    return (
      <div className='menu'>
        <ul className='menu__list'>
              {options.map((option) => (
                <li className="menu__list--item" key={option.id}>
                  <MenuItem id={option.id} setInView={setInView}>
                    {lang === 'PL' ? option.title : option.titleEN}
                    
                  </MenuItem>
                </li>
              ))}
            </ul>
    </div>
)};