import React from 'react'
import products from '../views/products.js'
import {BG_color,Hero_BG_color,Primary_color,Main_Text_color,Sub_Headers_color}from '../views/app.js'
import ProductCard from '../components/ProductCard.jsx'

function Products() {
  return (
    <div className="{{style=BG_color}} min-h-screen p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} products={product} />
        ))}
      </div>
    </div>
  )
}

export default Products
