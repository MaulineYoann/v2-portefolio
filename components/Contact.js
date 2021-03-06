/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/no-unescaped-entities */
import React, { useState, useRef } from 'react';
import styles from '../styles/Contact.module.scss';
import { send } from 'emailjs-com';

const Contact = () => {
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleName = (e) => setName(e.target.value);
  const handleMail = (e) => setMail(e.target.value);
  const handleSubject = (e) => setSubject(e.target.value);
  const handleMessage = (e) => setMessage(e.target.value);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    // emailjs
    send('service_yof2avg', 'template_tn4tffp', toSend, 'zpjhzWCiG5JCfzIPc')
      .then((response) => {
        console.log('Succes !', response.status, response.text);
      })
      .catch((err) => {
        console.log('failed...', err);
      });
  };
  return (
    <section className={styles.Contact}>
      <aside className={styles.form}>
        <h1>Contact</h1>
        <p>
          Un projet ? une mission ? N'hésitez pas à me contacter sur{' '}
          <span>
            <a
              href="https://www.linkedin.com/in/yoann-mauline/"
              target="_blank"
            >
              Linkedin
            </a>
          </span>{' '}
          où à travers le formulaire ci-dessous je vous répondrai dans les plus
          brefs délais.
        </p>
        <form ref={form} onSubmit={sendEmail} className={styles.contactForm}>
          <input
            placeholder="Nom"
            type="text"
            name="name"
            required
            value={name}
            onChange={handleName}
          />

          <input
            placeholder="E-mail"
            type="email"
            name="name"
            required
            value={mail}
            onChange={handleMail}
          />

          <input
            placeholder="Objet"
            type="text"
            name="subject"
            required
            value={subject}
            onChange={handleSubject}
          />

          <textarea
            placeholder="Votre texte ici ..."
            name="message"
            required
            value={message}
            onChange={handleMessage}
          ></textarea>

          <input type="submit" value="Envoyer" className={styles.submit} />
        </form>
      </aside>
    </section>
  );
};

export default Contact;
