import './header.css'
import Image from './assets/comp.jpg'
import { useState } from 'react';



function Header() {
  const [state , makeState] = useState(true)
  const [state1 , makeState1] = useState(false)
  const [state2 , makeState2] = useState(false)
  const [state3 , makeState3] = useState(false)
  let theme1 = state ? " marked" : " "
  
  let themeing = ()=> state ?  makeState(false) : makeState(true)
  return (
    <>
      <header className="container">
        <div className='logo'>
          <img src={Image} alt="" />
        </div>
        <div className="list">
          <ul>
            
            <li className={'listing'+ theme1}onClick={themeing}>Home</li>
            <li className={'listing' } onClick={themeing} > Contact</li>
            <li className='listing'>About</li>
            <li className='listing'>Services</li>
          </ul>
        </div>
      </header>
    </>
  )
}

export default Header;
