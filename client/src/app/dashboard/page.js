import PostTemplate from './body/postTemplate.js'
import styles from './body/page.module.css'

export default function Dashboard() {
    return (

        <main>
            <PostTemplate />
            <PostTemplate className = {styles.move}/>
        </main>
    )
}