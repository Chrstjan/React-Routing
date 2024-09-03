import style from "./Cam.module.scss";

export const Cam = ({src, cam}) => {
    return (
        <> 
            <div className={style.camStyling}>
                <p>Cam: {cam}</p>
                <img src={src} />
            </div>
        </>
    )
}