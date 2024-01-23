import Link from 'next/link';
import './footerStyle.css'
 const FooterComponent = () => {
    return(
        <div className='footer'>
            <div className='footer__image'>
                <img src='X__logo.png' />
            </div>
            <div className='footer__details'>
                <div>
                    <p>ABOUT</p>
                    <p>About</p>
                    <p>Contact Us</p>
                    <p>FAQ</p>
                </div>
                <div>
                    <p>SUBSCRIPTIONS</p>
                    <p>Subscribe to us</p>
                    <p>Gift X Magazine</p>
                </div>
                <div>
                    <p>PROFESSIONALS</p>
                    <p>Post a Project</p>
                    <p>Promote Your Work</p>
                </div>
                <div className='footer__details-links'>
                    <Link href='/'>Follow us on Twitter</Link>
                    <Link href='/'>Follow us on Facebook</Link>
                    <Link href='/'>Follow us on Instagram</Link>
                    <Link href='/'>Follow us on Pinterest</Link>
                    <Link href='/'>Follow us on Flipboard</Link>    
                    <Link href='/' style={{color:'white'}}>rexexpert@gmail.com</Link>
                </div>
            </div>
            <div className='footer__copyright'>
                <p>&copy; 2023 X Ventures, Inc. All rights reserved.</p>
                <div className='footer__copyright-links'>
                    <Link href='/'>Privacy</Link>
                    <Link href='/'>Sitemap</Link>
                </div>
            </div>
        </div>
    )
}

export default FooterComponent