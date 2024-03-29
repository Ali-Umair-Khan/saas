import React from 'react'
import Card from './card';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAddressBook,
    faCalendarCheck,
    faMap,
    faWindowMinimize,
    faBars,
    faUser
} from "@fortawesome/free-solid-svg-icons";

import './h.scss';

const Hero = () => {
  return (
    <div className='hero__section'>
                    <h1>A powerful solution to grow your startup. Fast!</h1>
                    <h3>Organize, collaborate, and track progress seamlessly with our
                    one-stop-shop startup growth tool.</h3>
                    <div className='hero__cards'>
                    {/* <FontAwesomeIcon icon={faAddressBook} />
                    <FontAwesomeIcon icon={faCalendarCheck} />
                    <FontAwesomeIcon icon={faMap} /> */}
                        <Card icon={faAddressBook} name='Cold Email' text='send cold emails, automate follow ups, and get real responses' icon_color='grey'/>
                        <Card icon={faCalendarCheck} name='Sales Assistant' text='Incorporate automation and testing into your work flow to reach your target audience' icon_color='grey'/>
                        <Card icon={faMap} name='Agency' text='Run campaigns for all your clients from one panel, perfect fpor agencies' icon_color='grey'/>
                    </div>         
    </div>
    )
}

export default Hero