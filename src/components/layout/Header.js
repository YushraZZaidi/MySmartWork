import { getCartItems } from '@/utils/cartItems';
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { BiCart } from 'react-icons/bi'

function Header() {

    const [cart,setCart]=useState(0);
    useEffect(()=>{
        setInterval(()=>{
            const cartItems=getCartItems();
            setCart(cartItems.length)
        },1000)
        },[])

    return (
        <>
            <nav className="navbar navbar-top-bg d-none d-md-block bg-primary">
                <div className="container-md">
                    <i className='nav-item navbar-nav text-white'>Get Upto 70% Discount Everyday</i>
                    <div className="dropdown p-0">
                        <span className="dropdown-toggle text-white" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            My Account
                        </span>
                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" href="/register">Register</Link></li>
                            <li><Link className="dropdown-item" href="/login">Login</Link></li>
                            <li><Link className="dropdown-item" href="#">Logout</Link></li>
                        </ul>
                    </div>

                </div>
            </nav>
            <nav className="navbar navbar-top" style={{background:'#0979ff'}}>
                <div className="container-md">
                    <Link className='navbar brand text-decoration-none' href="/">
                        <Image className="rounded-circle" src="/images/NWG.png" width={100} height={50} alt="NWG Logo" priority={true} />
                    </Link>

                    <Link className='nav-item nav-link d-flex gap-1 align-items-center text-white' href="/cart">
                        <span className='p-1 rounded-circle opacity-7s bg-primary'>
                            <BiCart size={21} className='pb-1'/>
                        </span>
                        {cart} items
                    </Link>
                </div>
            </nav>
            <nav className="navbar navbar-expand-lg shadow-sm mg-2 rounded container px-2" style={{background:'#ccfff2'}}>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="navbar-nav">
                        <Link className="nav-item nav-link active" href="/">Store</Link>

                        <Link className="nav-item nav-link active" href='#'> About Us </Link>
                        <Link className="nav-item nav-link active" href=''>Support </Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header
