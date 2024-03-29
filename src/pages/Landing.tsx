import React from 'react';
import logoImg from '../images/Logo.svg';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import '../styles/pages/landing.css';

function Landing() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <Link to="" className="enter-landing">
          <img src={logoImg} alt="Happy"/>
        </Link>

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <div className="location">
          <strong>São Paulo</strong>
          <span>São José dos Campos</span>
        </div>

        <Link to="/app" className="enter-app">
          <FiArrowRight 
            className="font-left"
            size={26} 
            color="rgba(0, 0, 0, 0.6)"
          />
        </Link>
      </div>
    </div>
  );
}

export default Landing;