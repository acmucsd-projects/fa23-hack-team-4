import Image from 'next/image'
import { inter } from 'next/font/google'
import styles from './page.module.css'

export default function Home() {

  const backgroundImage = '/images/geisel-free-background.jpeg'

  return (
    <main className={styles.main}>
      <Image 
        className={styles.backgroundImage}
        src={backgroundImage}
        alt='Geisel Scenery'
        layout='fill'
        objectFit='cover'
        objectPosition='center'
      />
      <Header />
      <Account />
    </main>
  )
}

function Header() {

  const logo = '/images/TM-logo.png';

  return (
    <div className={styles.header}>
      <Image 
        src={logo}
        style={{
          width: '20vw',
          height: '20vw'
        }}
        width={960}
        height={240}
        alt='Triton Marketplace Free and For Sale'
        priority
      />
      <div className={styles.title}>
        <h1>Triton Marketplace</h1>
        <h2>UCSD Free and For Sale</h2>
      </div>
    </div>
  )
}

function Account() {
  return (
    <div className={styles.account}>
      <div className={styles.login}>
        <div className={styles.loginPrompt}>
          <h2>Welcome back!</h2>
          <h1>Login for the goods:</h1><br />
          <form className={styles.loginForm}>
            <label for='username'>Username (before @ucsd.edu)</label><br />
            <input type='text' id='username' name='username' placeholder='Username' /><br /><br />
            <label for='password'>Password</label><br />
            <input type='password' id='password' name='password' placeholder='Password' /><br /><br/>
            <input type='submit' value='Submit' />
          </form>
        </div>
      </div>
      <div className={styles.signUp}>

      </div>
    </div>
  )
}
