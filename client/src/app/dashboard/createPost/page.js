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

                <form id='create-product' action={"http://localhost:5000/products/"} method="post" encType="multipart/form-data" target="/dashboard">
                    <h2 className = {styles.intro}>Please fill out the following information to create a new post</h2>

                    <label htmlFor ="product-name" className = {styles.sub} >Title</label>
                    <input type = "text" id="product-name" className={styles.input3} name="product-name" maxLength="70"></input>

                    <label htmlFor = "product-description" className = {styles.sub} >Sellers Description</label>
                    <textarea id="product-description" className={styles.input3} name="product-description" maxLength="1000"> </textarea>

                    <label htmlFor = "product-price" className = {styles.sub} >Price</label>
                    <input type="number" id="product-price" name="product-price" min="0" step=".01" className = {styles.input2} />

                    <label htmlFor="product-is_available" className = {styles.sub}>Available </label>
                    <select id="product-is_available" name="product-is_available">
                        <option value={true}>True</option>
                        <option value={false}>False</option>
                    </select>

                    <label htmlFor="product-is_on_campus" className = {styles.sub}>On campus availability: </label>
                    <select id="product-is_on_campus" name="product-is_on_campus">
                        <option value={true}>True</option>
                        <option value={false}>False</option>
                    </select>

                    <label for = "product-categories[]" name = "product-categories[]" className = {styles.sub} >Select All Applicable Categories
                        <Category></Category>
                    </label>
                    
                    <label htmlFor="product-image[]" className = {styles.sub}>Select up to 5 images of your product 
                        <input id="product-image[]" type="file" multiple accept='.jpeg, .png, .jpg' ></input>
                    </label>
                        
                    <div className={styles.submit}>
                        <input type="submit" className={styles.button2}></input>
                    </div>

                </form>


            </div>
        </section>
    )
}



/*
<form id='update-product' action={"http://localhost:5000/products/" + PRODUCT_ID} method="post" encType="multipart/form-data" target="dummyframe">
<label htmlFor="product-name">Name: </label>
<input type="text" id="product-name" name="product-name" maxLength="70"/>

<label htmlFor="product-description">Description:</label>
<textarea id="product-description" name="product-description" maxLength="1000"></textarea>

<label htmlFor="product-price">Price: </label>
<input type="number" id="product-price" name="product-price" min="0" step=".01"/>

<label htmlFor="product-image[]">Image(s): </label>
<input type="file" id="product-image[]" name="product-image[]" multiple accept='.jpeg, .png, .jpg'/>

<label htmlFor="product-is_available">Available: </label>
<select id="product-is_available" name="product-is_available">
    <option value={true}>True</option>
    <option value={false}>False</option>
</select>

<label htmlFor="product-is_on_campus">On campus availability: </label>
<select id="product-is_on_campus" name="product-is_on_campus">
    <option value={true}>True</option>
    <option value={false}>False</option>
</select>

<label htmlFor="product-categories" name="product-categories">Categories:</label>
<Category />

<button type='submit'>Update Product</button>
<iframe name="dummyframe" id="dummyframe" style={{display: "none"}}></iframe>
</form>

*/

/*
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

  
  */

function Category() {
    const categories = [ 'Clothing', 'T-Shirts', 'Hoodies & Sweatshirts', 'Tops', 'Pants & Shorts', 'Hats', 'Home', 'Furniture', 'Room Decor', 'Kitchenware' , 'Entertainment', 'Books', 'Sporting Goods', 'Games', 'Other' , 'School Supplies', 'Writing Utensils', 'Notebooks', 'Textbooks', 'Lab Supplies' , 'Miscellaneous', 'Drinkware', 'Backpacks & Totes', 'Other' ];
    return (
        <select id="product-categories" name="product-categories" multiple>
            {categories.map(function(cat) {
                return (
                    <option value={cat}> &nbsp;{cat}&nbsp;</option>

                )
            })}
        </select>
    )
}
