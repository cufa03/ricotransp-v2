import React from 'react';
import './newFooter.css';
import { BsHouse } from 'react-icons/bs';
import { BiMap } from 'react-icons/bi';
import { BsTelephone } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';

const NewFooter = () => {
  return (
    <div className='footer'>
      <div className='footer__container__top container'>
        <div className='footer__info'>
          <div className='footer__info__title'>
            <BsHouse className='footer__icon--xxlarge' />
            <p>SUCURSAL</p>
          </div>
          <div className='footer__info__description'>
            <div className='footer__info__description__item'>
              <BiMap className='footer__icon--xlarge' />
              <p className='footer__info__description__item__title'>
                Dirección:
              </p>
              <p>Entre Ríos 1839.</p>
            </div>
            <div className='footer__info__description__item'>
              <AiOutlineMail className='footer__icon--xlarge' />
              <p className='footer__info__description__item__title'>Email:</p>
              <p>info@transportericohnos.com</p>
            </div>
            <div className='footer__info__description__item'>
              <BsTelephone className='footer__icon--xlarge' />
              <p className='footer__info__description__item__title'>
                Telefono:
              </p>
              <p>(11) 5329-6741 / (11) 5615-4005</p>
            </div>
          </div>
        </div>
        <div className='footer__work__time'>
          <h3>Horarios:</h3>
          <div>
            <p>Lunes a Viernes de 9 hs. - 18 hs.</p>
          </div>
        </div>
      </div>
      <div className='bottom__line' />
      <div className='footer__container__bottom container'>
        <p>Rico Hnos Transporte</p>
      </div>
    </div>
  );
};

export default NewFooter;
