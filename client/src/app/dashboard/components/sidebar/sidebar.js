import styles from './sidebar.module.css'

export default function Sidebar() {
    
    return (
        <div className={styles.sidebar}>
            <div className={styles.title}>
                <h2>What are you looking for?</h2>
                <h1>Filter and Sort</h1>
            </div>
            <div className={styles.content}>
                <div className={styles.filter}>
                    <h1>Filters:</h1>
                    <form className={styles.options}>
                        <input type='checkbox' id='filterAvailable' name='available' />
                        <label for='filterAvailable'>Available</label><br />
                        <input type='checkbox' id='filterPending' name='pending' />
                        <label for='filterPending'>Pending</label><br />
                        <input type='checkbox' id='filterOnCampus' name='onCampus' />
                        <label for='filterOnCampus'>On Campus</label><br />
                        <input type='checkbox' id='filterUrgentlySelling' name='urgentlySelling' />
                        <label for='filterUrgentlySelling'>Urgently Selling</label>
                    </form>
                </div>
                <div className={styles.sort}>
                    <h1>Sort-by:</h1>
                    <form className={styles.options}>
                        <input type='radio' id='sortPriceIncreasing' name='priceIncreasing' />
                        <label for='sortPriceIncreasing'>Price (Increasing)</label><br />
                        <input type='radio' id='sortPriceDecreasing' name='priceDecreasing' />
                        <label for='sortPriceDecreasing'>Price (Decreasing)</label><br />
                        <input type='radio' id='sortDatePostedNewest' name='datePostedNewest' />
                        <label for='sortDatePostedNewest'>Date Posted (Newest)</label><br />
                        <input type='radio' id='sortDatePostedOldest' name='datePostedOldest' />
                        <label for='sortDatePostedOldest'>Date Posted (Oldest)</label>
                    </form>
                </div>
            </div>
        </div>
    )
}