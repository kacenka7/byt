import { useEffect } from 'react';
import './style.css';
import { useState } from 'react';

const dayRest = () => {
  const today = new Date();
  const moveDay = new Date("2025-12-01");
  const rest = Math.ceil((moveDay - today)/(1000*60*60*24));
  console.log(rest)
  return rest;
}

const countUp = () =>{
  
  const [count, setCount] = useState(0);
  const maxCount = dayRest();

  useEffect (()=>{
    
    const interval = setInterval(()=>{
      setCount(prevCount=>{
        if (prevCount<maxCount){
          return prevCount+1;
        }
        else {
          clearInterval(interval);
          return maxCount
        }
      });
    }, 7);
    return () => clearInterval(interval);
  }, [maxCount])
  return count;
}


export const HomePage = () => {
  return (
    <div className="container">
      <header>
        <div className="headerItem1">
          <div className='headerItem2'></div>
          <div className='headerItem3'> 
            <div className='headerItemBox'>
              <p className='headerRest'>{countUp()} <span className='headerDay'>dní</span></p>
              <p className='headerLine'>do stěhování</p>
            </div>
          </div>
        </div>
        <div className='headerInfo'>
          <h1>Nevíme co s prachama</h1>
        </div>
        
      </header>
      <main>
        <h2>V lukách</h2>
      </main>
      <footer>
        <p>Její jasnost Kateřina Lencová</p>
      </footer>
    </div>
  );
}
