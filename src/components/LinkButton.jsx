import "./LinkButton.css";

export default function LinkButton({ children, href, variant }) {
  return (
    <a className={`btn btn--${variant}`} href={href}>
      {children}
    </a>
  );
}