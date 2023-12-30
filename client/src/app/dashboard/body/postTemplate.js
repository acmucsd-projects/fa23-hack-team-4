"use client"
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.css'
import styles from './postTemplate.css'
import {useEffect} from 'react'
import React, { useState } from 'react';


export default function PostTemplate(){
    useEffect(() => {
        typeof document !== undefined 
        ? require('bootstrap/dist/js/bootstrap') 
        : null
      }, []);

    return (
        <main className={styles.main}>
            <div className = {styles.box}>
                <Title/>
                <div >
                    <ImageSlide />
                </div>
                <Description />
                <Information />
            </div>
        </main>
        
    )
}

function Title(){
    return (
        <div className={styles.title}>
            <h1>Product Name</h1>
        </div>
    )
}

function Description(){
    return (
        <div className={styles.title}>
            <h2>Product Description. This is a example description of a example product. I want to see if the words are centered on the page correctly. Yup I htink it works fine so thats very good :) </h2>
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
        </div>
    )
}



function ImageSlide(){

    const images = ["/images/geisel-free-background.jpeg", "/images/black.jpeg"];
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
        <div> 
            <div >
                <img src = {images[x]} className = {styles.img}  />
            </div>

            <div className = {styles.buttonSet}>
                <div class="btn-group" role="group" aria-label="Basic example" >
                    <button onClick = {handlePrevious} type="button" class="button arrow-button arrow-left style-light color-dark" >Prev</button>
                    <button onClick = {handleNext} type="button" class="button arrow-button arrow-right style-light color-dark"  >Next</button>
                </div>
            </div>


        </div>
        
    )
}






/*
function ImageSlide1(){
    return(
        <div id="imageSlide" class="carousel slide" data-ride="carousel">

            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="/images/geisel-free-background.jpeg" class="img-fluid" alt = "First image" width = {500} height = {600} />
                </div>
                <div class="carousel-item ">
                    <img src="/images/Black_color.jpeg" class="img-fluid" alt = "Second image"  width = {500} height = {500} />
                </div>
            </div>
            <a class="carousel-control-prev" href="#imageSlide" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#imageSlide" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    )
}


function ImageSlide(){
    return(
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="d-block w-100" src="/images/geisel-free-background.jpeg" alt="First slide"/>

                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="/images/TM-logo.png" alt="Second slide"/>
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="/images/geisel-free-background.jpeg" alt="Third slide"/>
                </div>
            </div>
        </div>
    )
 
} */









