import React from "react";
import '../styles/style.css';


const Welcome = () => {
  return (
    <div className="container">
      <div class="header-bar">
        <div class="buttons">
          <button class="button-login">Log in</button>
        </div>
      </div>
      <div class="page">
        <div class="bienvenido">
          <h1>Bienvenido!</h1>
        </div>
      </div>
      <div class="texto-bienvenida">
        <h1 class="bienvenido-text">Texto de bienvenida</h1>
        <div class="bienvenido-underbar"></div>
        <p class="text">
          Bienvenido a su Sistema integral de procesos academicos.
          SIPA es la plataforma que eliminará sus dolores de cabeza,
          le permite manejar todos sus procesos academicos de una forma facil,
          intuitiva y eficiente. Nuestra plataforma le ofrece la posibilidad de
          conectarse desde cualquier lugar del mundo solamente requiriendo que usted posea conexión a internet.
          <br /><br />Posteriormente SIPA es capaz de adaptarse a gran parte de los procesos
          academicos realizados en todas las instituciones academicas a nivel nacional.
          <br /><br />De igual forma, el estudiante siempre será capaz de consultar informaciones claves de una forma rápida
          , como es el caso de su índice academico o consultar su horario academico, en cualquier momento.
        </p>
      </div>
    </div>

  );
}

export default Welcome;