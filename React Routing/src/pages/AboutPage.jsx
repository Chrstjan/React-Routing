import { Hero } from "../components/Main/Hero/Hero"
import { ImageCard } from "../components/Main/ImageCard/ImageCard"
import { Wrapper } from "../components/Main/Wrapper/Wrapper"

export const AboutPage = () => {
    return (
        <>
            <Hero src="./src/assets/Los_Pollos.png" mainText='About Los Pollos Hermanos'/>
            <Wrapper>
                <ImageCard src="./src/assets/gus.png" headerText="Welcome to Los Pollos Hermanos" subtext="My name is Gustavo Fring, and I am proud to introduce you to a place where tradition meets innovation, and every meal is crafted with the utmost care and attention to detail." subTextTwo="At Los Pollos Hermanos, we believe that every guest deserves nothing but the best. That is why we hold ourselves to the highest standards of quality and service. From sourcing the freshest ingredients to training our staff to be attentive and courteous, every aspect of our business is designed to ensure your satisfaction."/>
                <ImageCard src="./src/assets/the-true-los-pollos-hermanos.png" headerText="The Strength of a Team" subtext='Every day, our team comes together with one goal in mind: to provide an exceptional dining experience for every guest who walks through our doors. From the kitchen staff to the front of the house, every member plays a crucial role in making Los Pollos Hermanos what it is today. We do not believe in shortcuts. Every task, big or small, is essential to maintaining our reputation for quality and excellence.' subTextTwo='At Los Pollos Hermanos, we foster a culture where everyone takes pride in their work. We train our team members to be precise, thorough, and attentive. We believe in going the extra mile for our guests, and that commitment starts from within. When our employees support each other and uphold our values, it reflects in every meal we serve, every smile we give, and every experience our guests have.' />
            </Wrapper>
        </>
    )
}