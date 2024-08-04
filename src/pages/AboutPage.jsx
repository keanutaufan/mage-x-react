import LinkButton from "../components/LinkButton";
import "./AboutPage.css";

export default function AboutPage() {
  return (
    <div className="about">
      <div className="about__header">
        <h1 className="about__headline">
          <div className="about__keanu">KEANU</div> 
          <div className="about__taufan">TAUFAN</div>
        </h1>
        <h2 className="about__subheadline">Software Engineer | Web Developer</h2>
      </div>

      <div className="about__body">
        <img src="https://picsum.photos/400/533" alt="" className="about__image" />
        <div className="about__description">
          <div className="about__texts">
            <h3 className="about__title">About Me</h3>
            <p className="about__paragraph">Growing up, I am blessed to have been surrounded by peers passionate in STEM. I appreciate the beauty of mathematics despite never really getting to understand them. I felt elated when I first discovered how one can procedurally generate animations using a rather simple mathematical building blocks. I am fascinated by how so many things in life can be described as mathematical models, which was my primary drive for choosing Computer Science as my major.</p>
            <p className="about__paragraph">I'm always up for a good conversation. Feel free to reach out for any inquiries or just to say hi. I'll be happy to connect with people and share my knowledge.</p>
          </div>

          <div className="about__button">
            <LinkButton href="#" variant="filled">Contact Me</LinkButton>
          </div>
        </div>
      </div>
    </div>
  );
}