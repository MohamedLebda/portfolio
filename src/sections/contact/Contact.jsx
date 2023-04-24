import "./contact.css"
import Card from '../../components/Card'
import {AiOutlineMail, AiFillLinkedin, AiOutlineWhatsApp} from 'react-icons/ai'
import React, {useState, useRef} from "react";
import {useFormik} from "formik";
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';

const Contact = () => {
  
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    onSubmit: (values) => {
      setLoading(true);
      emailjs.sendForm('service_rr3ydga', 'template_jvfu9p9', formRef.current, 'gPIVo2E3WmYCt2Lj9')
        .then((result) => {
            formik.resetForm();
            setMessage("Message sent successfully!");
        }, (error) => {
            setMessage("Error sending message.");
        })
        .finally(() => {
          setLoading(false);
          setTimeout(() => {
            setMessage(null);
          }, 10000);
        });
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      message: Yup.string().required("Required"),
    }),
  });


  return (
     <section id='contact'>
     <h2>Contact Me</h2> 

     <div className="container contact__container">
      <div className="contact__option">
        <Card className="contact__option">
          <AiOutlineMail className="contact__option-icon"/>
          <h4>Email</h4>
          <h5>m.lebda100@gmail.com</h5>
          <a href="mailto: m.lebda100@gmail.com" >
            Send a message
          </a>
        </Card>
        <Card className="contact__option">
          <AiFillLinkedin className="contact__option-icon"/>
          <h4>Linked In</h4>
          <h5>Mohamed Lebda</h5>
          <a href="https://www.linkedin.com/in/mohamed-l-8818251b8/" target="_blank"  rel="noreferrer">
            Send a message
          </a>
        </Card>
        <Card className="contact__option">
          <AiOutlineWhatsApp className="contact__option-icon"/>
          <h4>WhatsApp</h4>
          <a href="https://wa.me/201018750347" target="_blank"  rel="noreferrer">
            Send a message
          </a>
        </Card>
      </div>
      {message && <div className={`message ${message.includes("Error") ? "afterMessage error" : "afterMessage success"}`}>{message}</div>}
          <form ref={formRef} onSubmit={formik.handleSubmit}>

                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  disabled={loading}
                  {...formik.getFieldProps("name")}
                  />
                {formik.errors.name?  <div className="error__msg">{formik.errors.name}</div>:<div className="error__msg"></div> }
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="email@address.com"
                  disabled={loading}
                  {...formik.getFieldProps("email")}
                />
                {formik.errors.email?  <div className="error__msg">{formik.errors.email}</div>:<div className="error__msg"></div> }
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  disabled={loading}
                  {...formik.getFieldProps("message")}
                />
                {formik.errors.message?  <div className="error__msg">{formik.errors.message}</div>:<div className="error__msg"></div> }
              <button type="submit" id="submitBtn" className="btn primary"  disabled={loading} >
              {loading ? 'Sending...' : 'Submit'}
              </button>
          </form>
     </div>
    </section>
      
      );
};

export default Contact;
