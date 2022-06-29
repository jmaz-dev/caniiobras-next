//Swiper React components
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

//Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";

//Carrousel assets
import ImgCoz from "../public/assets/coz1.png";
import ImgWin from "../public/assets/window.png";
import ImgBan from "../public/assets/banheiro.png";
import Image from "next/image";

const Home = () => {
  return (
    <div id="home" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full pt-20">
        <section>
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            spaceBetween={30}
            effect={"fade"}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            modules={[EffectFade, Navigation, Pagination, Autoplay]}
            className="mySwiper2"
          >
            <SwiperSlide>
              <Image src={ImgWin} />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={ImgCoz} />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={ImgBan} />
            </SwiperSlide>
          </Swiper>
        </section>
      </div>
    </div>
  );
};
export default Home;
