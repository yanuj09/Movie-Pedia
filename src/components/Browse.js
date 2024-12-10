import useNowPlayingMovies  from "../Custom hooks/useNowPlayingMovies";
import usePopularMovies from "../Custom hooks/usePopularMovie";
import useTopRatedMovies from "../Custom hooks/useTopRatedMovies";
import useUpcomingMovies from "../Custom hooks/useUpcomingMovies";

import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";



const Browse = () => {

    //fetching the following movie and updating the store
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();
   

    return (
        <div>
            <Header/>
            <MainContainer/>
            <SecondaryContainer/>

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