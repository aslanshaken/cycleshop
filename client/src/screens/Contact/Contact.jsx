import Layout from "../../components/shared/Layout/Layout";
// import placeholder from "../../assets/icons/member-placeholder.svg";
import githubIcon from "../../assets/icons/github-icon.svg";
import linkedinIcon from "../../assets/icons/linkedin-icon.svg";
import "./Contact.css";

function Contact(props) {
  return (
    <div>
      <Layout user={props.user}>
        <div className="contact-container-main-title">
          <div className="contact-main-title">Meet The Team</div>
        </div>
        <div className="contact-container">
          <div className="contact-shanye">
            <img
              height="300px"
              src="https://media-exp1.licdn.com/dms/image/C4D03AQGXjUvKzW5s4A/profile-displayphoto-shrink_800_800/0/1613668709953?e=1619049600&v=beta&t=Ltdk2GoWO1ZDYhCLj-KpbGztmIeez35of566kpIZS_8"
              alt="profile picture"
            />
            <h1>Shayne</h1>
            <h2>Full-Stack Engineer</h2>

            <div>Created backend logic</div>
            <a href="https://github.com/vaykoActual" target="_blank">
              <img
                className="social-icon-github"
                src={githubIcon}
                alt="github"
              />
            </a>
            <a href="http://linkedin.com/in/shaynevaykovich" target="_blank">
              <img
                className="social-icon-linkedin"
                src={linkedinIcon}
                alt="linkedin"
              />
            </a>
          </div>
          <div className="contact-aslan">
            <img
              height="300px"
              src="https://media-exp1.licdn.com/dms/image/C4D03AQGsCxsDfur_IA/profile-displayphoto-shrink_800_800/0/1605029291083?e=1619049600&v=beta&t=Ps8Zkm7t7u806ZuU_zJOT7AjzQOgyeno4LifoFDi-0I"
              alt="profile picture"
            />
            <h1>Aslan</h1>
            <h2>Full-Stack Engineer</h2>

            <div>Created front-end and backend logic</div>
            <a href="https://github.com/leeuwork" target="_blank">
              <img
                className="social-icon-github"
                src={githubIcon}
                alt="github"
              />
            </a>
            <a href="https://www.linkedin.com/in/aslanshaken/" target="_blank">
              <img
                className="social-icon-linkedin"
                src={linkedinIcon}
                alt="linkedin"
              />
            </a>
          </div>
          <div className="contact-varit">
            <img
              height="300px"
              src="https://media-exp1.licdn.com/dms/image/C4E03AQEU2L1IdwzuRg/profile-displayphoto-shrink_800_800/0/1587520779519?e=1619049600&v=beta&t=K1fDzSb_2QsarkmgZCo1cYRj1Cf_T8D0aOoYOqxdvPo"
              alt="profile picture"
            />
            <h1>Varit</h1>
            <h2>Full-Stack Engineer</h2>

            <div>Design front-end and UX design</div>
            <a href="https://github.com/varit" target="_blank">
              <img
                className="social-icon-github"
                src={githubIcon}
                alt="github"
              />
            </a>
            <a href="https://www.linkedin.com/in/varitseekhao/" target="_blank">
              <img
                className="social-icon-linkedin"
                src={linkedinIcon}
                alt="linkedin"
              />
            </a>
          </div>
          <div className="contact-steven">
            <img
              height="300px"
              src="https://media-exp1.licdn.com/dms/image/C4D03AQEsPPeMgYM-Zw/profile-displayphoto-shrink_800_800/0/1596214983019?e=1619049600&v=beta&t=P65sI-0hHdTL9TRacbjNKAt99C9fpSzscTkg0dLJvqg"
              alt="profile picture"
            />
            <h1>Steven</h1>
            <h2>Full-Stack Engineer</h2>

            <div>Created backend logic</div>
            <a href="https://github.com/strum32" target="_blank">
              <img
                className="social-icon-github"
                src={githubIcon}
                alt="github"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/steven-strumolo/"
              target="_blank"
            >
              <img
                className="social-icon-linkedin"
                src={linkedinIcon}
                alt="linkedin"
              />
            </a>
          </div>
        </div>
      </Layout>
    </div>
  );
}
export default Contact;
