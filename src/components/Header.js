import React from "react";
import {NavLink} from "react-router-dom";


const Header=()=>(
    <header>
    <h1>Expensify</h1>
    <NavLink to="/" activeClassName="on-active" exact={true}>Deshboard</NavLink>
    <NavLink to="/create" activeClassName="on-active">Create Expense</NavLink>
    <NavLink to="/help" activeClassName="on-active">Help</NavLink>
    </header>

);
export default Header;
