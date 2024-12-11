
import useNowPlayingMovies  from "../Custom hooks/useNowPlayingMovies";
import usePopularMovies from "../Custom hooks/usePopularMovie";
import useTopRatedMovies from "../Custom hooks/useTopRatedMovies";
import useUpcomingMovies from "../Custom hooks/useUpcomingMovies";
import GptSearch from "./GptSearch";

import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { useSelector } from "react-redux";



const Browse = () => {

    const showGptSearch  = useSelector(store => store.gpt.showGptSearch);
    //console.log(showGptSearch);

    //fetching the following movie and updating the store
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();
   

    return (
        <div>
            <Header/>
            {
                showGptSearch ? <GptSearch/> :
                (
                    <>
                    <MainContainer/>
                    <SecondaryContainer/>
                    </>
                )
            }


            
            
            
          
            
            

            {/* 
            main Container
                -VideoBackground
                -videoTitle
            Secondary Container
                -MovieList * n 
                    -cards * n
            
            */}
        </div>
        
    )
}
export default Browse