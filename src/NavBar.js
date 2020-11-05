import React from "react";
import {NavLink} from "react-router-dom";

const NavBar = () => {
  
        return (
            <>
                <NavLink exact to="/signup">Register</NavLink>
                <NavLink exact to="/admin">Admin</NavLink>
            </>
        )
    }


export default NavBar;