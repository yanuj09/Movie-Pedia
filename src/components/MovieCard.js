import { MPoster_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 pr-4">
      <img
        alt="MOVIE POSTER"
        src={MPoster_URL + posterPath}
      ></img>
    </div>
  );
};

export default MovieCard;
