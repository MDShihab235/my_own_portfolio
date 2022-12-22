import React, { useRef } from "react";
import Email from "../../components/Email/Email";
import Navbar from "../../components/Navbar/Navbar";
import SocialMedia from "../../components/SocialMedia/SocialMedia";
import contact from "../../assets/contact.jpg";
import "./Contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_z6fa6fo",
        "template_onky8wk",
        form.current,
        "lBuX9GG01Bd1cAHf8"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <Navbar />
      <div className="contact">
        <div>
          <SocialMedia />
        </div>
        <div className="contactContent">
          <img src={contact} alt="contact" />
          <form ref={form} className="form" onSubmit={sendEmail}>
            <div className="inputBox">
              <input type="text" name="user_name" required />
              <span>Name</span>
            </div>
            <div className="inputBox">
              <input type="email" name="user_email" required />
              <span>Email</span>
            </div>
            <div className="inputBox">
              <textarea name="message" />
              <span>Message</span>
            </div>
            <input type="submit" className="sendBtn" value="Send" />
          </form>
        </div>
        <div>
          <Email />
        </div>
      </div>
    </div>
  );
};

export default Contact;

// // Styles
// const StyledContactForm = styled.div`
//   width: 400px;
//   form {
//     display: flex;
//     align-items: flex-start;
//     flex-direction: column;
//     width: 100%;
//     font-size: 16px;
//     input {
//       width: 100%;
//       height: 35px;
//       padding: 7px;
//       outline: none;
//       border-radius: 5px;
//       border: 1px solid rgb(220, 220, 220);
//       &:focus {
//         border: 2px solid rgba(0, 206, 158, 1);
//       }
//     }
//     textarea {
//       max-width: 100%;
//       min-width: 100%;
//       width: 100%;
//       max-height: 100px;
//       min-height: 100px;
//       padding: 7px;
//       outline: none;
//       border-radius: 5px;
//       border: 1px solid rgb(220, 220, 220);
//       &:focus {
//         border: 2px solid rgba(0, 206, 158, 1);
//       }
//     }
//     label {
//       margin-top: 1rem;
//     }
//     input[type="submit"] {
//       margin-top: 2rem;
//       cursor: pointer;
//       background: rgb(249, 105, 14);
//       color: white;
//       border: none;
//     }
//   }
// `;
