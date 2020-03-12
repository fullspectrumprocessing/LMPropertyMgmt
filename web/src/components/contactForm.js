import React, { useReducer } from 'react';
import { navigateTo } from 'gatsby-link';
import styles from "./contactForm.module.css"



export const ContactForm = () => {
  // function that maps through the data that will be sent through netlify
  function encode(data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  }

  // setting inital state to empty strings
  const [state, updateState] = useReducer(
    (state, newstate) => ({ ...state, ...newstate }),
    { name: '', email: '', subject: '', message: '' }
  );
  const { name, email, subject, message } = state;

  // submit function that sends data to Netlify
  function submission(e) {
    e.preventDefault();

    if (state) {
      console.log(state, 'this is state');
      //if state is populated send data to netlefy
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'contact',
          ...state,
        }),
      })
        // then go to thank you page
        .then(() => navigateTo('/thankyou'))
        .catch(error => alert(error));
    }
  }

  return (
    <>
    <div className={styles.formContainer}>
      <div className={styles.formWrap}>
        {/* <Fade right> */}
          <form className={styles.styledForm}
            onSubmit={submission}
            className="form"
            // attributes to connect to netlify
            data-netlify-honeypot="bot-field"
            method="post"
            action="/"
            data-netlify="true"
            name="contact"
          >
            <h2 className={styles.h2}>Contact Us</h2>

            {/* netlify form configuration hidden inputs */}
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />

            <input className={styles.styledInput}
              name="name"
              value={name}
              placeholder="Name"
              label="Name"
              type="text"
              onChange={e => updateState({ name: e.target.value })}
            />
            <input className={styles.styledInput}
              name="email"
              value={email}
              placeholder="Email"
              label="Email"
              type="email"
              onChange={e => updateState({ email: e.target.value })}
            />
            <input className={styles.styledInput}
              name="subject"
              value={subject}
              placeholder="Subject"
              label="Subject"
              type="text"
              onChange={e => updateState({ subject: e.target.value })}
            />
            <textarea className={styles.styledArea}
              type="textarea"
              name="message"
              value={message}
              placeholder="Message"
              label="Message"
              type="text"
              onChange={e => updateState({ message: e.target.value })}
            />
            <button className={styles.styledButton} type="submit">Submit</button>
          </form>
         {/* </Fade> */}
      </div>
      </div>
    </>
  );
};

export default ContactForm
