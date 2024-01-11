"use client"
import React, { useEffect, useState } from 'react'
import styles from './page.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function Post() {

    const [isUser, setIsUser] = useState(false);

    return (
        <section className = {styles.body}>
            <ImageSlide />
            <div className = {styles.postInfo}>
                <div className={styles.title} style={{position: 'relative'}}>
                    <h1> Product Name</h1>
                    {isUser && <a className={styles.button}>Edit Listing</a>}
                </div>
                <div className={styles.postBody}>
                    <h3>
                        Product Description. This is a example description of a example product. 
                        I want to see if the words are centered on the page correctly. Yup I think
                        it works fine so thats very good :)
                    </h3>
                    <h2>Item Information:</h2>
                        <h3>
                            Price: $500 
                        </h3>
                        <h3>
                            Seller: Bob Tester
                        </h3>
                        <h3>
                            Email:  bobexample@ucsd.edu
                        </h3>
                        <h3>
                            Posted:  01/01/2024
                        </h3>
                    <h2>Categories:</h2>
                        <h3>
                            #school-supply #books 
                        </h3>
                    <Offers isUser={isUser} />
                </div>
            </div>
        </section>
    )
}

function ImageSlide(){

    const images = ["/images/geisel-free-background.jpeg", "/images/black.jpeg", "/images/TM-logo.png"];
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

function Offers(isUser){

    var offers = [ 
        {name: 'John Doe', price: 500}, 
        {name: 'Bob Tester', price: 300}, 
        {name: 'Alice Rabbit', price: 400}
    ];


    return (
        <div className={styles.offers}>
            <h2>Current Offers: </h2>
            {offers.map(function(offer) {
                return (
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <h3>
                            {offer.name} &nbsp; - &nbsp; ${offer.price} &nbsp;
                        </h3>
                        <OfferOption isUser={isUser} />
                    </div>
                )
            })}
        </div>

    )
}

function OfferOption(isUser) {

    if(isUser) {
        return <button className={styles.offerOption}>Accept Offer</button>
    }

    return <button className={stles.offerOption}>Make Offer</button>

}