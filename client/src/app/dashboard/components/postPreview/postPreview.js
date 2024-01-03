import styles from './postPreview.module.css'

export default function PostTemplate() {
    return (
        <div className={styles.postPreview}>
            <div className={styles.name}>
                <h2>Product Name</h2>
            </div>
            <ImgPreview />
            <div >
                <h2 className = {styles.info} >
                    Price: $500 
                </h2>
                <h2 className = {styles.info} >
                    Seller: Bob Tester
                </h2>
            </div>
        </div>
        
    )
}

function ImgPreview() {

    const image = "/images/black.jpeg";

    return (
        <div >
            <img src = {image} className = {styles.img}  />
        </div>
        
    )
}