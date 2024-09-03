import style from "./RecipeCard.module.scss"

export const RecipeCard = ({recipes}) => {
    return (
        <>
            <div className={style.cardContainer}>
            {recipes.map((recipe) => {
                return (
                    <>
                    <figure className={style.cardStyling} key={recipe.id}>
                     <header>
                        <img src={recipe.image} />
                        <h3>{recipe.name}</h3>
                     </header>
                    </figure>
                    </>
                )
            })}
            </div>
        </>
    )
}