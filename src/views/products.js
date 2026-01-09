import com1 from '../assets/com_prod(1).jpeg'
import com2 from '../assets/com_prod(2).jpeg'
import com3 from '../assets/com_prod(3).jpeg'
import dry1 from '../assets/dry_prod(1).jpeg'
import dry2 from '../assets/dry_prod(2).jpeg'
import dry3 from '../assets/dry_prod(3).jpeg'
import nor1 from '../assets/nor_prod(1).jpeg'
import nor2 from '../assets/nor_prod(2).jpeg'
import nor3 from '../assets/nor_prod(3).jpeg'
import oil1 from '../assets/oil_prod(1).jpeg'
import oil2 from '../assets/oil_prod(2).jpeg'
import oil3 from '../assets/oil_prod(3).jpeg'

const products = [
  {
    id: 1,
    img: com1,
    name: "DermaCart Soap",
    price: 199,
    description: "A gentle soap for sensitive skin.",
    type: "Combination"
  },
  {
    id: 2,
    img: com2,
    name: "DermaCart Face Mask",
    price: 149,
    description: "A hydrating face mask for combinational skin types.",
    type: "Combination"
  },
  {
    id: 3,
    img: com3,
    name: "Anti-Acne DermaCart Serum",
    price: 459,
    description: "A serum to combat acne and blemishes.",
    type: "Combination"
  },
  {
    id: 4,
    img: dry1,
    name: "DermaCart Moisturizer",
    price: 249,
    description: "A rich moisturizer for dry skin.",
    type: "Dry"
  },
  {
    id: 5,
    img: dry2,
    name: "DermaCart Natural Lip Balm",
    price: 99,
    description: "A nourishing lip balm for dry lips.",
    type: "Dry"
  },
  {
    id: 6,
    img: dry3,
    name: "DermaCart Body Wash",
    price: 189,
    description: "A body wash that hydrates and soothes dry skin.",
    type: "Dry"
  },
  {
    id: 7,
    img: nor1,
    name: "DermaCart Sunscreen",
    price: 249,
    description: "A lightweight sunscreen for normal skin.",
    type: "Normal"
  },
  {
    id: 8,
    img: nor2,
    name: "DermaCart Body Wash",
    price: 159,
    description: "A gentle body wash for normal skin.",
    type: "Normal"
  },
  {
    id: 9,
    img: nor3,
    name: "DermaCart Vitamin C Serum",
    price: 399,
    description: "A serum to brighten and even out skin tone.",
    type: "Normal"
  },
  {
    id: 10,
    img: oil1,
    name: "DermaCart Foaming Face Wash",
    price: 499,
    description: "A foaming face wash for oily skin.",
    type: "Oily"
  },
  {
    id: 11,
    img: oil2,
    name: "DermaCart Body Wash",
    price: 299,
    description: "A body wash for oily skin.",
    type: "Oily"
  },
  {
    id: 12,
    img: oil3,
    name: "DermaCart UnderEye Cream",
    price: 349,
    description: "An under-eye cream to reduce puffiness and dark circles.",
    type: "Oily"
  }
];

export default products;