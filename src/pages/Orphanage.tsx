import React from 'react';
import '../styles/pages/orphanage.css';
import { FiClock, FiAlertCircle } from 'react-icons/fi';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export default function Orphanage() {
  return (
    <div id="page-orphanage">
      <div className="context">
        <img src="../../../images/temp/main.png" alt="Main image" className="main-image"/>

        <div className="sub-images">
          <img src="" alt="img1"/>
          <img src="" alt="img2"/>
        </div>

        <div className="content">
          <h1>Orf. Esperança</h1>
          <p>Presta assostência a crianças de 06 a 15 anos que se encontre em situação de 
            risco e/ou vulnerabilidade social.</p>
          
          <hr/>

          <h2>Intruções para visita</h2>
          <p>Venha como se sentir a vontade e traga muito amor e paciência para dar.</p>

          <div className="warning-messages">
            <div className="warning">
              <FiClock/>
              <p className="custom-label">
                Horário de visitas<br/>
                Das 8h até 18h
              </p>
            </div>
            <div className="another-warning">
              <FiAlertCircle/>
              <p className="custom-label">
                Atendemos<br/>
                fim de semana
              </p>
            </div>
          </div>

          <Link to="" className="enter-wpp">
            <AiOutlineWhatsApp/>
            Entrar em contato
          </Link>
        </div>
      </div>
    </div>
  );
}