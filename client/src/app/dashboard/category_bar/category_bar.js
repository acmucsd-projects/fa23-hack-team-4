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
  