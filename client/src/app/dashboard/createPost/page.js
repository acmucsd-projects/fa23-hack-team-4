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
<<<<<<< HEAD
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
=======
                <Link href='/dashboard/account'>
                    <FontAwesomeIcon icon={faXmarkSquare} style={{height: '2.5vw', width: '2.5vw'}}/>
                </Link>
                <h1 className={styles.title}>New Listing Information:</h1>
                <form id='create-product' style={{display: 'flex'}}>
                    <div className={styles.formHalf}>
                        <label for='product-name'>
                            Title
                        </label>
                        <input type='text' id='product-name' name='product-name' placeholder='What are you selling?' autoComplete='off' required/>
                        <br />

                        <label for='product-description'>
                            Description
                        </label>
                        <textarea id='product-description' name='product-description' placeholder='Describe your item here' />
                        <br />

                        <label for='product-price'>
                            Price
                        </label>
                        <input type='text' id='product-price' name='product-price' placeholder='"Free" or a number' autoComplete='off' required/>
                    </div>
                    <div className={styles.formHalf}>
                        <label for="product-categories" name="product-categories">
                            Select All Applicable Categories <br />
                            <span style={{fontSize: '1.2vw'}}>(Hold Ctrl/Command to select multiple)</span>
                        </label>
                        <select id="product-categories" size={8} multiple>
                            <Category />
                        </select>
                        <br />

                        <label for='product-image[]'>
                            Upload up to 5 images <br />
                            <span style={{fontSize: '1.2vw'}}>(Hold Ctrl/Command in file finder to select multiple)</span>
                        </label>
                        <input type='file' id='product-image[]' multiple></input>
                        <br />

                        <input type="submit" />
>>>>>>> 4ac5fb5f69dae0651ec7aa342c23846a13ae3dab
                    </div>
                </form>
            </div>
        </section>
    )
}

<<<<<<< HEAD


  function Category() {
    const categories = [ 'Clothing', 'T-Shirts', 'Hoodies & Sweatshirts', 'Tops', 'Pants & Shorts', 'Hats', 'Home', 'Furniture', 'Room Decor', 'Kitchenware' , 'Entertainment', 'Books', 'Sporting Goods', 'Games', 'Other' , 'School Supplies', 'Writing Utensils', 'Notebooks', 'Textbooks', 'Lab Supplies' , 'Miscellaneous', 'Drinkware', 'Backpacks & Totes', 'Other' ];
=======
function Category() {

    const categories = 
        ['Clothing', 'T-Shirts', 'Hoodies & Sweatshirts', 'Tops', 
        'Pants & Shorts', 'Hats', 'Home', 'Furniture', 'Room Decor', 
        'Kitchenware' , 'Entertainment', 'Books', 'Sporting Goods', 
        'Games', 'Other' , 'School Supplies', 'Writing Utensils', 
        'Notebooks', 'Textbooks', 'Lab Supplies' , 'Miscellaneous', 
        'Drinkware', 'Backpacks & Totes', 'Other' ];

>>>>>>> 4ac5fb5f69dae0651ec7aa342c23846a13ae3dab
    return (
      <>
        {categories.map(function(cat) {
            return (
<<<<<<< HEAD
                <>
                    <option value = {cat}> &nbsp;{cat}&nbsp;
                    </option>

                </>
=======
                <option value={cat}> 
                    &nbsp;{cat}&nbsp;
                </option>
>>>>>>> 4ac5fb5f69dae0651ec7aa342c23846a13ae3dab
            )
        })}
      </>
    )
<<<<<<< HEAD
}

  
  
=======
}
>>>>>>> 4ac5fb5f69dae0651ec7aa342c23846a13ae3dab
