import React from 'react'
import { Primary_color, Main_Text_color, Sub_Headers_color, Hero_BG_color } from '../config/app.js'

function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-69 relative size-85 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer" style={{ backgroundColor: Hero_BG_color }} >
      <div className="h-48 flex items-center justify-center bg-gray-50 rounded-md mb-2 overflow-hidden">
        <img src={product.img} alt={product.name} className="max-h-full w-auto object-contain" />
      </div>
      <h3 className="text-lg font-semibold" style={{ color: Main_Text_color }}>{product.name}</h3>
      <p className="text-sm" style={{ color: Sub_Headers_color }}>{product.description}</p>
      <p className="font-bold mt-2 absolute bottom-5 left-5" style={{ color: Primary_color }}>₹{product.price}</p>
    </div>
  )
}

export default ProductCard
