import Image from 'next/image'
import styles from './layout.module.css'

export function Header() {
    return (
        <section className={styles.header}>
            Header
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
                height: '9vh'
                }}
                width={960}
                height={240}
                alt='Triton Marketplace Free and For Sale'
                priority
            />
        </section>
    )
}