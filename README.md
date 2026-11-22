# Product Search and Filter

![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
[![roadmap.sh](https://img.shields.io/badge/roadmap.sh-Project%20Idea-blue?style=for-the-badge&logo=roadmapdotsh)](https://roadmap.sh/projects/js-expense-summary)

A lightweight, modular JavaScript utility built from scratch to search, filter, and query product catalogs. Designed for e-commerce storefronts, content categorization, or any application requiring fast, customizable data filtering without external dependencies.

---

## Features

- **Versatile Filtering & Search:** Supports filtering by category, price ceiling, stock availability, exact ID lookup, and partial text search.
- **Immutable Data Handling:** Uses native array methods to process collections cleanly without mutating the original dataset.
- **Defensive Input Validation:** Handles invalid inputs and edge cases gracefully to prevent runtime errors.
- **Modular Architecture:** Single-responsibility functions that are easy to read, test, and integrate into existing codebases.

---

## Technologies Used

- **Vanilla JavaScript (ES6+):** Selected for maximum performance, universal compatibility, and a zero-dependency footprint.

---

## Challenges Overcome

- **Code Refactoring:** Streamlined conditional logic into concise, declarative expressions using native JavaScript methods (`filter`, `find`, `includes`).
- **Modular Design Decisions:** Structured the utilities around independent, single-responsibility functions to keep the codebase maintainable and easily extensible.

---

## How to Use

1. Clone or download the source code into your project directory.
2. Import the required utility functions into your JavaScript module.

### Example Usage

```javascript

const products = [
  { id: 1, name: 'Notebook', category: 'stationery', price: 10, inStock: true },
  { id: 2, name: 'Desk Lamp', category: 'home', price: 35, inStock: false },
  { id: 3, name: 'Pen Set', category: 'stationery', price: 6, inStock: true },
  { id: 4, name: 'Water Bottle', category: 'fitness', price: 18, inStock: true,},
];

console.log(filterByCategory(products, 'stationery').map((product) => product.name));
console.log(filterByMaxPrice(products, 20).map((product) => product.name));
console.log(findProductById(products, 3));
console.log(searchProducts(products, 'bot').map((product) => product.name));
console.log(getInStockProducts(products).map((product) => product.name));
console.log(findProductById(products, 99));

// Expected Output:

/*
[ 'Notebook', 'Pen Set' ]
[ 'Notebook', 'Pen Set', 'Water Bottle' ]
{
  id: 3,
  name: 'Pen Set',
  category: 'stationery',
  price: 6,
  inStock: true
}
[ 'Water Bottle' ]
[ 'Notebook', 'Pen Set', 'Water Bottle' ]
undefined
*/
```
## License

This project is licensed under the MIT License.

## Links & Resources

- **Roadmap Project Specification:** [JavaScript Product Search And Filter](https://roadmap.sh/projects/js-product-search-and-filter)                                       