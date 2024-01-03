"use client"
import React, { useState } from 'react';
import styles from './page.module.css'

export default function Post() {
    return (
        <section className = {styles.main}>
            <ImageSlide />
            <div className = {styles.box}>
                <Title/>
                <h2 className = {styles.title1}> Seller's Description: </h2>
                <Description />
                <h2 className = {styles.title1}>Product Information: </h2>
                <Information />
            </div>
        </section>
    )
}


function Title(){
    return (
        <div>
            <h1 className = {styles.title}> Product Name</h1>
        </div>
    )
}

function Description(){
    return (
        <div >
            <h2 className={styles.description} >Product Description. This is a example description of a example product. I want to see if the words are centered on the page correctly. Yup I think it works fine so thats very good :) </h2>
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
            <h2 className = {styles.info} >
                Contact #:  (123) - 456 - 7890
            </h2>
            <h2 className = {styles.info} >
                Email:  bobexample@ucsd.edu
            </h2>
            <h2 className = {styles.info} >
                Posted:  01/01/2024
            </h2>
            <h2 className = {styles.info} >
                Categories: #school supply #recently posted #books 
            </h2>
        </div>
    )
}



function ImageSlide(){

    const images = ["/images/geisel-free-background.jpeg", "/images/black.jpeg", "/images/TM-logo.png"];
    const [x, setx] = useState(0);
    
    const handlePrevious = () => {
        // Decrease the index, and loop to the last image if at the beginning
        setx((index) => (index === 0 ? images.length - 1 : index - 1));
    };
    
    const handleNext = () => {
        // Increase the index, and loop to the first image if at the end
        setx((index) => (index === images.length - 1 ? 0 : index + 1));
    };



    return (
        <div > 
            <div className = {styles.boximg} >
                <img src = {images[x]} className = {styles.img}  />     
            </div>
            
            <div className = {styles.butset} >
                <button onClick = {handlePrevious} className= {styles.button} > &lt;  </button>
                <button onClick = {handleNext} className = {styles.button1}  >&gt;</button>
            </div>

            <div className = {styles.smallimg1} >
                <SmallImages images = {images} x = {x} setx = {setx}/>
            </div>

        </div>
        
    )
}

function SmallImages({images, x, setx}) {
    return (
      <>
      {images.map(function(imag, index) {
        return (
          <div key = {index} className={ ` ${index === x ? styles.selected : styles.smallimgnotselected} `}  onClick={() => setx(index)}>
            <img src = {imag} className = {styles.smallimg} />
          </div>
        )
      })}
      </>
  
    )
}

