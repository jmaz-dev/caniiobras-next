import React from "react";

const Footer = () => {
  return (
    <div>
      <div className=" bg-white py-3 text-gray-500 text-sm  md:text-xl leading-8">
        <div>
          <div className="md:flex block md:flex-row md:justify-between my-2 mx-4 items-center">
            <p>&copy; 2022 CaniiObras <span className="">Todos os direitos reservados</span>
              
            </p>
            <i>
              Design by:
              <a
                href="https://www.linkedin.com/in/jmazeredo/"
                target="_blank"
                rel="noreferrer"
                className="font-semibold pl-1"
              >
                JMAzer
              </a>
            </i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
