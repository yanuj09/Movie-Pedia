import { useSelector } from "react-redux";
import lang from "../utils/languageContants";

const GptSearchBar =() =>{

  const langKey = useSelector(store => store.config.lang);
  console.log(langKey);

  return (
    <div className="pt-[10%] flex justify-center">
      <form className=" w-1/2  grid grid-cols-12">
        <input
          type="text"
          className="p-4 my-4 ml-4 col-span-10 rounded-l-full shadow-lg "
          placeholder= {lang[langKey].gptSearchPlaceholder}
        ></input>
        <button className="py-2 px-4 h-[57px] mb-3 mt-4 bg-red-700 text-white rounded-r-full col-span-2 ">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
}

export default GptSearchBar;
