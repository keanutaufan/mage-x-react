import "./Slides.css";

export default function Slides({ thumbnail, title, author, likes, users }) {
  return (
    <div className="slides">
      <a className="slides__link">
        <img src={thumbnail} className="slides__image" />
      </a>
      <div className="slides__details">
        <div className="slides__text">
          <h1>{title}</h1>
          <h2>by {author}</h2>
        </div>
        <div className="slides__stats">
          <p>{likes}</p>
          <p>{users}</p>
        </div>
      </div>
    </div>
  );
}