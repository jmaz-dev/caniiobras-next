import Link from 'next/link'

const eletrica = () => {
  return (
    <>
      <div className="w-full lg:h-screen p-2">
        <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full items-center">
          <div className="p-16 tracking-widest">
            <h1>Serviços de Elétrica</h1>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 justify-center items-center">
            <div className="text-xl w-full text-gray-600 leading-8 ">
              <p className="text-justify">
              Desenvolvimento do projeto desde instalações elétricas até a implementação, documentação, identificação dos quadros e disjuntores através de nossos engenheiros e eletricistas seguindo sempre os padrões e normativas exigidas em uma prestação de serviços especializada.
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
                src="/../assets/serveletrica.png"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default eletrica