import Image from 'next/image';
import styles from './postPreview.module.css'

export default function PostTemplate({ size, name, price, seller }) {

    const black = '/images/black.jpeg'

    return (
        <div className={styles.postPreview} style={{width: 'calc(' + size + ' + 3vw)'}}>
            <Image src={black} width={100} height={100} style={{height: size, width: size}}/>
            <div className={styles.postInfo}>
                <h2 className={styles.name}>
                    {name}
                </h2>
                <h2 className = {styles.price} >
                    Price: ${price}
                </h2>
                <h2 className = {styles.seller} >
                    Seller: {seller}
                </h2>
            </div>
        </div>
        
    )
}