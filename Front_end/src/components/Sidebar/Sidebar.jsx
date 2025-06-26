import { Link } from "react-router-dom";

import "./Sidebar.css";

export default function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <ul>
          <li>
            <Link to="/">Welcome</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>Categories</li>
          <li>Users</li>
          <li>Lorem ipsum</li>
          <li>Lorem ipsum</li>
        </ul>
      </div>
    </>
  );
}
