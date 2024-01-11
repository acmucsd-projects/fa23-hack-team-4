'use client'
import React, { useEffect, useState } from 'react'
import styles from './page.module.css'
import PostPreview from '../components/postPreview/postPreview.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const postSize = '19vw';

const isUser = false;

export default function Account() {

    /* useEffect(() => {
        const fetchUser = async () => {
            const res = await fetch('https://localhost:5000/me', {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'accepts':'application/json'
                }
            });
            const userData = await res.json();
            
            if(res.ok) {
                console.log('ran')
            } else {
                console.log('fuck you')
            }
        }

        fetchUser();
    }, []) */

    return (
        <section className = {styles.body}>
            <AccountInfo />
            <div className={styles.posts}>
                <LivePosts />
                {isUser && <ArchivedPosts />}
            </div>
        </section>
    )
}

function AccountInfo() {

    console.log(isUser)

    return (
        <div className={styles.accountInfo}>
            <FontAwesomeIcon icon={faUser} style={{fontSize: '12.5vw'}}/>
            <div className={styles.userDesc}>
                <h2 className = {styles.name} >John Doe </h2>
                <h2 className = {styles.username} >jdoe002</h2>
                <h3 className = {styles.email} >jdoe002@ucsd.edu</h3>
            </div>
            <CreateListing />
        </div>
    )
}

function CreateListing() {

    if(isUser == true) {
        return (
            <a href='/dashboard/createPost'>Create Listing</a>
        )
    }
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