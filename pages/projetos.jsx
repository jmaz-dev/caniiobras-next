import React from "react";
import Link from "next/link";

const projetos = () => {
  return (
    <div className="w-full h-full p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full items-center">
        <div className="p-16 tracking-widest">
          <h1>Projetos 3D</h1>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1">
          <div className="text-xl w-full text-gray-600 leading-8">
            <p>
              Com a maquete realizada, é possível fazer com que a representação
              se aproxime muito do desejo do cliente, eliminando as chances de
              erros no andamento do projeto e garantindo resultados
              satisfatórios. Com isso, economiza-se tempo e recursos, além de
              elevar a satisfação pela proximidade entre planejamento e os
              resultados. Vale salientar que, em geral, um projeto 3D pode ser
              utilizado para produzir:
            </p>
            <ul className="text text-gray-500">
              <li>A Fachada Da Casa</li>
              <li>O Telhado</li>
              <li>As Laterais</li>
              <li>O Interior Do Imóvel</li>
              <li>Os Móveis</li>
              <li>Entre Outros Elementos</li>
            </ul>
          </div>
          <div className="image">
            <img
              src="/../assets/projetoimg.jpeg"
              alt=""
              className="p-2 hover:scale-105 ease-in duration-300 shadow-xl shadow-gray-800 drop-shadow-sm w-[90%]"
            />
            <div className="text-xl w-full text-gray-600 leading-8 pt-4">
              <p>
                A aplicação dependerá daquilo que os profissionais pretendem
                representar. De todo modo, sempre é muito vantajoso ter uma
                noção de como ficarão todos os projetos, podendo alterar com
                mais facilidade conforme o gosto do cliente.
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default projetos;
