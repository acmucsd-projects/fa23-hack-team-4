import styles from './category_bar.module.css'

export default function Category() {
    const categories = [
      { name: 'Clothing', subcategory: ['View all', 'T-Shirts', 'Hoodies & Sweatshirts', 'Tops', 'Pants & Shorts', 'Hats', 'Other'] },
      { name: 'Home', subcategory: ['View all', 'Furniture', 'Room Decor', 'Kitchenware'] },
      { name: 'Entertainment', subcategory: ['View All', 'Books', 'Sporting Goods', 'Games', 'Other'] },
      { name: 'School Supplies', subcategory: ['View all', 'Writing Utensils', 'Notebooks', 'Textbooks', 'Lab Supplies'] },
      { name: 'Miscellaneous', subcategory: ['View all', 'Drinkware', 'Backpacks & Totes'] }
    ];
  
    return (
      <div className={styles.categoryBar}>
        {categories.map((category, index) => (
          <div key={index} className={styles.categoryItem}>
            <span className={styles.categoryName}>{category.name}</span>
            {true && (
              <div className={styles.subcategory}>
                {category.subcategory.map((subcat, subIndex) => (
                  <div key={subIndex}>{subcat}</div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }
  