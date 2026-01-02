export function RecipesInfo({name, time, servings, calories, difficulty, image }){
    return(
   <li>
    <h2>
     {name}
    </h2>
    <p>Time of cooking:{time}</p>
    <p>Servings for:{servings} people</p>
    <p>Calories count:{calories} kal</p>
    <p>Dificulty:{difficulty}</p>
    <img src={image} alt="" />
   </li>)
}