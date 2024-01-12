'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from './page.module.css'
import PostPreview from '../components/postPreview/postPreview.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const postSize = '19vw';

export default function Account() {
    
    const [isUser, setIsUser] = useState(null);
    useEffect(() => {
        const fetchUser = async () => {
            const res = await fetch('http://localhost:5000/me', {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'accepts':'application/json'
                }
            });
            const userData = await res.json();
            
            if(res.ok) {
                setIsUser(true);
            } 
        }

        fetchUser();
    }, []) 

    return (
        <section className = {styles.body}>
            <AccountInfo isUser/>
            <div className={styles.posts}>
                <LivePosts />
                {isUser && <ArchivedPosts />}
            </div>
        </section>
    )
}

function AccountInfo(isUser) {

    return (
        <div className={styles.accountInfo}>
            <FontAwesomeIcon icon={faUser} style={{fontSize: '12.5vw'}}/>
            <div className={styles.userDesc}>
                <h2 className = {styles.name} >John Doe </h2>
                <h2 className = {styles.username} >jdoe002</h2>
                <h3 className = {styles.email} >jdoe002@ucsd.edu</h3>
            </div>
            <CreateListing isUser/>
        </div>
    )
}

function CreateListing(isUser) {

    if(isUser) {
        return (
            <Link href='/dashboard/createPost'>Create Listing</Link>
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