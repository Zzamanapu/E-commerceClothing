import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom';

interface ProductItemProps {
  id: string;
  image: string[];
  name: string;
  price: number;
}

const ProductItem = ({ id, image, name, price }: ProductItemProps) => {
  // console.log(`id id : ${id}`)

  const { currency } = useContext(ShopContext);

  return (
    <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
      <div>
        <div className="overflow-hidden">
          <img
            className="block w-full origin-center hover:scale-110 transition-transform duration-300 ease-out"
            src={image[0]}
            alt={name}
          />
        </div>

        <p className="pt-3 pb-1 text-sm">{name}</p>
        <p className="text-sm font-medium">
          {currency}{price}
        </p>
      </div>
    </Link>
  )
}

export default ProductItem