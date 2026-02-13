import React from 'react';
import img3 from '../../../assets/nuestros-camiones-3.jpg';
import img4 from '../../../assets/nuestros-camiones-4.jpg';
// import img6 from '../../../assets/nuestros-camiones-6.jpg';
import img6 from '../../../assets/presentacion.jpg';
import './home.css';
const Home = () => {
  return (
    <div className='home'>
      <section className='home-hero' aria-label='Presentación'>
        <div className='home-hero__media'>
          <img src={img6} alt='Camión afuera del depósito' />
          <div className='home-hero__overlay' aria-hidden='true' />
        </div>

        <div className='home-hero__content container'>
          <div className='home-hero__stack'>
            <h1 className='home-hero__title'>
              La opción segura y confiable para tus necesidades de transporte
            </h1>
          </div>
        </div>
      </section>
      {/* <div className='container-1'>
        <div className='container-1-text'>
          <p className='container-1-text__title'>TRANSPORTE RICO HNOS</p>
          <p className='container-1-text__description'>
            Contamos con sede en Buenos Aires, cuenta con una flota moderna de 6
            camiones, especializados en el transporte de todo tipo de cargas,
            incluyendo las químicas y peligrosas. Nuestra experiencia y
            compromiso garantizan la seguridad y puntualidad en cada entrega.
            ¿Tiene un envío especial o necesita una cotización? No dude en
            consultarnos, estamos aquí para servirle.
          </p>
        </div>
        <div className='container-1-img'>
          <img src={img6} alt='' />
        </div>
      </div> */}

      <section className='home-banner' aria-label='Mensaje'>
        <div className='home-banner__media'>
          <img src={img4} alt='Camión en ruta' />
          <div className='home-banner__overlay' aria-hidden='true' />
        </div>
        <div className='home-banner__content container'>
          <p className='home-banner__quote'>
            "Tu carga, nuestro compromiso: Transporte Rico Hnos."
          </p>
        </div>
      </section>

      <section className='home-contact' aria-label='Contacto rápido'>
        <div className='home-contact__inner container'>
          <div className='home-contact__card'>
            <h2 className='home-contact__title'>¡QUEREMOS SABER DE USTED!</h2>
            <ul className='home-contact__list'>
              <li>Entre Rios 1938</li>
              <li>(11) 5329-6741 / (11) 5615-4005</li>
              <li>info@transportericohnos.com</li>
            </ul>
          </div>

          <div className='home-contact__media'>
            <img src={img3} alt='Camión de la flota' />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
