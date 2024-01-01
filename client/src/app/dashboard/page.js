import styles from './page.module.css'
import Sidebar from './components/sidebar/sidebar.js'
import Category from './components/categoryBar/category_bar.js'
import PostTemplate from './components/postPreview/postTemplate.js'

export default function Dashboard() {
    return (
        <section className={styles.body}>
            <Category />
            <Sidebar />
        </section>
    )
}

