import Link from "next/link";

const reformas = () => {
  return (
    <div className="w-full h-full p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full items-center">
        <div className="p-16 tracking-widest">
          <h1>Reformas Residenciais e Comerciais</h1>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1">
          <div className="text-xl w-full text-gray-600 leading-8">
            <ul className="text text-gray-500">
              <li>Serviços De Hidráulica</li>
              <li>Elétrica Residencial E Predial</li>
              <li>Lareiras E Churrasqueiras</li>
              <li>Azulejos, Pastilhas De Vidro</li>
              <li>Pinturas E Texturas</li>
              <li>Pisos, Porcelanatos, Laminados</li>
              <li>Serviços De Gesso E Drywall</li>
              <li>Raspagem E Recuperação De Assoalhos E Tacos</li>
            </ul>
           
          </div>
          <div className="image p-4">
            <img
              src="/../assets/reformimg2.png"
              alt=""
              className="p-2 hover:scale-105 ease-in duration-300 shadow-xl shadow-gray-800 drop-shadow-sm w-[90%]"
            />
            <div className="text-xl w-full text-gray-600 leading-8 pt-4">
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
    // <div className='row'>
    //   <div className='text'>
    //     <h1>Reformas Residenciais e Comerciais</h1>
    //     <p><ul>
    //       <li>Serviços De Hidráulica</li>
    //       <li>Elétrica Residencial E Predial</li>
    //       <li>Lareiras E Churrasqueiras</li>
    //       <li>Azulejos, Pastilhas De Vidro</li>
    //       <li>Pinturas E Texturas</li>
    //       <li>Pisos, Porcelanatos, Laminados</li>
    //       <li>Serviços De Gesso E Drywall</li>
    //       <li>Raspagem E Recuperação De Assoalhos E Tacos</li>
    //     </ul></p>

    //   </div>
    //   <div className='image'>
    //     <img src={RefImg} alt="" />
    //     <p className='text'>
    //       Para mais informações e orçamentos: <Link to="/#contato" >Contate-nos</Link></p>
    //   </div>

    // </div>
  );
};

export default reformas;
