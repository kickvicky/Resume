import React from 'react'
import './Socials.css'
import linkedIn from './images/linkedin.png'
import github from './images/github.png'
import mail from './images/mail.png'
import insta from './images/insta.png'
import quora from './images/quora.png'

function Socials() {

    return (
        <div className='socials'>
            <div className='spacer stacked'>
                <div className='icons'>
                    <a href='https://www.linkedin.com/in/vignesh-a-318757199/'><img src={linkedIn} alt='LinkedIn' /></a>
                    <a href='https://github.com/kickvicky'><img src={github} alt='Github' /></a>
                    <a href='https://www.instagram.com/kickvickyy/'><img src={insta} alt='Instagram' /></a>
                    <a href='https://www.quora.com/profile/Vignesh-767'><img src={quora} alt='Quora' /></a>
                    <a href='mailto:vigneshsweg123@gmail.com'><img src={mail} alt='Mail' /></a>
                </div>
            </div>
        </div>
    )
}

export default Socials
