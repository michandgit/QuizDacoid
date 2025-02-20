import React, { useEffect, useState } from 'react'
import './Play.css'
import { useNavigate } from 'react-router-dom'

const Play = () => {
  const [userAttempts, setUserAttempts] = useState(0);
  const navigate = useNavigate();
  useEffect(()=>{
    if(localStorage.length > 0){
      const attempt = JSON.parse(localStorage.getItem("attempts"));
      setUserAttempts(attempt);
    }
  } , []);

  const handleClick = () => {
   
    const updatedAttempts = userAttempts + 1;
    setUserAttempts(updatedAttempts);

    localStorage.setItem("attempts", JSON.stringify(updatedAttempts));

    navigate("/mcq");
  }

  return (
  <>
    <div className="top">Attempts : {userAttempts}</div>
    <div className='letsplay'>
      <h2>Wohooo Let's Play !!</h2>
      <input type="text" placeholder='Enter Your name' />
      <button onClick={handleClick}>Play</button>
    </div>
  </>
  )
}

export default Play;
