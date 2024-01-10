'use client'
import styles from './page.module.css'
import React, { useState } from 'react'
import PostPreview from '../components/postPreview/postPreview.js'


export default function NewPost(){
    return(
        <section className={styles.body}>
            <a href='/dashboard/account' className={styles.button}>X</a>
            <div className={styles.createPost}>
                <form>
                    <h2 className = {styles.intro}>Please fill out the following information to create a new post</h2>
                    <h3 className = {styles.sub} >Title</h3>
                    <textarea id="title" className={styles.input} name="Title"> </textarea>
                    <h3 className = {styles.sub} >Sellers Description</h3>
                    <textarea id="price" className={styles.input} name="Seller's Description"> </textarea>
                    <h3 className = {styles.sub} >Price</h3>
                    <textarea id="seller's description" className={styles.input} name="Price"> </textarea>
                    <h3 className = {styles.sub} >Select All Applicable Categories</h3>

                    <label for = "Categories">
                        <select id = "Categories" name = "Categories" multiple>
                            <Category />
                        </select>

                    </label>


                    <h3 className = {styles.sub}  >Select up to 5 images of your product</h3>
                    <div>
                        <label for="images">
                            <input id="images" type="file"></input>
                        </label>
                        <label for="images">
                            <input id="images" type="file"></input>
                        </label>
                        <label for="images">
                            <input id="images" type="file"></input>
                        </label>
                        <label for="images">
                            <input id="images" type="file"></input>
                        </label>
                        <label for="images">
                            <input id="images" type="file"></input>
                        </label>
                    </div>
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

  
  
