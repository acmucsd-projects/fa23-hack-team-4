'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from './page.module.css'
import PostPreview from '../components/postPreview/postPreview.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const postSize = '19vw';

export default function Account() {
    
    const [products, setProducts] = useState(null);
    useEffect(() => {
        const fetchProducts = async () => {
            const res = await fetch('http://localhost:5000/products', {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'accepts':'application/json'
                }
            });
            const product = await res.json();
            
            if(res.ok) {
                setProducts(product);
            } 
        }

        fetchProducts();
    }, []) 

<<<<<<< HEAD
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
=======
    return (
        <section className = {styles.body}>
            <AccountInfo isUser/>
            <div className={styles.posts}>
                <LivePosts />
                {true && <ArchivedPosts />}
            </div>
        </section>
>>>>>>> 4ac5fb5f69dae0651ec7aa342c23846a13ae3dab
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
            <CreateListing />
        </div>
    )
}

function CreateListing() {

    return (
        <Link href='/dashboard/createPost'>Create Listing</Link>
    )
}

function LivePosts() {
    return (
        <div className={styles.postSection}>
            <h1>Live Posts</h1>
            <div className={styles.postList}>
                <PostPreview size={postSize} name='Example' price=' Free' seller='Myself'/>
                <PostPreview size={postSize} name='Example' price=' Free' seller='Myself'/>
                <PostPreview size={postSize} name='Example' price=' Free' seller='Myself'/>
                <PostPreview size={postSize} name='Example' price=' Free' seller='Myself'/>
                <PostPreview size={postSize} name='Example' price=' Free' seller='Myself'/>
            </div>
        </div>

    )
}

function ArchivedPosts() {
    return (
        <div className={styles.postSection}>
            <h1>Archived Posts</h1>
            <div className={styles.postList}>
            <PostPreview size={postSize} name='Example' price=' Free' seller='Myself'/>
                <PostPreview size={postSize} name='Example' price=' Free' seller='Myself'/>
                <PostPreview size={postSize} name='Example' price=' Free' seller='Myself'/>
                <PostPreview size={postSize} name='Example' price=' Free' seller='Myself'/>
                <PostPreview size={postSize} name='Example' price=' Free' seller='Myself'/>
            </div>
        </div>

    )
}