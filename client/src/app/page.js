import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  const logo = '/src/images/triton-marketplace.jpeg';

  return (
    <main className={styles.main}>
      <div>
         <Image src={logo} width={100} height={1000} alt='Triton Marketplace Free and For Sale'/>
      </div>
    </main>
  )
}
