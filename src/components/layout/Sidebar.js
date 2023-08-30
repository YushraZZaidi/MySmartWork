import React from 'react';
import { MdCategory } from 'react-icons/md';
import { BsDashLg } from 'react-icons/bs';
import Link from 'next/link';
import useSwr from 'swr';
import { fetcher } from '@/utils/swrFetcher';

function Sidebar() {

    const { data, error } = useSwr('https://dummyjson.com/products/categories', fetcher)

    if (error) return <h1>Something went wrong!</h1>
    if (!data) return <h1>Loading...</h1>



    return (
        <div className='w-100'>
            <ul className='list-group'>
                <li className='list-group-item d-flex align-items-center navbar-top-bg  bg-primary opacity-75'>
                    <h5 className='text-white mt-2 text-uppercase'>
                        <MdCategory size={28} />Categories
                    </h5>
                </li>
                {
                    data.map((category, i) => {
                        return (
                            <div key={i}>
                                <Link href={`/category/${category}`} className="text-decoration-none">
                                    <li className='list-group-item list-group-item-action d-flex align-items-center text-uppercase'>
                                        <BsDashLg size={24} className='m-1' />{category}</li>
                                </Link>
                            </div>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Sidebar