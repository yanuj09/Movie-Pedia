import { signOut ,  onAuthStateChanged} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {auth} from "../utils/firebase";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, USER_AVATAR } from "../utils/constants";



const Header = ()=>{

    const navigate = useNavigate();

    const user = useSelector(store => store.user) ;

    const dispatch = useDispatch();
    
    

    const handleSignOut = () =>{
        signOut(auth).then(() =>{
            
           

        })
        .catch((error) =>{

        });
    };

     // updateing the store using the firebase api 
     useEffect(() =>{
        
        
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const {uid, email, displayName, photoURL } = user;

              dispatch(addUser({
                uid: uid, 
                email: email , 
                displayName : displayName , 
                photoURL : photoURL }));

                navigate("/browse")
              
              // ...
            } else {
              // User is signed out
              dispatch(removeUser());
              navigate("/");
              
              // ...
            }
          });

          // Unsubscribe when components unmounts
          return () => unsubscribe();
          
    }, []);


    return(
        <div 
        className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
            <img 
            className="w-44"
            src= {LOGO} alt="logo"></img>


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