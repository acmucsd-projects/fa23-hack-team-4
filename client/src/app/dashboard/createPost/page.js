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
                    </div>
                </form>
            </div>
        </section>
    )
}

function Category() {

    const categories = 
        ['Clothing', 'T-Shirts', 'Hoodies & Sweatshirts', 'Tops', 
        'Pants & Shorts', 'Hats', 'Home', 'Furniture', 'Room Decor', 
        'Kitchenware' , 'Entertainment', 'Books', 'Sporting Goods', 
        'Games', 'Other' , 'School Supplies', 'Writing Utensils', 
        'Notebooks', 'Textbooks', 'Lab Supplies' , 'Miscellaneous', 
        'Drinkware', 'Backpacks & Totes', 'Other' ];

    return (
      <>
        {categories.map(function(cat) {
            return (
                <option value={cat}> 
                    &nbsp;{cat}&nbsp;
                </option>
            )
        })}
      </>
    )
}