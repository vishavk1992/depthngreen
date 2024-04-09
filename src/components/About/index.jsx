import React from 'react'
import "./styles.scss"
const About = () => {
  return (
    <div className="page-content about">
      <div className="relative">
        <div
          className="flex-container justify-center bg-cover bg-no-repeat bg-fixed banner-bg"
          style={{
            backgroundImage: "url(//depthngreen.com/60535911577420090951723278816809053/IMG_1542-1000x750.jpg)",
          }}
        >
          <div className="text-center z-10">
            <h1 className="text-white">
              About <span className="primary-clr">Us</span>
            </h1>
            <h2 className="text-white">Aroma of Inspiration in Each Bite</h2>
          </div>
        </div>
      </div>
      <section>
        <div className="container mx-auto py-8">
          <div className="text-center py-3">
            <h3 className="text-3xl font-bold mb-8 relative main-h">
              OUR PHILOSOPHY
            </h3>
          </div>
          <div className="grid lg:grid-cols-2 mg:grid-cols-2 sm:grid-cols-1 box-gap">
            <div>
              <img
                src="//depthngreen.com/52560847016877017058058144444396526/IMG_1128-500x439.jpg"
                className="img-fluid w-100"
                alt=""
              />
            </div>
            <div>
              <p className="mb-3">
                "When you look deeply...you see - Inter-connectivity of
                Life...hence you make greener and sustainable choices in
                Life"...hence Depth n Green!
              </p>
              <p className="mb-3">
                Like if you cut trees haphazardly in one corner of the
                world...because of inter-connectivity of the world or
                life...it'd come back to you sooner or later and affect your
                world (global warming)!
              </p>
              <p className="mb-3">
                If you ignore Art, you can't live a wholesome life! If finer
                tastes are ignored, then society can't progress! If you overlook
                poverty, it might come out as rebellion! If you don't care for
                your health, this negligence would affect all other aspects of
                your life! If you look deeply (Meditate) you become conscious
                and start appreciating this Inner-Connectivity of Beings, and
                start making greener (healthier) choices in life :)
              </p>
              <p className="mb-4">
                Because of these integrative reasons, Depth n Green came into
                existence!
              </p>
              <p className="primary-clr">- Tarneiv...</p>
            </div>
          </div>
        </div>
      </section>

      {/* About view Modal */}
      <section className="bg-primary-clr py-10">
        <div className="container mx-auto text-center text-white pb-6">
          <div
            id="about-slider"
            className="carousel slide relative"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner relative w-full overflow-hidden md:h-80 mb-6">
              <div className="carousel-item active relative float-left w-full">
                <div className="mb-5 md:mx-20">
                  {/* <img
                    src="../../../assets/img/profile.jpg"
                    className="img-fluid w-20 h-20 mx-auto rounded-full mb-4"
                    alt=""
                  /> */}
                  <span className="font-semibold text-lg">Founder</span>
                  <p>
                    Every aspect of our life lived with awareness becomes a
                    meditation that can lead to peace & joy! It is this subtle
                    and profound principle that became an inspiration and
                    guiding light to our founder - Belly Master Tarneiv Ji to
                    create Depth 'N' Green.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <div className="mb-5 md:mx-20">
                  {/* <img
                    src="../../../assets/img/profile.jpg"
                    className="img-fluid w-20 h-20 mx-auto rounded-full mb-4"
                    alt=""
                  /> */}
                  <span className="font-semibold text-lg">Curater chef</span>
                  <p className="mb-3">
                    Pushpir Bhetia began his journey in the culinary arts by
                    establishing 'Guru the Caterer' (2004), Boston's number one
                    corporate catering company whose distinguished clientele
                    includes MIT, Harvard, Pfizer, Novartis, Microsoft, Biogen,
                    Genzyme, Mass General Hospital, and the likes. He moved to
                    India to take care of Depth 'N' Green (2015) and further the
                    vision of his master about serving delicious, healthy, and
                    nutritious food prepared from locally sourced produce in
                    collaboration with farmers from the Mysore region.
                  </p>
                  <p>
                    Pushpir - a food wizard, is passionate about organic
                    farming, fair trade, sustainability, and reinventing
                    traditional recipes in a contemporary fashion with an
                    emphasis on health and nutrition! He is also a fan of good
                    design and has meticulously crafted the ambiance of his
                    one-of-a-kind café in the heritage city of Mysore.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <div className="mb-5 md:mx-20">
                  {/* <img
                    src="../../../assets/img/profile.jpg"
                    className="img-fluid w-20 h-20 mx-auto rounded-full mb-4"
                    alt=""
                  /> */}
                  <span className="font-semibold text-lg">
                    Operations Manager
                  </span>
                  <p>
                    Usha Mishra hails from New Delhi and is an avid meditator. A
                    pillar of strength and support at Depth 'N' Green café, she
                    oversees the production, packing, and distribution of our
                    products. Enthusiastic about Indian food and traditional
                    pickles, she is an ever-smiling and popular presence at our
                    café. Her story is a remarkable transformation from a
                    housewife to an indispensable part of our team.
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-indicators flex justify-center p-0 mb-4">
              <button
                type="button"
                data-bs-target="#about-slider"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#about-slider"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#about-slider"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
          </div>
        </div>
      </section>
      </div>
  )
}

export default About;