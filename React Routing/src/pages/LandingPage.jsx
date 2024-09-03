import { useEffect, useState } from "react";

import { Hero } from "../components/Main/Hero/Hero";
import { CardWrapper } from "../components/Main/CardWrapper/CardWrapper";
import { RecipeCard } from "../components/Main/RecipeCard/RecipeCard";

export const LandingPage = () => {
    const [data, setData] = useState();

    useEffect(() => {
        const getRecipeData = async () => {
            const url = "https://dummyjson.com/recipes";
            const res = await fetch(url);
            const data = await res.json();
            setData(data.recipes);
        }
        getRecipeData();
        
    }, []);

    return (
        <>
            <Hero src="./src/assets/Los_Pollos.png" mainText="Where Flavor Meets Family!" subText='Come on in, make yourself at home, and taste the tradition that makes us the best in the Southwest!'/>
            <CardWrapper>
                <h2>Check out our menu</h2>
                    {data ? <RecipeCard recipes={data}/> : <h2>Fetching Recipes</h2>}
            </CardWrapper>
        </>
    )
}