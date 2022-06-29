import Link from "next/link";

const construcao = () => {
  return (
    <>
      <div className="w-full lg:h-screen p-2">
        <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full items-center">
          <div className="p-16 tracking-widest">
            <h1>Construção Civil</h1>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 justify-center items-center">
            <div className="text-xl w-full text-gray-600 leading-8 ">
              <p className="text-justify">
                A área de Construção Civil abrange todas as atividades de
                produção de obras. Estão incluídas nesta área as atividades
                referentes às funções planejamento e projeto, execução e
                manutenção e restauração de obras em diferentes segmentos, tais
                como obras de saneamento, de fundações e de terra em geral.
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
              <img
                className="p-2 hover:scale-105 ease-in duration-300 shadow-xl shadow-gray-800 drop-shadow-md"
                src="/../assets/casacontru.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default construcao;
