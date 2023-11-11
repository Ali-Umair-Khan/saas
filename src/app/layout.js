import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import './globals.css'
import { Inter } from 'next/font/google'
import ResponsiveMenu from './components/navbar/resMenu2.jsx'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SAAS',
  description: 'Saas based manager template',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ResponsiveMenu/>
        {children}
      </body>
    </html>
  )   
}
