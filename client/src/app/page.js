"use client"
import Image from 'next/image'
import styles from './page.module.css'
import { motion } from 'framer-motion'
import { useState } from 'react'

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

  const [isLogin, setLogin] = useState(true);

  const toggleSwitch = () => {
    setLogin(!isLogin)
  }

  const accountVariant = {
    login: {
      borderRadius: '30px 120px'
    },
    signUp: {
      borderRadius: '120px 30px'
    }
  }

  const signUpVariant = {
    login: {
      borderRadius: '30px 3px 3px 120px'
    },
    signUp: {
      borderRadius: '3px 30px 120px 3px'
    }
  }

  const spring = {
    type: 'spring',
    stiffness: 500,
    damping: 75
  }

  function HighlightPrompt() {
    return (
      <div className={styles.highlightedPrompt}>
        <h1>New Here?</h1>
        <h2>Join to buy and sell goods amongst UCSD students, faculty, and alumni!</h2>
        <form>
          <motion.input 
            type='button' 
            value='Sign Up!'
            onClick={toggleSwitch}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96}}
          />
        </form>
      </div>
    )
  }

  function ExpandPrompt() {
    return (
      <div className={styles.expandedPrompt}>
        <h2>Welcome back!</h2>
        <h1>Login for the goods:</h1><br />
        <form>
          <label for='username'>Username (before @ucsd.edu)</label><br />
          <input type='text' id='username' name='username' placeholder='Username' /><br /><br />
          <label for='password'>Password</label><br />
          <input type='password' id='password' name='password' placeholder='Password' /><br /><br/>
          <motion.input 
            type='submit' 
            value='Submit' 
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          />
        </form>
      </div>
    )
  }

  return (
    <motion.div 
      className={styles.account} 
      islogin={isLogin.toString()}
      initial={'login'}
      animate={isLogin ? 'login' : 'signUp'}
      variants={accountVariant}
    >
      <motion.div 
        className={styles.highlighted} 
        variants={signUpVariant}
        layout 
        transition={spring}
      >
        <HighlightPrompt />
      </motion.div>
      <motion.div 
        className={styles.expanded} 
        layout 
        transition={spring}
      >
        <ExpandPrompt />
      </motion.div>
    </motion.div>
  )
}
