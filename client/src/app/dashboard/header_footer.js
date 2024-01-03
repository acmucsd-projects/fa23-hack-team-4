import Image from 'next/image'
import styles from './layout.module.css'
import SignOutButton from '../authentication/SignOutButton.js'

export function Header() {
    const logo = '/images/TM-logo.png';
    const pfp = '/images/TM-logo.png';
    return (
        <section className={styles.header}>
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

            <input type="text" placeholder="Search..."></input>
            
            <div className={styles.account}>
                <Image 
                    src={pfp}
                    style={{
                    width: '9vh',
                    height: '9vh'
                    }}
                    width={960}
                    height={240}
                    alt='Account Profile Picture'
                />
                <SignOutButton />
            </div>
        </section>
    )
}

export function Footer() {

    const logo = '/images/TM-logo.png';

    return (
        <section className={styles.footer}>
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
        </section>
    )
}