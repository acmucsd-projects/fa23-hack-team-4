<<<<<<< HEAD

import PostTemplate from './components/body/postTemplate.js'

export default function Dashboard() {
    return (
        <div>
            Dashboard Content
            <PostTemplate />
        </div>
=======
import styles from './page.module.css'
import Sidebar from './components/sidebar/sidebar.js'
import Category from './components/categoryBar/category_bar.js'

export default function Dashboard() {
    return (
        <section className={styles.body}>
            <Category />
            <Sidebar />
        </section>
>>>>>>> e59fc35dc3095149991900e26e754600b26d4454
    )
}