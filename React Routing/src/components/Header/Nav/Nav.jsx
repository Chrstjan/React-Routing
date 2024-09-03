import { NavLink } from "react-router-dom";
import style from "./Nav.module.scss";

export const Nav = () => {
    return (
        <>
            <nav>
            <ul className={style.navStyling}>
            <li>
                <NavLink style={({isActive}) => isActive ? {color: "red"} : {color: "white"}} to={"/"}>Home</NavLink>
            </li>
                <li>
                <NavLink style={({isActive}) => isActive ? {color: "red"} : {color: "white"}} to={"/concepts"}>Concepts</NavLink>
            </li>
            <li>
                <NavLink style={({isActive}) => isActive ? {color: "red"} : {color: "white"}} to={"/about"}>About</NavLink>
            </li>
            <li>
                <NavLink style={({isActive}) => isActive ? {color: "red"} : {color: "white"}} to={"/contact"}>Contact</NavLink>
            </li>
        </ul>
    </nav>
        </>
    )
}