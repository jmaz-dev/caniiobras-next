import React from "react";

const Footer = () => {
  return (
    <div>
      <div className=" bg-white py-3 text-gray-500 text-xl leading-8">
        <div>
          <div className="flex justify-between my-2 mx-8">
            <p>&copy;CaniiObras - Todos os direitos reservados</p>
            <i>
              Design by:
              <a
                href="https://www.linkedin.com/in/jmazeredo/"
                target="_blank"
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
