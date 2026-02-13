import './styles.css';

import React from 'react';
import ContactForm from '../../contactForm';

const ContactUs = () => {
  return (
    <section className='contact-page' aria-label='Contacto'>
      <div className='contact-form container'>
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactUs;
