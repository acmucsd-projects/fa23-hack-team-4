"use client"
import React, { useState } from 'react'
import styles from './page.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'



export default function Post() {


    const pageView = 0; /* Viewing your own account */
    /* const pageView = 1; /* Viewing another account */

    if(pageView == 0) {
        return (
            <section className = {styles.body}>
            <ImageSlide />
            <div className = {styles.postInfo}>
                <a className={styles.button2}>Edit Post</a>
                <h1> Product Name</h1>
                    <h2>Seller's Description:</h2>
                        <h3>
                            Product Description. This is a example description of a example product. 
                            I want to see if the words are centered on the page correctly. Yup I think
                            it works fine so thats very good :) 
                        </h3>
                    <h2>Product Information: </h2>
                        <h3>
                            Price: $500 
                        </h3>
                        <h3>
                            Seller: Bob Tester
                        </h3>
                        <h3>
                            Contact #:  (123) - 456 - 7890
                        </h3>
                        <h3>
                            Email:  bobexample@ucsd.edu
                        </h3>
                        <h3>
                            Posted:  01/01/2024
                        </h3>
                    <h2>Categories: </h2>
                        <h3>
                                #school-supply #books 
                        </h3>
                    <CurrentOffers />
            </div>
        </section>
        )
    }

    if(pageView == 1) {
        return (
            <section className = {styles.body}>
            <ImageSlide />
            <div className = {styles.postInfo}>
                <h1> Product Name</h1>
                    <h2>Seller's Description:</h2>
                        <h3>
                            Product Description. This is a example description of a example product. 
                            I want to see if the words are centered on the page correctly. Yup I think
                            it works fine so thats very good :) 
                        </h3>
                    <h2>Product Information: </h2>
                        <h3>
                            Price: $500 
                        </h3>
                        <h3>
                            Seller: Bob Tester
                        </h3>
                        <h3>
                            Contact #:  (123) - 456 - 7890
                        </h3>
                        <h3>
                            Email:  bobexample@ucsd.edu
                        </h3>
                        <h3>
                            Posted:  01/01/2024
                        </h3>
                    <h2>Categories: </h2>
                        <h3>
                                #school-supply #books 
                        </h3>
                    <CurrentOffers />
            </div>
        </section>

        )
    }


}


function CurrentOffers(){

    var people = [ 
        {name: 'John Doe', price: 500}, 
        {name: 'Bob Tester', price: 300}, 
        {name: 'Alice Rabbit', price: 400}
    ];
    

    return (
        <div>
            <h2>Current Offers: </h2>
            <h3>
                <CurrentPeople people1 = {people} />
            </h3>
        </div>

    )
}



function CurrentPeople({people1}) {
    return (
      <>
        {people1.map(function(people) {
            return (
                <div>
                    <h3>{people.name} &nbsp;- &nbsp; ${people.price} {<AcceptOffer />}</h3>
                </div>
            )
        })}
      </>
    )
}


function AcceptOffer(){
    return(
        <button className={styles.button3}>Accept Offer</button>
    )

}


function ImageSlide(){

    var images = ["/images/geisel-free-background.jpeg", "/images/black.jpeg", "/images/TM-logo.png"];
    const [i, setI] = useState(0);
    
    const handlePrevious = () => {
        // Decrease the index, and loop to the last image if at the beginning
        setI((index) => (index === 0 ? images.length - 1 : index - 1));
    };
    
    const handleNext = () => {
        // Increase the index, and loop to the first image if at the end
        setI((index) => (index === images.length - 1 ? 0 : index + 1));
    };

    return (
        <div className={styles.imageSlide}> 
            <div className={styles.imageDisplay}>
                <img src={images[i]} className={styles.currImage} />     
            </div>
            <div className={styles.imageNav}>
                <button onClick={handlePrevious} className={[styles.nav, styles.left].join(' ')}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </button>
                <button onClick={handleNext} className={[styles.nav, styles.right].join(' ')}>
                    <FontAwesomeIcon icon={faArrowRight} />
                </button>
            </div>
            <div className={styles.imgIndicator}>
                <ImagePreview images={images} i={i} setI={setI} />
            </div>
        </div>
        
    )
}

function ImagePreview({images, i, setI}) {
    return (
      <>
        {images.map(function(image, index) {
            return (
                <div 
                    key={index} 
                    className={`${index === i ? styles.selected : styles.notSelected}`} 
                    onClick={() => setI(index)}
                >
                    <img src={image} className={styles.imagePreview} />
                </div>
            )
        })}
      </>
    )
}

