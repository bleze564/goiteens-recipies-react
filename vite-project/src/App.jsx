import {Resipes} from "./components/Recipes"
import resipes from "./resipies.json"
export default App
function App(){
    return(
    <div id="">
        <Resipes resipes={resipes}/>
    </div>)
}