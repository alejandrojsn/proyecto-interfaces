import { useRef } from 'react'
import IDGovLogo from './assets/IDGov.svg'
import { Link, useNavigate } from 'react-router-dom'

export default function TwoFactorCode() {
  const goto = useNavigate();
  const refs = [useRef(), useRef(), useRef(), useRef(), useRef(), useRef()];
  const handleInput = (e) => {
    const index = parseInt(e.target.dataset.number);
    console.log(index);
    if (e.target.value.length > 0 && index < refs.length - 1) {
      refs[index + 1].current.focus();
    }

    if (refs.every(ref => ref.current.value.length > 0)) {
      goto('/');
    }
  }
  return (
    <>
      <div className='container'>
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div>
              <img src={IDGovLogo}  className="mt-2" alt="IDGov Logo" width="120px" height="80px"/>
            </div>
            <div className="vh-100 d-flex flex-column align-items-center">
              <div className="custom-box w-75 m-25">Código de verificación</div>
              <div className='d-flex align-items-center justify-content-center w-100'>
                <input type="text" className="twofa-code-item" data-number="0" ref={refs[0]} maxLength="1" autoFocus={true} onInput={handleInput}/>
                <input type="text" className="twofa-code-item" data-number="1" ref={refs[1]} maxLength="1" onInput={handleInput}/>
                <input type="text" className="twofa-code-item" data-number="2" ref={refs[2]} maxLength="1" onInput={handleInput}/>
                <div className="twofa-code-item dash d-flex flex-column justify-content-center"><div className="dash"></div></div>
                <input type="text" className="twofa-code-item" data-number="3" ref={refs[3]} maxLength="1" onInput={handleInput}/>
                <input type="text" className="twofa-code-item" data-number="4" ref={refs[4]} maxLength="1" onInput={handleInput}/>
                <input type="text" className="twofa-code-item" data-number="5" ref={refs[5]} maxLength="1" onInput={handleInput}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
