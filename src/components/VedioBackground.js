
import { useSelector } from "react-redux";
import useMovieTrailer from "../Custom hooks/useMovieTrailer";


const VedioBackground = ({ movieId }) => {
  
  const trailerVedio = useSelector(store  => store?.movies?.trailerVedio);

  // getting movie triler vedio
  useMovieTrailer(movieId);
  
  

  return (
    <div className="">
      <iframe
        className=" w-screen aspect-video"
        src= {"https://www.youtube.com/embed/" + trailerVedio?.key + "?&autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        
      ></iframe>
    </div>
  );
};

export default VedioBackground;
