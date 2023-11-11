import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCircleStop
} from "@fortawesome/free-solid-svg-icons";

import Image from 'next/image'
import styles from './page.module.css'
import Hero from './components/hero/hero.jsx'
export default function Home() {
  return (
    <main className={styles.container}>
      <Hero/>
    </main>
  )
}
