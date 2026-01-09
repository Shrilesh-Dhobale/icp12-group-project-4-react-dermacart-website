import React from 'react'
import products from '../views/products.js'
import { BG_color } from '../views/app.js'
import ProductCard from '../components/ProductCard.jsx'


function Products() {
  return (
    <div className="min-h-screen py-8" style={{ backgroundColor: BG_color }}>
      <div className='flex flex-row-reverse p-4 gap-4'>
        <select
          type="text"
          placeholder="Sort by ..."
          className="w-1/6 p-2 mb-6 rounded-md border border-gray-300 focus:outline-none focus:ring-1"
        />
        <option>Sort by Price: Low to High</option>
        <option>Sort by Price: High to Low</option>
        <option>Sort by Name: A to Z</option>
        <option>Sort by Name: Z to A</option>
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
