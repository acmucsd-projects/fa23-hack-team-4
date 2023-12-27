"use client"
import styles from './page.module.css'

export default function Home() {

  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.categories}>
        <Categories />
      </div>
      <div className={styles.body}>
        <ShopItemGrid />
      </div>
      <div className={styles.filterSortColumn}>
        <FilterAndSortColumn />
      </div>
    </main>
  )
}

// New Components:

function Header() {
  // Your header component code goes here
  return <div>Header Component</div>
}

function Categories() {
  const categories = [
    { name: 'Clothing', subcategories: ['View all', 'T-Shirts', 'Hoodies & Sweatshirts', 'Tops', 'Pants & Shorts', 'Hats', 'Other'] },
    { name: 'Home', subcategories: ['View all', 'Furniture', 'Room Decor', 'Kitchenware'] },
    { name: 'Entertainment', subcategories: ['View All', 'Books', 'Sporting Goods', 'Games', 'Other'] },
    { name: 'School Supplies', subcategories: ['View all', 'Writing Utensils', 'Notebooks', 'Textbooks', 'Lab Supplies'] },
    { name: 'Miscellaneous', subcategories: ['View all', 'Drinkware', 'Backpacks & Totes'] },
  ];

  return (
    <div className={styles.categories}>
      {categories.map((category, index) => (
        <div key={index} className={styles.categoryItem}>
          <span className={styles.categoryName}>{category.name}</span>
          {category.subcategories.length > 1 && (
            <div className={styles.subcategories}>
              {category.subcategories.map((subcat, subIndex) => (
                <div key={subIndex}>{subcat}</div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function ShopItemGrid() {
  // Your shop item grid component code goes here
  return <div>Shop Item Grid Component</div>
}

function FilterAndSortColumn() {
  // Your filter and sort column component code goes here
  return <div>Filter and Sort Column Component</div>
}