'use client'
import styles from './page.module.css'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmarkSquare } from '@fortawesome/free-solid-svg-icons'


export default function NewPost(){
    return(
        <section className={styles.body}>
            <a href='/dashboard/account'>
                <FontAwesomeIcon icon={faXmarkSquare} style={{height: '2.5vw', width: '2.5vw'}}/>
            </a>
            <div className={styles.createPost}>
                <h1 className={styles.title1}>Please fill out the following information to create a new post</h1>
                <form>
                    <label for='title'>Title</label><br />
                    <input type='text' id='title' name='title' placeholder='What are you selling?' autoComplete='off' required/><br />
                    <br />
                    <label for='desc'>Description</label><br />
                    <input type='text' id='desc' name='desc' placeholder='Describe your item here' autoComplete='off' required/><br />
                    <br />
                    <label for='price'>Price</label><br />
                    <input type='text' id='price' name='price' placeholder='"Free" or a number' autoComplete='off' required/><br />
                    <br />
                    <label for='images'>Select up to 5 images of your product</label><br />
                    <input id="images" type="file"></input><br />
                    <br />
                    <div className={styles.submit}>
                        <input type="submit" className={styles.button2}></input>
                    </div>
                </form>
            </div>
        </section>
    )
}