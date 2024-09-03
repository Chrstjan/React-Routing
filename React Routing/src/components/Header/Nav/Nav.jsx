import { NavLink } from "react-router-dom"

export const Nav = () => {
    return (
        <>
            <nav>
            <ul>
            <li>
                <NavLink style={({isActive}) => isActive ? {color: "blue"} : {color: "black"}} to={"/"}>Home</NavLink>
            </li>
                <li>
                <NavLink style={({isActive}) => isActive ? {color: "blue"} : {color: "black"}} to={"/concepts"}>Concepts</NavLink>
            </li>
            <li>
                <NavLink style={({isActive}) => isActive ? {color: "blue"} : {color: "black"}} to={"/about"}>About</NavLink>
            </li>
            <li>
                <NavLink style={({isActive}) => isActive ? {color: "blue"} : {color: "black"}} to={"/contact"}>Contact</NavLink>
            </li>
        </ul>
    </nav>
        </>
    )
}