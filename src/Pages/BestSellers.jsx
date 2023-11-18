import { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const BestSellers = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://mocki.io/v1/84515102-9604-4489-8cb2-4328b6b66bcf")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const bestSellers = products.filter((item) => item.status === "Best Selers");


  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-28 px-4">
      <div className="text-center">
        <h2 className="text-3xl font-semibold capitalize mb-5">Best Sellers</h2>
        <p className="text-black/75 capitalize md:w-2/3 mx-auto mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus arcu
          nunc, fermentum quis sapien in, placerat scelerisque risus. Class
          aptent taciti sociosqu ad litora torquent per{" "}
        </p>
      </div>

      {/* best seller products card */}
      <div className="mb-16">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {bestSellers.map((product) => (
            <SwiperSlide key={product.id}>
              <Link to={`/shop/${product.id}`}>
                <img src={product.image} alt="" />
              </Link>
              <div>
                <h1 className="text-lg font-semibold text-gray-800">
                  {product.title}
                </h1>
                <div className="flex justify-between">
                  <p className="text-gray-500 font-semibold">
                    {product.category}
                  </p>
                  <p className="text-gray-900 font-bold">${product.price}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BestSellers;
