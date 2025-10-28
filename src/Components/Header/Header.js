import "../Header/Header.css";
import HeroImage from "../Img/Hero Image.png";
import PhoneCall from "../Img/phone.svg";
import BackgroundImage from "../Img/Frame (1).png";
import BackgroundImage1 from "../Img/Frame.png";
import WokrImg from "../Img/Mask Group.png";
import WokrImg2 from "../Img/Mask Group (1).png";
import WokrImg3 from "../Img/Mask Group (2).png";
import WokrImg4 from "../Img/Mask Group (3).png";
export default function Header() {
  return (
    <div>
      <section className="header container">
        <div className="left">
          <div className="hero_image">
            <img src={HeroImage} alt="Main Hero" />
          </div>
          <nav className="hero_nav_bar">
            <ul className="hero-nav-list">
              <li>
                <a href="#" className="hero-nav-link">
                  <h3>Email</h3>
                  <span>veero@gmail.com</span>
                </a>
              </li>
              <li>
                <a href="#" className="hero-nav-link">
                  <h3>Phone</h3>
                  <span>+91-300-848-9895</span>
                </a>
              </li>
              <li>
                <a href="#" className="hero-nav-link">
                  <h3>Location</h3>
                  <span>Lahore, Pakistan</span>
                </a>
              </li>
            </ul>
          </nav>
          <div className="header-line">
            <img src={BackgroundImage} className="bg-vertical"></img>
            <img src={BackgroundImage1} className="bg-horizontal"></img>
          </div>
          <div className="band-vertical"></div>
          <div className="band-horizontal"></div>
        </div>
        <div className="right_side">
          <div className="intro">
            <p className="greeting">Hey There, </p>
            <h1 className="title">I am Mikey</h1>
            <h2 className="subtitle">I design websites and apps</h2>
            <p className="description">But i also like to code some time</p>
            <a href="#" className="btn-outline">
              <img className="call" src={PhoneCall} alt="schedul a call"></img>
              <span>&nbsp; schedule a call</span>
            </a>
          </div>
          <div className="latest-work">
            <div className="latest-work-title">
              <h2>Latest Work</h2>
              <a href="#" className="view-all">
                view all
              </a>
            </div>

            <div className="work-gallery">
              <div className="work-card">
                <img src={WokrImg} alt="Work 3" />
              </div>
              <div className="work-card">
                <img src={WokrImg2} alt="Work 1" />
              </div>
              <div className="work-card">
                <img src={WokrImg3} alt="Work 2" />
              </div>
              <div className="work-card">
                <img src={WokrImg4} alt="Work 3" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
