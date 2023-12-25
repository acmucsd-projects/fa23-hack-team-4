"use client"
import Image from 'next/image'
import styles from './page.module.css'
import { motion, AnimatePresence } from 'framer-motion'
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
      <motion.div 
        className={styles.body}
        initial={{opacity: 0, y: 75}}
        animate={{opacity: 1, y: 0}}
      >
        <Account />
      </motion.div>
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
      borderRadius: '120px 3px 3px 30px'
    }
  }

  const spring = {
    type: 'spring',
    stiffness: 500,
    damping: 75
  }

  function SignUpPrompt() {

    if(isLogin) {
      return (
        <motion.div 
          className={styles.condensedPrompt} 
          layout
          initial={{ 
            opacity: 0,
            x: 90
          }}
          animate={{ 
            opacity: 1,
            x: 0
          }}
          transition={{
            duration: 0.25,
            delay: 0.25
          }}
          exit={{ 
            transition: {
                duration: 0.25
            },
            opacity: 0,
            x: 180
          }}
        >
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
        </motion.div>
      )
    }

    return (
      <motion.div 
        className={styles.expandedPrompt} 
        layout
        initial={{ 
          opacity: 0,
          x: -50
        }}
        animate={{ 
          opacity: 1,
          x: 0
        }}
        transition={{
          duration: 0.25,
          delay: 0.25
        }}
        exit={{ 
          transition: {
              duration: 0
          },
          opacity: 0
        }}
      >
        <h2>Welcome!</h2>
        <h1>Sign up and head in:</h1>
        <h3>Join your peers with your @ucsd.edu account!</h3><br />
        <form>
          <label for='username'>Email (Must be a @ucsd.edu address):</label><br />
          <input type='text' id='username' name='username' placeholder='Username' /><br /><br />
          <motion.input 
            type='submit' 
            value='Submit' 
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          />
        </form>
      </motion.div>
    )
  }

  function LoginPrompt() {

    if(isLogin) {
      return (
        <motion.div 
          className={styles.expandedPrompt} 
          layout
          initial={{ 
            opacity: 0,
            x: 50
          }}
          animate={{ 
            opacity: 1,
            x: 0
          }}
          transition={{
            duration: 0.25,
            delay: 0.25
          }}
          exit={{ 
            transition: {
                duration: 0
            },
            opacity: 0
          }}
        >
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
        </motion.div>
      )
    }

    return (
      <motion.div 
          className={styles.condensedPrompt} 
          layout
          initial={{ 
            opacity: 0,
            x: -90
          }}
          animate={{ 
            opacity: 1,
            x: 0
          }}
          transition={{
            duration: 0.25,
            delay: 0.25
          }}
          exit={{ 
            transition: {
                duration: 0.25
            },
            opacity: 0,
            x: -180
          }}
        >
        <h1>Returning?</h1>
        <h2>Login with your username to call dibs on your favorite items!</h2>
        <form>
          <motion.input 
            type='button' 
            value='Login Here'
            onClick={toggleSwitch}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96}}
          />
        </form>
      </motion.div>
    )
  }

  return (
    <motion.div 
      className={styles.account} 
      islogin={isLogin.toString()}
      initial={'login'}
      animate={isLogin ? 'login' : 'signUp'}
      variants={accountVariant}
      transition={spring}
    >
      <motion.div 
        className={styles.signUp} 
        islogin={isLogin.toString()}
        variants={signUpVariant}
        layout 
        transition={spring}
      >
        <AnimatePresence>
          {isLogin && 
            <SignUpPrompt />
          }
        </AnimatePresence>
        <AnimatePresence>
          {!isLogin && 
            <SignUpPrompt />
          }
        </AnimatePresence>
      </motion.div>
      <motion.div 
        className={styles.login} 
        islogin={isLogin.toString()}
        layout 
        transition={spring}
      >
        <AnimatePresence>
          {isLogin && 
            <LoginPrompt />
          }
        </AnimatePresence>
        <AnimatePresence>
          {!isLogin && 
            <LoginPrompt />
          }
        </AnimatePresence>
      </motion.div>
    </motion.div>
  )
}
