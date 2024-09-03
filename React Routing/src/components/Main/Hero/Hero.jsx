import style from "./Hero.module.scss";

export const Hero = ({src, mainText, subText}) => {
    return (
        <>
            <section className={style.heroStyling}>
                {src ? <img src={src} alt="hero logo"/> : null}
                <header>
                    <h2>{mainText}</h2>
                    <h5>{subText}</h5>
                </header>
            </section>
        </>
    )
}