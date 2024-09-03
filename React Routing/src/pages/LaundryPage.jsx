import { Cam } from "../components/Main/Cam/Cam"
import { Wrapper } from "../components/Main/Wrapper/Wrapper"

export const LaundryPage = () => {
    return (
        <>
            <h2>Note: Remove this from the website -Gus</h2>
            <h3>Cookroom Cams:</h3>
            <Wrapper>
                <Cam src="./src/assets/sus-1.png" cam='001'/>
                <Cam src="./src/assets/sus-2.png" cam='002'/>
                <Cam src={"./src/assets/walter-white-finger.gif"} cam='003'/>
                <Cam src="./src/assets/sus-3.png" cam='004'/>
            </Wrapper>
        </>
    )
}