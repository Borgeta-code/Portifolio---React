import { React, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { sendMail } from "../services/sendMail";

export function Form() {
  const [nome, setNome] = useState("");
  const [email, setMail] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    if (!nome || !email || !message) {
      toast.error("Preencha todos os campos!", {
        style: {
          background: "#000012",
          color: "#f7f7f7",
          border: "2px solid #8800f0",
        },
        iconTheme: {
          primary: "#8800f0",
          secondary: "#ffffff",
        },
      });
      return;
    }

    try {
      await sendMail(nome, email, message);
      setNome("");
      setMail("");
      setMessage("");
      toast.success("Sua mensagem foi enviada!", {
        style: {
          background: "#000012",
          color: "#f7f7f7",
          border: "2px solid #8800f0",
        },
        iconTheme: {
          primary: "#8800f0",
          secondary: "#ffffff",
        },
      });
    } catch {
      toast.error("Ocorreu um erro, tente novamente!", {
        style: {
          background: "#000012",
          color: "#f7f7f7",
          border: "2px solid #8800f0",
        },
        iconTheme: {
          primary: "#8800f0",
          secondary: "#ffffff",
        },
      });
    }
  }

  return (
    <div className="flex justify-center items-center">
      <Toaster position="bottom-right" />
      <form
        onSubmit={handleSubmit}
        className="flex w-max flex-col justify-center items-center md:p-3"
      >
        <div id="containerInput" className="flex justify-center mb-4">
          <label>Nome</label>
          <input
            type="text"
            value={nome}
            onChange={({ target }) => setNome(target.value)}
          />
        </div>
        <div id="containerInput" className="flex justify-center mb-4">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={({ target }) => setMail(target.value)}
          />
        </div>
        <div id="containerInput" className="flex justify-center mb-4">
          <label>Message</label>
          <textarea
            value={message}
            onChange={({ target }) => setMessage(target.value)}
          />
        </div>

        <div id="button-container">
          <div id="allsides-2">
            <button id="button">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}