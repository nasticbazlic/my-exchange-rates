import { useEffect, useState } from "react";

import './Retes.scss';

const Retes = () => {
  const [retes, setRetes] = useState([]);

  const fetchRates = async () => {
  const response = await fetch('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11');
  const data = await response.json();
  setRetes(data);
  };
  useEffect(() => {
    fetchRates()
  },[]);
  
  return (
    <ul className="rates">
      {retes?.map((rete, index) => {
        return (
          <li key={index} className="rates__item">
            {rete?.ccy}
            <div>
            {rete?.buy}/
            {rete?.sale}
            </div>
          </li>
        )
      }).filter((item, index) => index != 2).slice(0, 3)
    }
    </ul>
  )
}

export default Retes;
