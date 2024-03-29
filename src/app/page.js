import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCircleStop
} from "@fortawesome/free-solid-svg-icons";
// import './globals.css';
import './globals.css'

// import Image from 'next/image'
// import styles from './page.module.css'
// import Hero from './components/hero/hero.jsx';
import Hero from './components/H/h.jsx';
import Companies from './components/Companies/companies.jsx';
import Video from './components/video/video.jsx';
import Appreciation from './components/appreciation/appreciation.jsx';
import Pricing from './components/pricing/pricing.jsx';
import Faq from './components/faq/faq.jsx';
import Footer from './components/footer/footer.jsx';


export default function Home() {
  return (
    <main>
      <Hero/>
      <Companies/>
      <Video/>
      <Appreciation/>
      <Pricing/>
      <Faq/>
      <Footer/>
    </main>
  )
}
