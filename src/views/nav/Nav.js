import React from 'react';
import './Nav.scss';
import {
    Link,
    NavLink
  } from "react-router-dom";
class Nav extends React.Component {
    render() {
        return (
            <div className="topnav" > 
                <NavLink activeClassName="active" to="/" exact={true}> Home</NavLink>
                <NavLink activeClassName="active" to="/todo">Todos</NavLink>
                <NavLink activeClassName="active" to="/about">About</NavLink>
                <NavLink activeClassName="active" to="/user">User</NavLink>
            </div>
        );
    }
}

export default Nav;