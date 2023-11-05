import "./Contact.css";
import home_img from "../../assets/home_page_logo.jpeg";

function Contact() {
  return (
    <section id="contact">
      <div className="contact-info">
        <p className="email-detail">E-mail: &nbsp;
          <a href="mailto:bishtshyam135@gmail.com">
          bishtshyam135@gmail.com
          </a>
        </p>
        <p>
          Linkedin:&nbsp;
          <a href="https://www.linkedin.com/in/shyambisht/">
            https://www.linkedin.com/in/shyambisht
          </a>
        </p>
      </div>
    </section>
  );
}

export default Contact;
