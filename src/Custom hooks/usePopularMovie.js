import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const usePopularMovies = ()=>{


    const dispatch = useDispatch();

    const getNowPlayingMovie = async () =>{

        const res = await fetch("https://api.themoviedb.org/3/movie/popular?page=1" , API_OPTIONS);

        const data = await res.json();

        //console.log(data);
        dispatch(addPopularMovies(data.results));
        

    }

    useEffect( () =>{
        getNowPlayingMovie();
    }, []);
}

export default usePopularMovies;