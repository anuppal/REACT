import { RecipeModel } from "../model/RecipeModel"

type Props = {
    recipe: RecipeModel
}
export default function Recipe({recipe} : Props) {
    return <div>
        <h3>{recipe.name}</h3>
    </div>
}