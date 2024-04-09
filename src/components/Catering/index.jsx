import React from 'react'
import { useState , useEffect } from 'react';
import axios from 'axios';


const Catering = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('productData.json');
        const cateringCategory = response.data.product_categories.find(category => category.category === 'Catering');


        const cateringProductsData = cateringCategory ? cateringCategory.products : [];
        setProducts(cateringProductsData);
         } catch (error) {
             console.error('Error fetching product data:', error);
         }
     };

     fetchData();
 }, []);

  return (
    <div className='pb-14 pt-5 mt-20 bg-gray-50 products'>
      <div className='container mx-auto'>
        <section>
          <div className='container mx-auto'>
            <div className='text-center py-3 '>
              <h3 className='text-3xl font-bold mb-8  main-h'>Our Collection</h3>
            </div>
            <div className="grid lg:grid-cols-3 gap-4 mg:grid-cols-2 sm:grid-cols-1 box-gap mb-2">

              {products.map(product => (
                <div key={product.product_id} className="product-item">
                  <img
                    src={product.media[0][0].link}
                    // alt={product.product}
                    className="product-image"
                  />
                  <div className='product-content  flex flex-wrap justify-between items-center'>
                    <h2>{product.product}</h2>
                    <span className='font-bold'>{product.price}</span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

      </div>
    </div>
  )
}

export default Catering;