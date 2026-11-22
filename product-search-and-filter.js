const filterByCategory = (products, category) =>
    products.filter(product => product.category === category.toLowerCase());

const filterByMaxPrice = (products, maxPrice) => 
    products.filter(product => product.price <= maxPrice);

const getInStockProducts = products => 
    products.filter(product => product.inStock === true);

const findProductById = (products, productId) =>
    products.find(product => product.id === productId);

const searchProducts = (products, searchText) =>{
    let name = [];
    let product = products.find(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
    name.push(product);
    return name;
}

// Usage Examples

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