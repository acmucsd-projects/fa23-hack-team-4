'use client'
import styles from './page.module.css'
import React, { useState } from 'react'
import PostPreview from '../components/postPreview/postPreview.js'


export default function NewPost(){

   var currentPostInfo = {name: "Product Name", description: "example description", price: 500, categories: ['Clothing', 'T-Shirts'], images: ["/images/geisel-free-background.jpeg", "/images/black.jpeg", "/images/TM-logo.png"]}

    return(
        <section className={styles.body}>
            <a href='/dashboard/post' className={styles.button}>X</a>
            <div className={styles.createPost}>
                <form id='update-product'>
                    <h2 className = {styles.intro}>Please edit your post as needed and submit changes at end</h2>

                    <h3 className = {styles.sub} >Title</h3>
                    <textarea id="product-name" className={styles.input} name="product-name">{currentPostInfo.name}</textarea>

                    <h3 className = {styles.sub} >Sellers Description</h3>
                    <textarea id="product-description" className={styles.input} name="product-description">{currentPostInfo.description}</textarea>

                    <h3 className = {styles.sub} >Price</h3>
                    <textarea id="product-price" className={styles.input} name="product-price">{currentPostInfo.price}</textarea>

                    <h3 className = {styles.sub} >Select All Applicable Categories</h3>

                    <label for = "prduct-categories" name = "product-categories" >
                        <select id = "product-categories"  multiple defaultValue={currentPostInfo.categories}>
                            <Category />
                        </select>
                    </label>

                    <h3 className = {styles.sub}  >Select up to 5 images of your product</h3>
                    <label for="images">
                        <input id="images" type="file" multiple></input>
                    </label>

                    <h3 className = {styles.sub}  >Current Images</h3>

                    <label for="images" className = {styles.img1}>
                        <CurrentImages images3 = {currentPostInfo.images} />
                    </label>

                    <div className={styles.submit}>
                        <input type="submit" className={styles.button2}></input>
                    </div>

                </form>
            </div>
        </section>
    )
}

function CurrentImages({images3}){
    return (
        <>
          {images3.map(function(img1, index) {
              return (
                  <>
                      <img id = {index} src = {img1} className = {styles.img} />
  
                  </>
              )
          })}
        </>
      )
}


  function Category() {
    const categories = [ 'Clothing', 'T-Shirts', 'Hoodies & Sweatshirts', 'Tops', 'Pants & Shorts', 'Hats', 'Home', 'Furniture', 'Room Decor', 'Kitchenware' , 'Entertainment', 'Books', 'Sporting Goods', 'Games', 'Other' , 'School Supplies', 'Writing Utensils', 'Notebooks', 'Textbooks', 'Lab Supplies' , 'Miscellaneous', 'Drinkware', 'Backpacks & Totes', 'Other' ];
    return (
      <>
        {categories.map(function(cat) {
            return (
                <>
                    <option value = {cat}> &nbsp;{cat}&nbsp;
                    </option>

                </>
            )
        })}
      </>
    )
}

  
  
