import React from 'react'
import products from '../views/products.js'
import { BG_color } from '../views/app.js'
import ProductCard from '../components/ProductCard.jsx'
import { useState } from 'react'

function Products() {
  const [sortItem, setSortItem] = useState('');
  return (
    <div className="min-h-screen py-8" style={{ backgroundColor: BG_color }}>
      <div className='flex flex-row-reverse p-4 gap-4'>
        <select
          value={sortItem}
          onChange={(e) => setSortItem(e.target.value)}
          className="w-1/6 p-2 mb-6 rounded-md border border-gray-300 focus:outline-none focus:ring-1"
        >
        <option value="default">Sort By</option>
        <option>Price: Low to High</option>
        <option>Price: High to Low</option>
        <option>Name: A to Z</option>
        <option>Name: Z to A</option>
        </select>
        <input
          type="text"
          placeholder="Search products..."
          className="w-1/6 p-2 mb-6 rounded-md border border-gray-300 focus:outline-none focus:ring-1"
        />
        
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Products
