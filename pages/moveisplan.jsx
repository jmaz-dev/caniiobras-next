//Swiper React components
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

//Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
//Carousel Assets
import Plan01 from "../public/assets/project01.png";
import Plan02 from "../public/assets/project02.png";
import Plan03 from "../public/assets/project03.png";

//next
import Image from "next/image";
import Link from "next/link";

const moveisplan = () => {
  return (
    <div className="w-full h-full p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full items-center">
        <div className="p-16 tracking-widest">
          <h1>Móveis Planejados</h1>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 items-center justify-center">
          <div className="text-xl w-full text-gray-600 leading-8 pt-4p-2">
            <p>
              Os móveis planejados estão cada vez mais em alta, no projeto,
              utilizamos as melhores marcas e damos prioridade à qualidade e a
              durabilidade dos materiais somado a praticidade que conferem a ao
              local, especialmente em casas e apartamentos. Além de poderem
              expressar todo o bom gosto dos moradores, os móveis feitos sob
              medida trazem harmonização para os ambientes. É na verdade, uma
              expressão da moda, pois também se adapta a novas tendências e
              estratégias para deixar ambientes cada vez mais modernos e
              otimizados.
            </p>
            <div>
              Para mais informações e orçamentos:
              <Link href="/#contato">
                <span className="font-semibold cursor-pointer pb-4">
                  {" "}
                  Contate-nos
                </span>
              </Link>
            </div>
          </div>
          <div className="p-4 rounded-lg">
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
                className="mySwiper2 hover:scale-105 ease-in duration-300 shadow-gray-700 shadow-xl drop-shadow-sm rounded-lg"
              >
                <SwiperSlide>
                  <Image src={Plan01} />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src={Plan02} />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src={Plan03} />
                </SwiperSlide>
              </Swiper>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default moveisplan;
