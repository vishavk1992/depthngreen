import React from 'react'
import "./style.scss";
const Home = () => {
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
    </div>
  )
}

export default Home