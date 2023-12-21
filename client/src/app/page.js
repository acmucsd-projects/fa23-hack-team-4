import Image from 'next/image'
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
      <div className={styles.header}>
        <Title />
      </div>
      <div className={styles.body}>
        <Account />
      </div>
    </main>
  )
}


function Title() {

  const logo = '/images/TM-logo.png';

  return (
    <div className={styles.title}>
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
      <div className={styles.name}>
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
          <form>
            <label className={styles.label} for='username'>Username (before @ucsd.edu)</label><br />
            <input type='text' id='username' name='username' placeholder='Username' /><br /><br />
            <label className={styles.label} for='password'>Password</label><br />
            <input type='password' id='password' name='password' placeholder='Password' /><br /><br/>
            <input type='submit' value='Submit' />
          </form>
        </div>
      </div>
      <div className={styles.signUp}>
        <div className={styles.signUpPrompt}>
          <h1>New Here?</h1>
          <h2>Join to sell goods amongst UCSD students, faculty, and alumni!</h2>
          <form>
            <input type='button' value='Sign Up!' />
          </form>
        </div>
      </div>
    </div>
  )
}
