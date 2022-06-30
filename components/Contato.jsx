import Link from "next/link";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Mapa from "./Mapa";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contato = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4fjx5r8",
        "template_yb3pzh6",
        form.current,
        "3szbibQlGKy4HziCO"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Email Sent",
      showConfirmButton: false,
      timer: 1500,
    });
    e.target.reset();
  };

  return (
    <>
      <div id="contato" className="w-full h-full p-2 ">
        <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full items-center">
          <div className="p-16  tracking-widest">
            <h1>Contato</h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center">
            {/* Esquerda */}
            <div className="form justify-center">
              <form ref={form} onSubmit={sendEmail} className="form__content">
                <div className="form__box">
                  <input
                    required
                    type="text"
                    className="form__input"
                    placeholder="Nome"
                    name="name"
                  />

                  <div className="form__shadow"></div>
                </div>
                <div className="form__box">
                  <input
                    required
                    name="email"
                    type="email"
                    className="form__input"
                    placeholder="E-mail"
                  />

                  <div className="form__shadow"></div>
                </div>
                <div className="form__box">
                  <input
                    name="subject"
                    required
                    type="text"
                    className="form__input"
                    placeholder="Assunto"
                  />

                  <div className="form__shadow"></div>
                </div>
                <div className="form__box">
                  <textarea
                    name="message"
                    required
                    type="text"
                    className="form__input"
                    placeholder="Mensagem"
                  />

                  <div className="form__shadow"></div>
                </div>

                <div className="form__button">
                  <button className="form__submit">Enviar</button>
                </div>
              </form>
            </div>
            {/* Direita */}
            <div className="p-8">
              <Mapa />
            </div>
          </div>
          {/* fim da pagina */}
          <div className="flex justify-center py-12">
            <Link href="/#home">
              <div className="rounded-full shadow-lg shadow-grat-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <HiOutlineChevronDoubleUp
                  className="m-auto text-[#022043]"
                  size={20}
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contato;
