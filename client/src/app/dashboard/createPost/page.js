'use client'
import styles from './page.module.css'
import React, { useState } from 'react'
import PostPreview from '../components/postPreview/postPreview.js'


export default function NewPost(){
    return(
        <div className = {styles.main}>
            <div>
                <a href = '/dashboard/account' className = {styles.button}>X</a>
            </div>
            <div className = {styles.popup1}>
                <div className = {styles.popup}>
                    <form>
                        <h1 className = {styles.title1}>Please fill out the following information to create a new post</h1>
                        <h1 className = {styles.title}>Title</h1>
                        <textarea id = "title" className = {styles.input} name="Title"> </textarea>
                        <h1 className = {styles.title} >Sellers Description</h1>
                        <textarea id = "price" className = {styles.input} name="Seller's Description"> </textarea>
                        <h1 className = {styles.title} >Price</h1>
                        <textarea id = "seller's description" className = {styles.input} name="Price"> </textarea>
                        <h1 className = {styles.title} >Select up to 5 images of your product</h1>
                        <label for = "images" >
                            <input id = "images" type = "file" ></input>
                        </label>
                        <div className = {styles.submit}>
                            <input type = "submit" className = {styles.button2} ></input>
                        </div>
                    </form>
                </div>
             </div>
        </div>

    )
}