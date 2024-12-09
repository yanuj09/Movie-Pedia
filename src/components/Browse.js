import useNowPlayingMovies from "../Custom hooks/useNowPlayingMovies";

import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";



const Browse = () => {

    
    useNowPlayingMovies();
   

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