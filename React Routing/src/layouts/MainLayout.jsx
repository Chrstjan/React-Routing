import { Outlet } from "react-router-dom";
import { Main } from "../components/Main/Main"
import { Header } from "../components/Header/Header";
import { Nav } from "../components/Header/Nav/Nav";

import style from "./MainLayout.module.scss";

export const MainLayout = () => {
    return (
        <>
            <Header>
                <Nav />
            </Header>
            <Main>
                <Outlet />
            </Main>
        </>
    )
}