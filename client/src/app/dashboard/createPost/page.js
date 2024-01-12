'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import styles from './page.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmarkSquare } from '@fortawesome/free-solid-svg-icons'


export default function NewPost(){
    return(
        <section className={styles.body}>
            <div className={styles.createPost}>
                
                <form id='create-product'>
                    <h2 className = {styles.intro}>Please fill out the following information to create a new post</h2>

                    <h3 className = {styles.sub} >Title</h3>
                    <textarea id="product-name" className={styles.input} name="product-name"> </textarea>

                    <h3 className = {styles.sub} >Sellers Description</h3>
                    <textarea id="product-description" className={styles.input} name="product-description"> </textarea>

                    <h3 className = {styles.sub} >Price</h3>
                    <textarea id="product-price" className={styles.input} name="product-price"> </textarea>

                    <h3 className = {styles.sub} >Select All Applicable Categories</h3>

                    <label for = "product-categories" name = "product-categories" >
                        <select id = "product-categories"  multiple>
                            <Category />
                        </select>
                    </label>


                    <h3 className = {styles.sub}  >Select up to 5 images of your product</h3>
                    <label for="product-image[]">
                        <input id="product-image[]" type="file" multiple></input>
                    </label>
                        
                    <div className={styles.submit}>
                        <input type="submit" className={styles.button2}></input>
                    </div>
                </form>


            </div>
        </section>
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

  
  
