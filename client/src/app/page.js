import Image from 'next/image'
import styles from './page.module.css'
import Logo from './triton-marketplace.png'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.logo}>
         <img src={Logo} />
      </div>
    </main>
  )
}
