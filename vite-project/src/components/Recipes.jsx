import  PropTypes  from  'prop-types'
import { RecipesInfo } from "./ResipesInfo";
export function Resipes({ resipes }) {
  return(
  <ul>
    {resipes.map((rec) => {
      return <RecipesInfo
        name={rec.name}
        time={rec.time}
        servings={rec.servings}
        calories={rec.calories}
        difficulty={rec.difficulty}
        image={rec.image}
      />;
    })}
  </ul>)
}
