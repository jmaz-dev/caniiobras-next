import Image from "next/image";
import Link from "next/link";
import VidImg from "../public/assets/vidraca01.png";

const vidracaria = () => {
  return (
    <>
      <div className="w-full lg:h-screen p-2">
        <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full items-center">
          <div className="p-16 tracking-widest">
            <h1>Serviços de Vidraçaria</h1>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 justify-center items-center">
            <div className="text-xl w-full text-gray-600 leading-8 ">
              <p className="text-justify">
                Serviços de Vidraçaria, com especialização em espelhos,
                fechamento de coberturas, divisórias de vidro, reformas
                residenciais e Serviços de Serralheria em Alumínio, o que há de
                melhor e mais leve para sua segurança e decoração de seus
                ambientes.
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
                src={VidImg}
                alt="Vidraçaria"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default vidracaria;
