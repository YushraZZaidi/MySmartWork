import { addToCart } from '@/utils/cartItems'
import Image from 'next/image'
import Link from 'next/link'
import Router from 'next/router'
import React from 'react'
import { toast } from 'react-hot-toast'
import { BiCartAdd, BiRupee } from 'react-icons/bi'
import ReactStars from 'react-stars'

function ProductCart({product}) {
    let rate=parseFloat(product?.rating?.toFixed(1));
    return (
        <div className="card">
            <Link href={`/product/${product?.id}`}>
                <div className='object-fit-cover'>
                    <Image src={product.thumbnail} className='card-img-top' width={305} height={210} alt={product.title} />
                </div>
            </Link>

            <div className="card-body ">
                <Link href={`/product/${product?.id}`} className='text-decoration-none'>
                    <h5 className="card-title text-black">{product.title}</h5>
                </Link>
                <ReactStars count={5} value={rate} size={21} color2={'#ffd700'} edit={false} half={true}/>
                <div className='d-flex justify-content-between align-items-center gap-2 flex-wrap'>
                    <h6 className="card-title d-flex align-items">
                        <BiRupee size={21} />
                        {product.price}
                        <span className='card-title d-flex align-items mx-2' style={{background:'#ff4d4d',color:'white',borderRadius:5}}>-{product.discountPercentage}%</span>
                    </h6>
                    
                    <div className='d-flex align-items mb-2 cart-title justify-content-end'>
                        <button className='btn btn-warning btn-sm mx-2' onClick={(e)=>{addToCart(product,1),toast.success('Added to Cart!')}}>
                            <BiCartAdd size={22} />
                        </button>
                        <button className='btn btn-success btn-sm' onClick={(e)=>{addToCart(product,1);}}>
                            Buy
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCart