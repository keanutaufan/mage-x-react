import "./SimpleSidebar.css";

export default function SimpleSidebar({ muncul }) {
  return (
    <div className={`sidebar ${muncul ? "sidebar__muncul" : "sidebar__sembunyi"}`}>
      <h1 className="sidebar__logo">taufan.</h1>
      <ul className="sidebar__list">
        <li className="sidebar__list-item"><a className="sidebar__link" href="">Home</a></li>
        <li className="sidebar__list-item"><a className="sidebar__link" href="">About</a></li>
        <li className="sidebar__list-item"><a className="sidebar__link" href="">Contact</a></li>
      </ul>
    </div>
  );
}