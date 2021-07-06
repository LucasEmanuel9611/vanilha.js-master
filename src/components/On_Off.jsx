import React, { useState } from "react";
import desligada from "../assets/desligada.jpg";
import ligada from "../assets/ligada.jpg";
//import quebrada from "../assets/quebrada.jpg"
import "./styles.css";

function On_Off() {
  const [Cont, SetCont] = useState(0);

  function On() {
    SetCont(Cont + 1);
  }

  function Off() {
    SetCont(Cont * 0);
  }

  function Estado(Cont) {
    if (Cont == 0) {
      return <img src={desligada} alt="desligada" />;
    }

    if (Cont > 0) {
      return <img src={ligada} alt="ligada"></img>;
    }
  }

  return (
    
      <div class="cartao">
          <h1>Lâmpada</h1>
        <h2 className="img">{Estado(Cont)}</h2>

        <button
          onClick={() => {
            On();
          }}
        >
          acender
        </button>

        <button
          onClick={() => {
            Off();
          }}
        >
          apagar
        </button>
      </div>
  );
}

export default On_Off;
