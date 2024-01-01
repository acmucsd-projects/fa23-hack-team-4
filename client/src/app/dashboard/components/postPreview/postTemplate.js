import styles from './postTemplate.module.css'

export default function PostTemplate(){

    return (
        <main className={styles.main}>
            <div className = {styles.box}>
                <Title1/>
                <div >
                    <MainImage />
                </div>
                <Information />
            </div>
        </main>
        
    )
}

function Title1(){
    return (
        <div className={styles.name}>
            <h2>Product Name</h2>
        </div>
    )
}

function Information(){
    return (
        <div >
            <h2 className = {styles.info} >
                Price: $500 
            </h2>
            <h2 className = {styles.info} >
                Seller: Bob Tester
            </h2>
        </div>
    )
}



function MainImage(){

    const images = ["/images/black.jpeg"];

    return (
        <div> 
            <div >
                <img src = {images[0]} className = {styles.img}  />
            </div>
        </div>
        
    )
}




