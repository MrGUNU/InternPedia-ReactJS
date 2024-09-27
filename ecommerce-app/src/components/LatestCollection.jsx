/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, {useContext, useEffect, useState} from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem';

const LatestCollection = () => {

    const { products } = useContext(ShopContext);
    const [LatestProducts,setLatestProducts] = useState([]);

    useEffect(()=>{
      setLatestProducts(products.slice())
    },[])


  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        <Title text1={'LATEST'} text2={'COLLECTIONS'} />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nesciunt, enim eum eos tempora animi sunt! Odit accusamus sequi, expedita natus eligendi nemo doloribus blanditiis ipsa error deleniti aliquam inventore.
        </p>
      </div>

      {/* Rendering Products */}

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 gap-y-6'>
        {
          LatestProducts.map((items, index) => (
            <ProductItem key={index} id={items._id} image={items.image} name={items.name} price={items.price} />
          ))
        }
      </div>

    </div>
  )
}

export default LatestCollection
