'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import styles from './page.module.css'
import Sidebar from './components/sidebar/sidebar.js'
import Category from './components/categoryBar/categoryBar.js'
import PostPreview from './components/postPreview/postPreview.js'
import Link from 'next/link'


export default function Dashboard() {

    const [isSearch, setIsSearch] = useState(false);

    const handleChildElementClick = (e) => {
        e.stopPropagation()
        setIsSearch(true)
    }


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

    const postSize = '21vw'

    return (
        <section className={styles.body} onClick={() => setIsSearch(false)}>
            <Category />
            <div style={{display: 'flex'}}>
                <Sidebar />
                <div className={styles.content}>
                    <motion.div 
                        className={styles.search}
                        initial={'rest'}
                        animate={isSearch ? 'active' : 'rest'}
                    >
                        <label className={styles.searchTitle} for='searchFor'>Got Something in Mind?</label>
                        <motion.input 
                            className={styles.searchBar} 
                            onClick={(e) => handleChildElementClick(e)}
                            type='text' id='searchFor' autoComplete='off' 
                            placeholder='Unleash Creativity, Start Digging'
                            variants={{
                                rest: {
                                    outlineColor: 'var(--blue)'
                                },
                                active: {
                                    outlineColor: 'var(--yellow)'
                                }
                            }}
                        />
                        <motion.div
                            variants={{
                                rest: {
                                    color: 'var(--yellow)',
                                    fontSize: '2.5vh'
                                },
                                active: {
                                    color: 'var(--blue)',
                                    fontSize: '2.75vh'
                                }
                            }}
                        >
                            <FontAwesomeIcon 
                                className={styles.searchIcon} 
                                icon={faMagnifyingGlass}
                            />
                        </motion.div>
                    </motion.div>
                    <div className={styles.postPreviews}>
                        {products && products.map((product) => (
                            <Link href={'/dashboard/post'} style={{textDecoration: 'none', color: 'black'}}>
                                <PostPreview 
                                    size={postSize} 
                                    key={product._id}
                                    name={product.name}
                                    price={product.price}
                                    seller={product.seller}
                                />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

