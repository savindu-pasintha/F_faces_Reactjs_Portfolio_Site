import React from 'react'
import './HeaderSection.css'
import logo from '../../assets/f-faces.png'
export default function HeaderSection({ button_name, handleHeaderButton }) {
    return (
        <div className=''>
            <div className='row  header'>
                <div className='col '>
                    <div className='logo'>
                        <img className="img" src={logo} alt="logo" />
                    </div>
                </div>
                <div className='col'>
                    <div className='d-flex justify-content-end'>
                        <button onClick={() => { handleHeaderButton(button_name); }} className={button_name == "Back" ? `back_btn` : `generate_btn`}>{button_name}</button>
                    </div>
                </div>
            </div>
            <div className='row linear '></div>
        </div>
    )
}
