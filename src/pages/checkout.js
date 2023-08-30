import Breadcrumb from '@/components/layout/Breadcrumb'
import { getCartItems } from '@/utils/cartItems'
import Cookies from 'js-cookie'
import Head from 'next/head'
import Router from 'next/router'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { BiRupee } from 'react-icons/bi'

function Checkout() {
    const {register,handleSubmit,watch,formState:{errors}}=useForm();
    const [cart, setCart]=useState(getCartItems());
    const [cartItems, setCartItems] = useState(0);
    const [yourCart, setYourCart] = useState({});
    

    useEffect(()=>{
        const tempYourCart=Cookies.get('yourCart');
        if(!tempYourCart){
            Router.push('/')
        }
        setYourCart(tempYourCart && JSON.parse(Cookies.get('yourCart')))
        setCartItems(cart?.length)
    },[cart])
    
    const checkoutHandler = (data) => {
        Router.push ({
            pathname:'/thankYou',
            query: {
                cart:JSON.stringify(cart),
                yourCart:JSON.stringify(yourCart),
                shipping:JSON.stringify(data)
            } 
        })
        Cookies.remove('yourCart');
        Cookies.remove('cartItems');
    }
    
    
    return (
        <>
            <Head>
                <title>Checkout</title>
            </Head>
            <Breadcrumb title={'Checkout'} />
            
            <form onSubmit={handleSubmit(checkoutHandler)}>
                <div className="row g-5">
                    <div className="col-md-5 col-lg-4 order-md-last">
                        <h4 className="d-flex justify-content-between align-items-center mb-3">
                            <span className="text-primary">Your cart</span>
                            <span className="badge badge-secondary rounded-pill">{cartItems}</span>
                        </h4>
                        <ul className="list-group mb-3">
                            <li className="list-group-item d-flex justify-content-between">
                                <div className="my-0">SubTotal (<BiRupee size={21} /> )</div>
                                <strong>{yourCart?.subTotal?.toFixed(2)}</strong>
                            </li>
                            <li className="list-group-item d-flex justify-content-between lh-condensed">
                                <div className="my-0">GST 18% (<BiRupee size={21} /> )</div>
                                <strong>{yourCart?.gstAmount?.toFixed(2)}</strong>
                            </li>
                            <li className="list-group-item d-flex justify-content-between lh-condensed">
                                <div className="my-0">Total amount (<BiRupee size={21} /> )</div>
                                <strong>{yourCart?.grandTotal?.toFixed(2)}</strong>
                            </li>
                        </ul>

                        
                            <div className="input-group">
                                <button type='submit' className='w-100 btn btn-primary btn-lg'>Place Order</button>
                            </div>
                        
                    </div>
                    <div className="col-md-7 col-lg-8">
                        <h4 className="mb-3">Billing address</h4>
                            <div className="row g-3">
                                <div className="col-sm-6">
                                    <label htmlFor="firstName">First name</label>
                                    <input type="text" className="form-control" id="firstName" {...register('firstName',{required:true})} required />
                                        {errors.firstName &&<div className="text-danger">
                                            Valid first name is required.
                                        </div>}
                                </div>
                                <div className="col-sm-6">
                                    <label htmlFor="lastName">Last name</label>
                                    <input type="text" className="form-control" id="lastName" {...register('lastName',{required:true})} required />
                                    {errors.lastName &&<div className="text-danger">
                                            Valid last name is required.
                                        </div>}
                                </div>
                                <div className="col-12">
                                    <label htmlFor="mobileNumber">Mobile number</label>
                                    <input type="text" className="form-control" id="mobileNumber" placeholder='+91' {...register('mobileNumber',{required:true})} required />
                                    {errors.mobileNumber &&<div className="text-danger">
                                        Valid 10 digit number is required.
                                        </div>}
                                
                                </div>
                                <div className="col-12">
                                    <label htmlFor="email">Email <span className="text-muted">(Optional)</span></label>
                                    <input type="email" className="form-control" id="email" placeholder="you@example.com" {...register('email',{required:true})} />
                                    {errors.email &&<div className="text-danger">
                                        Valid Email is required.
                                        </div>}
                                </div>
                                <div className="col-12">
                                    <label htmlFor="address">Address</label>
                                    <input type="text" className="form-control" id="address" {...register('address',{required:true})} required />
                                    {errors.address &&<div className="text-danger">
                                        Valid Address is required.
                                        </div>}
                                </div>
                                <div className="col-12">
                                    <label htmlFor="landmark">Landmark </label>
                                    <input type="text" className="form-control" id="landmark" {...register('landmark',{required:true})} placeholder="Landmark" />
                                    {errors.landmark &&<div className="text-danger">
                                        Please Enter Landmark.
                                        </div>}
                                </div>
                                <div className="col-md-5">
                                    <label htmlFor="country">Country</label>
                                    <select className="form-select" value={'india'} id="country" {...register('country',{required:true})} required>
                                        <option value={'india'}>India</option>
                                    </select>
                                    {errors.country &&<div className="text-danger">
                                        Please Enter Country.
                                        </div>}
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="state">State</label>
                                    <select className="form-select" {...register('state',{required:true})} id="state" required>
                                        <option>Choose...</option>
                                        <option value="Uttarakhand">Uttarakhand</option>
                                        <option value="Uttar-pradesh">Uttar Pradesh</option>
                                    </select>
                                    {errors.state &&<div className="text-danger">
                                        Please provide a valid state.
                                        </div>}
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="zip">Zip</label>
                                    <input type="text" className="form-control" id="zip" {...register('zip',{required:true})} required />
                                        {errors.zip &&<div className="text-danger">
                                            Zip code required.
                                        </div>}
                                </div>
                            </div>                                
                            <hr className="mb-4" />
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="same-address" />
                                        <label className="custom-control-label" htmlFor="same-address">Shipping address is the same as my billing address</label>
                                </div>
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="save-info" />
                                        <label className="custom-control-label" htmlFor="save-info">Save this information for next time</label>
                                </div>
                                <hr className="mb-4" />
                                    <h4 className="mb-3">Payment</h4>
                                    <div className="my-3 ">
                                        <div className="form-check">
                                            <input id="cash" name="paymentMethod" type="radio" {...register('paymentMethod',{required:true})} checked={true} className="form-check-input" required />
                                                <label className="form-check-label" htmlFor="cash">Cash on Delivery</label>
                                        </div>
                                    </div>
                                    <hr className="mb-4" />
                                </div>
                            </div>
                </form>
                </>
                )
}

export default Checkout