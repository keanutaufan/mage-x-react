import LinkButton from "../components/LinkButton";
import Navbar from "../components/Navbar";
import "./HomePage.css";

export default function HomePage() {
  return (
    <div className="home">
      <div className="hero-and-photo">
        <div className="hero">
          <div className="hero__header">
            <h1 className="hero__headline">
              <div className="hero__keanu">KEANU</div>
              <div className="hero__taufan">TAUFAN</div>
            </h1>
            <h2 className="hero__subheadline">Software Engineer | Web Developer</h2>
          </div>
          <div className="hero__buttons">
            <LinkButton variant="filled">Contact</LinkButton>
            <LinkButton variant="outline">About Me</LinkButton>
          </div>
        </div>

        <div className="hero__photo">
          <img src="https://picsum.photos/400/533" />
          <img src="https://picsum.photos/400/533" />
        </div>
      </div>

      <div className="intro">
        <div className="intro__texts">
          <h2 className="intro__title">Hello!</h2>
          <p className="intro__paragraph">I am Keanu Taufan: a software engineer, web developer, computer science student, and also coffee enjoyer. I love to share my knowledge and have been teaching for a while. As an avid tech enthusiast (which is just another term of unemployed CS hobbyist), I love discussing new breakthroughs in techs. Perhaps you are one of my people?</p>
        </div>
        <div className="intro__photo">
        <img src="https://picsum.photos/400/533" />
        <img src="https://picsum.photos/400/533" />
        <img src="https://picsum.photos/400/533" />
        </div>
      </div>
    </div>
  );
}