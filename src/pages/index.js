import Head from 'next/head'
import Banner from '../components/Banner';
import Breadcrumb from '@/components/layout/Breadcrumb';
import ProductCart from '@/components/cards/ProductCart';


export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>NWG Store</title>
        <meta name="description" content="NWG E-Commerce" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Banner />
        <div className='my-2 mt-4 bg-light'>
          <h4 className='text-center p-2 text-uppercase'>Products</h4>
        </div>
        <div className='row'>
          {products && products.map((item) => {
            return (
              <div key={item.id} className='col-md-4'>
                <div className='mt-4'>
                  <ProductCart product={item}/>
                </div>

              </div>
            )
          }
          )}

        </div>

      </main>
    </>
  )
}


export async function getServerSideProps(context) {
  let products = [];

  try {
    const response = await fetch('https://dummyjson.com/products');
    const result = await response.json();
    products = result.products;

  } catch (error) {
    console.log('error', error);
  }
  return {
    props: {
      products
    }
  }
}