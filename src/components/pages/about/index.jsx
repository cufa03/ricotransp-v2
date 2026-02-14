import React from 'react';
import image from '../../../assets/truck.png';
import './styles.css';

const AboutSection = () => {
  return (
    <div className='about__container img__background'>
      <div className='img__container'>
        <div className='about_img__container1'>
          <img alt='Ford working truck' src={image} />
        </div>
      </div>

      <div className='about__description'>
        <div>
          <h2>NUESTRA EMPRESA</h2>
          <br />
          <p className='text__description'>
            En Transporte Rico Hnos, nuestra historia se basa en el compromiso
            con la excelencia y la satisfacción del cliente. Desde nuestros
            humildes comienzos como una empresa familiar, hemos crecido hasta
            convertirnos en un líder en el sector logístico. Nuestro equipo
            altamente capacitado y nuestras modernas flotas de transporte nos
            permiten ofrecer soluciones personalizadas y eficientes para cada
            uno de nuestros clientes. Nuestro enfoque es construir relaciones
            duraderas y ser reconocidos por nuestra calidad de servicio y
            profesionalismo en cada entrega.
          </p>
        </div>
        <div>
          <p className='title'>PORQUE SOMOS DIFERENTES</p>
          <p className='text__description'>
            En Transporte Rico Hnos, marcamos la diferencia a través de nuestra
            dedicación inquebrantable a la calidad y la atención al detalle. Nos
            destacamos por nuestra puntualidad, confiabilidad y la pasión que
            ponemos en cada envío. Nuestra amplia red de rutas y nuestra
            tecnología de vanguardia garantizan una logística fluida y un
            seguimiento preciso de tus mercancías. Además, nuestro equipo de
            expertos está siempre dispuesto a brindarte asesoramiento
            personalizado y soluciones a medida para tus necesidades
            específicas. Cuando eliges Transporte Rico Hnos, eliges un socio de
            confianza que te llevará al siguiente nivel en el mundo del
            transporte y la logística.
          </p>
        </div>
        <div>
          <p className='title'>VALORES</p>
          <p className='text__description'>
            En{' '}
            <button
              type='button'
              className='tooltip-link'
              data-tool-tip='Lideres en el mercado '
            >
              Transporte Rico Hnos
            </button>{' '}
            compartimos los siguientes valores que nos guían diariamente hacia
            la total satisfacción de nuestros clientes y que constituyen nuestra
            carta de navegación. Estos son algunos de los valores que
            constituyen nuestra carte de navegación:
          </p>
          <p className='text__description'>
            * Enfoque al cliente
            <br />
            * Pasión por nuestro trabajo
            <br />
            * Compromiso con la calidad del servicio y con el desarrollo del
            capital humano
            <br />* Innovación permanente
          </p>
          <p className='text__description'>
            Para orientarnos a cumplir nuestra visión, sustentar la misión y
            afianzar nuestros valores, hemos formulado un compromiso con la
            calidad que se cristaliza mediante la implementación, mantenimiento
            y mejora continua de un Sistema de Gestión de la Calidad acorde a
            los requerimientos de la Norma ISO 9001, versión vigente.
          </p>
        </div>
      </div>

      <div className='about_img__container2'>
        <img alt='Ford working truck' src={image} />
      </div>
    </div>
  );
};

export default AboutSection;
