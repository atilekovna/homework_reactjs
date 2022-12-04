import React from 'react';
import { NavLink } from "react-router-dom";

function Menu(props) {

  return (
    <ul className="menu">
      <li><NavLink to="/" className={({isActive}) => isActive ? "active" : ""}>main</NavLink></li>
      <li><NavLink to="/posts" className={({isActive}) => isActive ? "active" : ""}>posts</NavLink></li>
      <li><NavLink to="/user" className={({isActive}) => isActive ? "active" : ""}>user</NavLink></li>
      <li><NavLink to="/list" className={({isActive}) => isActive ? "active" : ""}>list</NavLink></li>
      <li><NavLink to="/count" className={({isActive}) => isActive ? "active" : ""}>count</NavLink></li>
    </ul>
  );
}

export default Menu;