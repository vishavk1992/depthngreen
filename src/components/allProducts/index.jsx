import React from 'react'
import "./styles.scss"
import { useState , useEffect } from 'react'
import axios from 'axios';

const Products = () => {
  const [products , setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.get('productData.json');
            const categories = response.data.product_categories;
            const teaAndCatering = categories.flatMap(category => {
                if (category.category === "Tea"|| category.category === "Catering") {
                    return category.products;
                }
                return [];
            });
            setProducts(teaAndCatering);
        } catch (error) {
            console.error('Error fetching product data:', error);
        }
    };

    fetchData();
}, []);

  return (
    <div className='pb-14 pt-5'>
    <div className='container mx-auto'>
    <section>
      <div className='container mx-auto'>
      <div className='text-center py-3 '>
        <h3 className='text-3xl font-bold mb-8 relative main-h'>Our Collection</h3>     
      </div>
      <div className="grid lg:grid-cols-3 gap-4 mg:grid-cols-2 sm:grid-cols-1 box-gap mb-2">

         {products.map(product => (
                    <div key={product.product_id} className="product-item">
                        
                        {product.media.map(image => (
                            <img
                                key={image[0].attachment_id}
                                src={image[0].link}
                                alt={product.product}
                                className="product-image"
                            />
                        ))}
                        <h2>{product.product}</h2>
                    </div>
                ))}
      </div>

      </div>
    </section>

    </div>
    </div>
  )
}

export default Products;