"use client"
import { useState } from 'react'
import Image from 'next/image'
import styles from './header_footer.module.css'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import LogOutButton from '../authentication/LogOutButton'

export function Header() {

    const logo = '/images/TM-logo.png';

    const [isOpen, setOpen] = useState(false);

    const closeMenu = () => {
        setOpen(false);
    }

    const handleChildElementClick = (e) => {
        e.stopPropagation()
        setOpen(!isOpen)
    }

    const userVariant = {
        rest: {
            color: 'var(--yellow)'
        },
        hover: {
            color: 'var(--blue)',
            backgroundColor: 'var(--yellow)'
        }
    }

    const usernameVariant = {
        rest: {
            color: 'whitesmoke'
        },
        hover: {
            color: 'var(--navy)'
        }
    }

    const accountMenuVariant = {
        open: {
            clipPath: 'inset(0vh 0vw)',
        },
        closed: {
            clipPath: 'inset(0% 0% 100% 90%)',
        }
    }

    return (
        <header onClick={() => closeMenu()}>
            <div className={styles.title}>
                <Image 
                    src={logo}
                    style={{
                    width: '18vh',
                    height: '18vh'
                    }}
                    width={960}
                    height={240}
                    alt='Triton Marketplace Free and For Sale'
                    priority
                />
                <div className={styles.name}>
                    <h1><span style={{color: 'var(--yellow)'}}>Triton</span>&nbsp;
                    <span style={{color: 'var(--gold'}}>Marketplace</span></h1>
                    <h2>UCSD Free and For Sale</h2>
                </div>
            </div>
            
            <motion.div 
                className={styles.account}
                onClick={(e) => handleChildElementClick(e)}
                initial={'rest'}
                whileHover={'hover'}
                animate={'rest'}
                variants={userVariant}
            >
                <FontAwesomeIcon icon={faUser} style={{fontSize: '4.5vh'}}/>
                <motion.h2 variants={usernameVariant}>Username</motion.h2>
                <motion.div
                className={styles.accountMenu}
                initial={'closed'}
                animate={isOpen ? 'open' : 'closed'}
                variants={accountMenuVariant}
                >
                    <div className={styles.item}>View Account</div>
                    <LogOutButton />
                </motion.div>
            </motion.div>
        </header>
    )
}

export function Footer() {

    const logo = '/images/TM-logo.png';

    return (
        <footer>
            <Image 
                src={logo}
                style={{
                width: '9vh',
                height: '9vh',
                }}
                width={960}
                height={240}
                alt='Triton Marketplace Free and For Sale'
                priority
            />
        </footer>
    )
}