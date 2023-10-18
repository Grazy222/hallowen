import React, { Component } from "react";
import "./styles.css";
import Bruxa from "./Image/bruxa.png";
import Fada from "./Image/fada.png";
import Fantasma from "./Image/fantasma.png";
import Vampiro from "./Image/vampiro.png";
import Zumbi from "./Image/zumbi.png";
import Pirata from "./Image/pirata.png";

export default class App extends Component {
  render() {
    return (
      <div>
        <header>
          <div>
            <h1>Hallowen VnW</h1>
          </div>
        </header>
        <main>
          <section>
            <figure>
              <img src={Bruxa} alt="Bruxa" />
              <figcaption>Bruxa</figcaption>
            </figure>
            <figure>
              <img src={Fantasma} alt="Fantasma" />
              <figcaption>Fantasma</figcaption>
            </figure>
            <figure>
              <img src={Vampiro} alt="vampiro" />
              <figcaption>Vampiro</figcaption>
            </figure>
            <figure>
              <img src={Zumbi} alt="zumbi" />
              <figcaption>Zumbi</figcaption>
            </figure>
            <figure>
              <img src={Fada} alt="fada" />
              <figcaption>Fada</figcaption>
            </figure>
            <figure>
              <img src={Pirata} alt="pirata" />
              <figcaption>Pirata</figcaption>
            </figure>
          </section>
        </main>
      </div>
    );
  }
}
