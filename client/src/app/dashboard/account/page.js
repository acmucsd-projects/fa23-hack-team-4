'use client'
import React, { useState } from 'react'
import styles from './page.module.css'
import PostPreview from '../components/postPreview/postPreview.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const postSize = '19vw';

export default function Account() {

    const pageView = 1; /* Viewing your own account */
    /* const pageView = 1; /* Viewing another account */

    if(pageView == 0) {
        return (
            <section className = {styles.body}>
                <AccountInfo />
                <div className={styles.posts}>
                    <LivePosts />
                    <ArchivedPosts />
                </div>
            </section>
        )
    }

    if(pageView == 1) {
        return (
            <section className = {styles.body}>
                <AccountInfo1 />
                <div className={styles.posts}>
                    <LivePosts />
                </div>
            </section>
        )
    }


}


function AccountInfo1() {
    return (
        <div className={styles.accountInfo}>
            <FontAwesomeIcon icon={faUser} style={{fontSize: '12.5vw'}}/>
            <div className={styles.userDesc}>
                <h2 className = {styles.name} >John Doe </h2>
                <h2 className = {styles.username} >jdoe002</h2>
                <h3 className = {styles.email} >jdoe002@ucsd.edu</h3>
            </div>
        </div>
    )
}

function AccountInfo() {
    return (
        <div className={styles.accountInfo}>
            <FontAwesomeIcon icon={faUser} style={{fontSize: '12.5vw'}}/>
            <div className={styles.userDesc}>
                <h2 className = {styles.name} >John Doe </h2>
                <h2 className = {styles.username} >jdoe002</h2>
                <h3 className = {styles.email} >jdoe002@ucsd.edu</h3>
            </div>
            <a href='/dashboard/createPost'>Create Listing</a>
        </div>
    )
}

function LivePosts() {
    return (
        <div className={styles.postSection}>
            <h1>Live Posts</h1>
            <div className={styles.postList}>
                <PostPreview size={postSize}/>
                <PostPreview size={postSize}/>
                <PostPreview size={postSize}/>
                <PostPreview size={postSize}/>
                <PostPreview size={postSize}/>
            </div>
        </div>

    )
}

function ArchivedPosts() {
    return (
        <div className={styles.postSection}>
            <h1>Archived Posts</h1>
            <div className={styles.postList}>
                <PostPreview size={postSize}/>
                <PostPreview size={postSize}/>
                <PostPreview size={postSize}/>
                <PostPreview size={postSize}/>
                <PostPreview size={postSize}/>
            </div>
        </div>

    )
}