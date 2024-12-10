import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useTopRatedMovies = ()=>{


    const dispatch = useDispatch();

    const getNowPlayingMovie = async () =>{

        const res = await fetch("https://api.themoviedb.org/3/movie/top_rated?page=1" , API_OPTIONS);

        const data = await res.json();

        //console.log(data);
        dispatch(addTopRatedMovies(data.results));
        

    }

    useEffect( () =>{
        getNowPlayingMovie();
    }, []);
}

export default useTopRatedMovies;