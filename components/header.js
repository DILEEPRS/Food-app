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
        <li>Home</li>
        <li>Sign up</li>
        <li>Get started</li>
        <li>Contact us </li>
        <li>
          <input type="text" placeholder="Enter your email address" />
        </li>
      </ul>
    </div>

    <button>click me</button>
  </div>
);

export default Header;
