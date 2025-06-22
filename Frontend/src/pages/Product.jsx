import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {

    const { productId } = useParams();
    const { products, currency, addToCart } = useContext(ShopContext);
    const [productData, setProductData] = useState(false);
    const [image, setImage] = useState('');
    const [size, setSize] = useState('');

    useEffect(() => {
        const fetchProductData = () => {
            products.map((item) => {
                if (item._id === productId) {
                    setProductData(item);
                    setImage(item.image[0]);
                    return null;
                }
            })
        };
        fetchProductData();
    }, [productId, products]);

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* Product Data */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        {/* Product Image */}
        <div className='flex flex-1 flex-col-reverse gap-3 sm:flex-row'>
            <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll sm:justify-normal sm:w-[18.7%] w-full'>
                {/* Product Images */}
                {
                    productData.image.map((item, index) => {
                        return (
                            <img onClick={() => setImage(item)} key={index} src={item} className={`w-[24%] sm:w-full sm:mb-3 flex-shrink-0 smcursor-pointer ${image === item ? 'border-2 border-black' : ''}`} />
                        )
                    })
                }
            </div>
            <div className='w-full sm:w-[80%]'>
                <img className='w-full h-auto' src={image} />
            </div>
        </div>
        {/* Product Details */}
        <div className='flex-1'>
            <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
            <div className='flex item-center gap-1 mt-2'>
                <img src={assets.star_icon} />
                <img src={assets.star_icon} />
                <img src={assets.star_icon} />
                <img src={assets.star_icon} />
                <img src={assets.star_dull_icon} />
                <p className='pl-2'>(122)</p>
            </div>
            <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
            <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
            <div className='flex flex-col gap-4 my-8'>
                <p>Select Size</p>
                <div className='flex gap-2'>
                    {
                        productData.sizes.map((item, index) => {
                            return (
                                <button onClick={() => setSize(item)} key={index} className={`border border-gray-300 rounded-full px-4 py-2 cursor-pointer hover:bg-black hover:text-white ${item === size ? 'border-orange-500' : ''}`}>{item}</button>
                            )
                        })
                    }
                </div>
            </div>
            <button onClick={() => addToCart(productData._id, size)} className='bg-black text-white text-sm px-10 py-4 cursor-pointer active:bg-gray-700'>Add to Cart</button>
            <hr className='mt-8 sm:w-4/5'/>
            <div className='text:sm text-gray-500 mt-5 flex flex-col gap-1'>
                <p>100% original Product</p>
                <p>Cash on delivery is available</p>
                <p>Easy return and Exchange policy within 7 days</p>
            </div>
        </div>
      </div>

      {/* Description and review section */}
      <div className='mt-20'>
        <div className='flex'>
            <b className='b-5 px-5 py-3 text-sm'>Description</b>
            <p className='b-5 px-5 py-3 text-sm'>Reviews 122</p>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
            <p>An e-commerce website is an online platform where businesses sell goods and services to consumers. It acts as a virtual storefront, allowing customers to browse products, make purchases, and complete transactions online.</p>
            <p>An e-commerce website is an online store where businesses display their products or services and customers can browse, select, and purchase them. </p>
        </div>
      </div>

      {/* display related products */}
      
      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
    </div>
  ) : <div className='opacity-0'></div>
}

export default Product
