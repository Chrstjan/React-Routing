import style from "./Main.module.scss";

export const Main = ({children}) => {
    return (
        <>
            <main>
                {children}
            </main>
        </>
    )
}