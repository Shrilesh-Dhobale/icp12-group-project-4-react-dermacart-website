import React from 'react'
import products from '../views/products.js'

function ProductCard({name, img, price, description}) {
  return (
    
        <div key={products.id} className="bg-white rounded-lg shadow-md p-4 w-64">
          <img src={products.img} alt={products.name} className="w-full h-58 object-cover rounded-md mb-2" />
          <h3 className="text-lg font-semibold">{products.name}</h3>
          <p className="text-gray-600">{products.description}</p>
          <p className="text-green-600 font-bold">₹{products.price}</p>
        </div>
    
  )
}

export default ProductCard
