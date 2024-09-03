import style from "./ImageCard.module.scss";

export const ImageCard = ({src, headerText, subtext, subTextTwo}) => {
    return (
        <>
            <figure className={style.cardStyling}>
                <img src={src} />
                <figcaption>
                    <header>
                        <h2>{headerText}</h2>
                    </header>
                    <article>
                        <p>{subtext}</p>
                        <p>{subTextTwo}</p>
                    </article>
                </figcaption>
            </figure>
        </>
    )
}