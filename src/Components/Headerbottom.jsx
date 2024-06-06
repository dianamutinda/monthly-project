import { Link } from "react-router-dom";

const Headerbottom = () => {
  return (
    <div className="headerbottom">
      <nav className="nav-list">
        <ol className="nav-items">
          <li className="nav-item">
            <Link to="/">home</Link >
          </li>
          <li className="nav-item">
            <Link  to="/destinations">destinations</Link >
          </li>
          <li className="nav-item">
            <Link  to="/trip types">trip types</Link >
          </li>
          <li className="nav-item">
            <Link  to="/contact us">contact us</Link >
          </li>
        </ol>
      </nav>
    </div>
  );
};
export default Headerbottom;
