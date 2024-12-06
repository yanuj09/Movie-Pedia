import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {auth} from "../utils/firebase";
import { useSelector } from "react-redux";


const Header = ()=>{

    const navigate = useNavigate();

    const user = useSelector(store => store.user) ;
    

    const handleSignOut = () =>{
        signOut(auth).then(() =>{
            navigate("/");
           

        })
        .catch((error) =>{

        });
    }

    return(
        <div 
        className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
            <img 
            className="w-44"
            src="https://about.netflix.com/images/logo.png" alt="logo"></img>


            {user && <div className="flex py-2 ">
                <img src= {user?.photoURL}
                alt="userIcon"
                className="size-12  rounded-full"
                >

                </img>
                <button onClick={handleSignOut} className="bg-white rounded-full my-3 py-1 px-2 font-medium">Sign Out</button>
            </div>}
        </div>

       
    )
}

export default Header