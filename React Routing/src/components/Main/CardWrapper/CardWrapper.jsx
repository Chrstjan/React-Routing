import style from "./CardWrapper.module.scss"

export const CardWrapper = ({children}) => {
    return (
        <>
            <section className={style.wrapperStyling}>{children}</section>
        </>
    )
}