import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const Header = () => (
  <div className="nav">
    <div>
      <img
        width="50"
        height="60"
        src="https://www.adobe.com/express/create/media_127a4cd0c28c2753638768caf8967503d38d01e4c.jpeg?width=400&format=jpeg&optimize=medium"
      ></img>
      <h1>Namaste Foods</h1>
    </div>

    <div>
      <ul>
        <li>
          <Link to="/"> Home</Link>
        </li>
        <li>
          <Link to="/about"> About us</Link>
        </li>

        <li>Get started</li>
        <li>Contact us </li>
        <li>
          <input type="text" placeholder="Enter your email address" />
        </li>
      </ul>
    </div>
    <div>{useOnline() ? "online" : "offline"}</div>
    <button>click me</button>
  </div>
);

export default Header;
