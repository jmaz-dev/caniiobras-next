import Image from "next/image";
import Link from "next/link";
import MarmImg from "../public/assets/marmore01.png";

const marmoraria = () => {
  return (
    <>
      <div className="w-full lg:h-screen p-2">
        <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full items-center">
          <div className="p-16 tracking-widest">
            <h1>Mármores e Granitos</h1>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 justify-center items-center">
            <div className="text-xl w-full text-gray-600 leading-8 ">
              <p className="text-justify">
                Super em alta quando o assunto é decoração e inovação, esses
                materiais podem ser usados em diversos ambientes. As vantagens
                são a beleza, resistência e praticidade, pois facilitam muito o
                asseio diariamente. A utilização de mármores e granitos na
                decoração de ambientes internos e externos é definitivamente uma
                tendência.
              </p>
              <div className="text-xl">
                Para mais informações e orçamentos:
                <Link href="/#contato">
                  <span className="font-semibold cursor-pointer pb-4">
                    {" "}
                    Contate-nos
                  </span>
                </Link>
              </div>
            </div>
            <div className="p-8 self-center">
              <Image
                className="p-2 hover:scale-105 ease-in duration-300 shadow-xl shadow-gray-800 drop-shadow-md"
                src={MarmImg}
                alt="Marmoraria"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default marmoraria;
