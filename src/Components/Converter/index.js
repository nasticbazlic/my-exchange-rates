import { useEffect, useState } from 'react';
import Axios from 'axios';
import Dropdown from 'react-dropdown';
import { HiSwitchHorizontal } from 'react-icons/hi';
import 'react-dropdown/style.css';

import './Converter.scss';

const Converter = () => {
  const [info, setInfo] = useState([]);
  const [input, setInput] = useState(0);
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState("uah");
  const [options, setOptions] = useState([]);
  const [output, setOutput] = useState(0);


  useEffect(() => {
    Axios.get(
    `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}.json`)
   .then((res) => {
      setInfo(res.data[from]);
    })
  }, [from]);
  useEffect(() => {
    setOptions(Object.keys(info));
    convert();
  }, [info])

  function convert() {
    let rate = info[to];
    setOutput(input * rate);
  }

  function flip() {
    let temp = from;
    setFrom(to);
    setTo(temp);
  }

  return (
    <div className="converter container">
      <div className="converter__title">
        Currency Converter
      </div>
      <div className='converter__content'>
        <div>
          <h3>Amount</h3>
          <input type="text" 
            placeholder="Enter the amount" 
            onChange={(e) => setInput(e.target.value)} />
        </div>
        <div className='converter__content_cur'>
          <div>
            <h3>From</h3>
            <Dropdown options={options} 
                      onChange={(e) => { setFrom(e.value) }}
            value={from} placeholder="From" />
          </div>
          <div>
            <HiSwitchHorizontal size="40px" 
                          onClick={() => { flip()}}/>
          </div>
          <div>
            <h3>To</h3>
            <Dropdown options={options} 
                      onChange={(e) => {setTo(e.value)}} 
            value={to} placeholder="To" />
          </div>
        </div>
        <div className="converter__result">
          <button onClick={()=>{convert()}}>Convert</button>
          <h2>Converted Amount:</h2>
          <p>{input+" "+from+" = "+output.toFixed(2) + " " + to}</p>
        </div>
      </div>
    </div>
  )
}

export default Converter;

