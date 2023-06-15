function filterProductsByCategory(products) {
    return function(category) {
      return products.filter(product => product.category === category);
    };
  }
  
  // Example usage
  const products = [
    { name: 'Shirt', category: 'Clothing' },
    { name: 'Shoes', category: 'Footwear' },
    { name: 'Hat', category: 'Accessories' },
    { name: 'Jeans', category: 'Clothing' },
    { name: 'Socks', category: 'Accessories' }
  ];
  
  const filterByCategory = filterProductsByCategory(products);
  
  const clothingProducts = filterByCategory('Clothing');
  console.log(clothingProducts);
  // Output: [ { name: 'Shirt', category: 'Clothing' }, { name: 'Jeans', category: 'Clothing' } ]
  
  