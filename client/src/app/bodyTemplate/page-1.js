"use client"
import 'bootstrap/dist/css/bootstrap.css'
import styles from './page.module.css'
import {useEffect} from 'react'
import React, { useState } from 'react';
import 'flatifycss/dist/css/flatify.css';
import PostTemplate from './postTemplate';


export default function bodyTemplate(){
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
      }, []);

    return (
        <main className={styles.main}>
            <div>
                <PostTemplate />
            </div>
        </main>
        
    )
}





