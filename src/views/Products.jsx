import React from 'react'
import products from '../views/products.js'
import { BG_color } from '../views/app.js'
import ProductCard from '../components/ProductCard.jsx'
import { useState } from 'react'

function Products() {
  const [sortItem, setSortItem] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  let filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (sortItem === 'default') {
    filteredProducts.sort((a, b) => a.id - b.id);
  }
  else if (sortItem === 'LowtoHigh') {
    filteredProducts.sort((a, b) => a.price - b.price);
  }
  else if (sortItem === 'HightoLow') {
    filteredProducts.sort((a, b) => b.price - a.price);
  }
  else if (sortItem === 'NameAtoZ') {
    filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
  }
  else if (sortItem === 'NameZtoA') {
    filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
  }
  return (
    <div className="min-h-screen py-8" style={{ backgroundColor: BG_color }}>
      <div className='flex flex-row-reverse p-4 gap-4'>
        <select
          value={sortItem}
          onChange={(e) => setSortItem(e.target.value)}
          className="w-1/6 p-2 mb-6 rounded-md border border-gray-300 focus:outline-none focus:ring-1"
        >
        <option value="default">Sort by</option>
        <option value="LowtoHigh">Price: Low to High</option>
        <option value="HightoLow">Price: High to Low</option>
        <option value="NameAtoZ">Name: A to Z</option>
        <option value="NameZtoA">Name: Z to A</option>
        </select>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search products..."
          className="w-1/6 p-2 mb-6 rounded-md border border-gray-300 focus:outline-none focus:ring-1"
        />
        
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Products
