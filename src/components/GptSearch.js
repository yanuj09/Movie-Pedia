import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";
import { BGIMG } from "../utils/constants";


function GptSearch() {
  return (
    <div>
        <div className="absolute -z-10">
                <img src= {BGIMG} 
                alt="bgImg"
                ></img>

        </div>
        <GptSearchBar/>
        <GptMovieSuggestion/>
    </div>
  )
}

export default GptSearch;