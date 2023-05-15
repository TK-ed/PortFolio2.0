import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./contact.css";
import { TfiEmail } from "react-icons/tfi";
import { FaDiscord } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { NotificationManager } from "react-notifications";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_rx20yo6",
        "template_fow73dy",
        form.current,
        "yrdLNwbctkqA0TVRm" //  k1kb3gf4qsEQRdldmbx_M
      )
      .then(
        (result) => {
          // console.log(result);
          if (result.status === 200) {
            NotificationManager.success("Message sent successfully");
          }
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <TfiEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>justtk11@proton.me</h5>
            <a href="mailto:justtk11@proton.me" target="_blank">
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <FaDiscord className="contact__option-icon" />
            <h4>Discord</h4>
            <h5>@Tharun#7991</h5>
            <a href="https://discord.com/channels/@Tharun#7991" target="_blank">
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <FaWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+91 80729 70893</h5>
            <a
              href="https://api.whatsapp.com/send?phone=8072970893"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="7"
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
