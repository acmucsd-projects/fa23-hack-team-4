import Image from 'next/image';
import styles from './postPreview.module.css'

export default function PostTemplate({ size }) {

    const black = '/images/black.jpeg'

    return (
        <div className={styles.postPreview}>
            <Image src={black} width={100} height={100} style={{height: size, width: size}}/>
            <div className={styles.postInfo}>
                <h2 className={styles.name}>
                    Product Name
                </h2>
                <h2 className = {styles.price} >
                    Price: $500 
                </h2>
                <h2 className = {styles.seller} >
                    Seller: Bob Tester
                </h2>
            </div>
        </div>
        
    )
}