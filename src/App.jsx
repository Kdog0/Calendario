import { useState, useEffect, useContext } from 'react'
import { CalendarioContext } from './calendario/CalendarioContext';
import './App.css'

function App() {
  const{relogio, time, setTime} = useContext(CalendarioContext)  

  useEffect(() => {
    const muda = setInterval(() => {
      const interval = relogio();
      setTime(interval);
    }, 1000);

    return () => clearInterval(muda);

  }, []);

  return (
    <div className='modal'>
      <h1>{time?.day}</h1>
      <span>{time?.hour}:</span>
      <span>{time?.minute}:</span>
      <span>{time?.seconds}</span>
      <div className='ponteiro'>
        <svg width="15em" height="15em" viewBox="-100 -100 200 200">
          <circle  className="minute_marker" r="90" pathLength="60" />
          <circle className="hour_marker" r="90" pathLength="60" />
          <g id="hour_hand" transform={`rotate(${(360 / 12) * time?.hour})`}>
            <line className="hand" x1="0" y1="0" x2="0" y2="-50" />
            <line className="hand hand--thick" x1="0" y1="-12" x2="0" y2="-50" />
          </g>
          <g id="minute_hand" transform={`rotate(${(360/60)*time?.minute})`}>
            <line className="hand" x1="0" y1="0" x2="0" y2="-80" />
            <line className="hand hand--thick" x1="0" y1="-12" x2="0" y2="-80" />
          </g>
          <g id="second_hand" transform={`rotate(${(360/60)*time?.seconds})`}>
            <line className="hand hand--second" x1="0" y1="12" x2="0" y2="-80" />
          </g>
        </svg>
      </div>
    </div>
  )
}

export default App
