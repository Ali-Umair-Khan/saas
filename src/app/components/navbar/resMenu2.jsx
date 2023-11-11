import Link from 'next/link';
import './style4.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWindowMinimize,
  faBars,
  faUser
} from "@fortawesome/free-solid-svg-icons";

const ResponsiveMenu = () => {
    return(
        <nav>
            <ul className='navbar'>
                <li className='navbar__logo'><Link href='/'><img src='X__logoA.png' alt="" /></Link></li>
                <input type='checkbox' id='check' className='navbar__checkbox'/>
                <span className='navbar__menu'>
                    <li><Link href='/'>Home</Link></li>
                    <li><Link href='/'>Docs</Link></li>
                    <li><Link href='/'>Pricing</Link></li>
                    <li><Link href='/'>Contact <FontAwesomeIcon icon={faUser} style={{ fontSize: '1.5rem', marginLeft:'0.5rem'}} /></Link></li>
                    <label for='check' className='navbar__close'><FontAwesomeIcon icon={faWindowMinimize} style={{ fontSize: '3rem', color:'white'}}/></label>
                </span>
                <label for='check' className='navbar__open'><FontAwesomeIcon icon={faBars} style={{ fontSize: '3rem' }}/></label>
            </ul>
        </nav>
    )
}


export default ResponsiveMenu