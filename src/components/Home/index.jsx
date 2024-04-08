import React from 'react'
import "./style.scss";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
const Home = () => {

  const [teaProducts, setTeaProducts] = useState([]);
  const [cateringProducts, setCateringProducts] = useState([]);

  // useEffect(() => {

  //   const fetchData = async () => {
  //         try {
  //           const response = await axios.get('productData.json');
  //           const teaCategory = response.data.product_categories.find(category => category.category === 'Tea');
  //           if (teaCategory) {
  //             const productsData = teaCategory.products.map(product => ({
  //               // category: teaCategory.category,
  //               link: product.media[0][0].link,
  //               description: teaCategory.description,
  //               price: product.price,
  //               product: product.product,
  //               // product: product.description.replace(/<\/?[^>]+(>|$)/g, ""), // Remove HTML tags
  //             })).slice(0, 3);  // Only take the first 3 products
  //             setTeaProducts(productsData);
  //           }
  //         } catch (error) {
  //           console.error('Error fetching data:', error);
  //         }
  //       };

  //       fetchData();
  //     }, []);
  //   


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('productData.json');
        const teaCategory = response.data.product_categories.find(category => category.category === 'Tea');
        const cateringCategory = response.data.product_categories.find(category => category.category === 'Catering');

        const teaProductsData = teaCategory ? teaCategory.products.slice(0, 3) : [];
        const cateringProductsData = cateringCategory ? cateringCategory.products.slice(0, 3) : [];

        setTeaProducts(teaProductsData);
        setCateringProducts(cateringProductsData);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='page-content'>
      <div
        className='flex-container justify-center bg-cover bg-no-repeat bg-fixed banner-bg' style={{ backgroundImage: "url(//depthngreen.com/60535911577420090951723278816809053/IMG_1542-750x562.jpg)" }}>
        <style>
          {`
            @media (max-width: 768px) {
              .banner-bg {
                background-image: url(//depthngreen.com/60535911577420090951723278816809053/IMG_1542-500x375.jpg);
              }
            }
            @media (max-width: 640px) {
              .banner-bg {
                background-image: url(//depthngreen.com/60535911577420090951723278816809053/IMG_1542-300x225.jpg); /* Adjust this URL */
              }
            }
          `}
        </style>

        <div className='text-center z-10 '>
          <h1 className='text-white '>
            Depth 'N' <span className='primary-clr '>Green</span>
          </h1>

          <h2 className='text-white'>
            All-Natural Indian Cuisine Crafted with Love & Care. Made Only with
            Grass-Fed Ghee,
          </h2>
          <h2 className='text-white'>
            Butter & Olive Oil For a Deliciously Healthy Meal. NO SEED OILS /
            NOTHING ARTIFICIAL.
          </h2>
          <h2 className='mt-2 text-white'>Monday - Saturday 11AM - 8:30PM</h2>
          <h2 className='text-white' >7 Broad Canal Way, Cambridge, MA 02142</h2>
          <h4 className="text-white">
            (across the street from Locke Bar in Kendall Square)
          </h4>
        </div>
      </div>
      <section className=''>
        <div className='container mx-auto product-cards mt-10 mb-20 pb-8'>
          <div className=' text-center py-3'>
            <h3 className=' text-3xl font-bold mb-8 main-h'>
              FEATURED PRODUCTS
            </h3>
          </div>
          <div className='grid lg:grid-cols-3 mg:grid-cols-2 sm:grid-cols-1 box-gap mb-2 gap-4'>

            {/* {teaProducts.map((product, index) => (
                <div key={index}>
                  <img src={product.link} />
                  <p>Price: {product.price}</p>
                  <h3>{product.product}</h3>
                </div>
              ))} */}

            {teaProducts.map((product, index) => (
              <div className='product-info flex flex-wrap justify-between font-bold' key={index}>
                <img src={product.media[0][0].link} />
                <h6>{product.product}</h6>
                <div className='price'>
                  <p>Price: {product.price}</p>
                </div>

                {/* Add more product details as needed */}
              </div>
            ))}


          </div>

          <div className="text-center mt-5 ">
            <Link
              to="/products"
              className="mt-4 primary-clr pb-6 site-btn view-btn"
            >
              VIEW All
            </Link>
          </div>


        </div>
      </section>
      <section className=''>
        <div className='container mx-auto product-cards mt-10 mb-20 pb-8'>
          <div className=' text-center py-3'>
            <h3 className=' text-3xl font-bold mb-8 main-h'>
              CATERING PRODUCTS
            </h3>
          </div>
          <div className='grid lg:grid-cols-3 mg:grid-cols-2 sm:grid-cols-1 box-gap mb-2 gap-4'>

            {/* {teaProducts.map((product, index) => (
                <div key={index}>
                  <img src={product.link} />
                  <p>Price: {product.price}</p>
                  <h3>{product.product}</h3>
                </div>
              ))} */}

            {cateringProducts.map((product, index) => (
              <div className='product-info flex flex-wrap justify-between font-bold'  key={index}>
                <img src={product.media[0][0].link} />
                <h6>{product.product}</h6>
                <div>
                  <p>Price: {product.price}</p>
                </div>

                {/* Add more product details as needed */}
              </div>
            ))}

          </div>
          <div className="text-center mt-5">
            <Link
              to="/catering"
              className="mt-4 primary-clr pb-6 site-btn view-btn"
            >
              VIEW All
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home