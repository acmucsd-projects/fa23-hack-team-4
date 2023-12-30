import Image from 'next/image'

export default function Footer() {

    const logo = '/images/TM-logo.png';

    return (
        <section>
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
        </section>
    )
}