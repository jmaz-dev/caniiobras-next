import React from "react";
import Link from "next/link";
import Image from "next/image";

const Cards = ({ title, backgroundImg, serviceUrl }) => {
  return (
    <>
      <div className="cardImage">
        <Image
          className="group-hover:opacity-10"
          src={backgroundImg}
          alt={title}
        />
        <div className="Details">
          <h2>{title}</h2>
          <div className="More">
            <Link href={serviceUrl}>
              <a className="Read-More">
                Saiba<span> Mais</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
