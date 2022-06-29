//Cards assets
import ConstHome from "../public/assets/constru.jpeg";
import ProjHome from "../public/assets/proj-3d.jpeg";
import MovPlanHome from "../public/assets/mov-planej.jpeg";
import ReforHome from "../public/assets/reformas.jpeg";
import MarmHome from "../public/assets/marmoraria.jpeg";
import VidHome from "../public/assets/vidracaria.jpeg";
import EletHome from "../public/assets/eletrica.jpeg";
import OrcHome from "../public/assets/orca.png";

//Cards component
import Cards from "./Cards";

const Servicos = () => {
  return (
    <div id="servicos" className="w-full lg:h-screen p-2 ">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full items-center">
        <section>
          <div className="pb-16 tracking-widest">
            <h1 className="">Nossos Serviços</h1>
            
          </div>
        </section>

        <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-center items-center">
          <Cards
            className="m-0 grid justify-center items-center"
            title="Construção"
            backgroundImg={ConstHome}
            serviceUrl="/construcao"
          />
          <Cards
            title="Projetos 3D"
            backgroundImg={ProjHome}
            serviceUrl="/projetos"
          />
          <Cards
            title="Moveis Planejados"
            backgroundImg={MovPlanHome}
            serviceUrl="/moveisplan"
          />
          <Cards
            title="Reformas"
            backgroundImg={ReforHome}
            serviceUrl="/reformas"
          />
          <Cards
            title="Marmoraria"
            backgroundImg={MarmHome}
            serviceUrl="/marmoraria"
          />
          <Cards
            title="Vidraçaria"
            backgroundImg={VidHome}
            serviceUrl="/vidracaria"
          />
          <Cards
            title="Elétrica"
            backgroundImg={EletHome}
            serviceUrl="/eletrica"
          />
          <Cards
            title="Orçamentos"
            backgroundImg={OrcHome}
            serviceUrl="/#contato"
          />
        </section>
      </div>
    </div>
  );
};

export default Servicos;
