import styles from './page.module.css'
import PostPreview from '../components/postPreview/postPreview.js'

export default function Account() {

    const pageView = 0; /* Viewing another account */
    /* const pgaeView = 1; /* Viewing your own account */

    if(pageView == 0) {
        return (
            <section className={styles.body}>
                <div className={styles.accountInfo}>
                    Username's account
                </div>
                <div className={styles.posts}>
                    <h1>Active Listings:</h1>
                    <div className={styles.livePosts}>
                        <PostPreview />
                        <PostPreview />
                        <PostPreview />
                    </div>
                </div>
            </section>
        )
    }

    if(pageView == 1) {
        return (
            <section className={styles.body}>
                <div className={styles.accountInfo}>
                    Your account
                </div>
                <div className={styles.posts}>
                    <div className={styles.livePosts}>

                    </div>
                    <div className={styles.archivedPosts}>

                    </div>
                </div>
            </section>
        )
    }

}