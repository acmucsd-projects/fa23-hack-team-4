'use client'
import styles from './page.module.css'
import React, { useState } from 'react'
import PostPreview from '../components/postPreview/postPreview.js'
import NewPost from '../createPost/page.js'

export default function Account() {

    var pageView = 1; /* Another User Viewing */
    /* const pgaeView = 1; /* Viewing your own page */

    if(pageView == 0) {
        return (
            <section>
                Account page
            </section>
        )
    }

    if(pageView == 1) {
        return (
            <section className = {styles.main}>
                <div className = {styles.top}>
                    <PersonInfo />
                    <CreatePost />
                    <DeletePost />
                </div>
                <hr></hr>
                <CurrentPosts />
                <hr></hr>
                <ArchivedPosts />
            </section>
        )
    }

}

function PersonInfo(){
    return (
        <div>
            <img src = "/images/black.jpeg" className = {styles.img}></img>
            <h1 className = {styles.title} >FirstName LastName </h1>
            <h1 className = {styles.title} >PID: A123456</h1>
            <h1 className = {styles.title} >Email: username@ucsd.edu</h1>
        </div>
    )
}

function CreatePost(){

    return(
        <div className = {styles.button1}>
            <a href = '/dashboard/createPost' className = {styles.button} >Create Post!</a>
        </div>
    )
}


function DeletePost(){
    return(
        <div className = {styles.button1}>
            <button className = {styles.button}>Delete Post</button>
        </div>
    )
}



function CurrentPosts(){
    return (
        <div>
            <div>
                <h1 className = {styles.title1}>Live Posts</h1>
            </div>
            <div className={styles.postPreviews}>
                <PostPreview />
                <PostPreview />
                <PostPreview />
                <PostPreview />
                <PostPreview />
                <PostPreview />
                <PostPreview />
                <PostPreview />
            </div>
        </div>

    )
}

function ArchivedPosts(){
    
    return (
        <div>
            <div>
                <h1 className = {styles.title1}>Archived Posts</h1>
            </div>
            <div className={styles.postPreviews}>
                <PostPreview />
                <PostPreview />
                <PostPreview />
                <PostPreview />
                <PostPreview />
                <PostPreview />
                <PostPreview />
                <PostPreview />
            </div>
        </div>

    )
}



