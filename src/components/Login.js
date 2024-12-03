import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () =>{

    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    // refering the the input value of email and password
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);
    
    //=> HANDLE THE signin button
    const handleButtonClick = () =>{
        // validation logic
        const checkName = !isSignInForm
        
        if(!isSignInForm){
            const message = checkValidData (email.current.value, password.current.value, name.current.value , checkName);
            setErrorMessage(message);
        }
        else{
            const message = checkValidData (email.current.value, password.current.value, null, checkName);
            setErrorMessage(message);

        }

        

        //signIn / SignUp

    }

    // =>function to handle toggle
    const toggleSignInForm = () =>{
        setIsSignInForm(!isSignInForm);
    }

    return(
        
        <div >
            <Header/>

            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/2bcf01ee-7ef6-4930-b0d5-c6863853c461/web/IN-en-20241125-TRIFECTA-perspective_a47db038-756f-4f26-b1f7-cfc882b98746_small.jpg" 
                alt="bgImg"
                ></img>

            </div>

            <form onSubmit={(e) =>e.preventDefault()}
            className=" absolute p-12 bg-black w-3/12 m-36 mx-auto right-0 left-0 bg-opacity-[0.83]"
            >

                <h1 className="text-white font-bold text-3xl py-4 ">{isSignInForm ?"Sign In" : "Sign Up"}</h1>

                {!isSignInForm && <input type="text" placeholder="Full Name"
                ref={name}
                className="p-4 my-3 bg-black  w-full border rounded-lg text-white"
                ></input>}
                
                {/* email and password input */}
                <input type="text" 
                ref={email}
                placeholder="Email or mobile number"
                className="p-4 my-3 bg-black  w-full border rounded-lg text-white"
                ></input>

                <input type="text" 
                ref={password}
                placeholder="Password"
                className="p-4 my-3 bg-black w-full border rounded-lg text-white"
                ></input>

                {/* error message */}
                <p className="text-red-500 font-bold">{errorMessage}</p>
                {/*signin button  */}
                <button className=" p-3 my-3 bg-red-700 text-white w-full rounded-lg"
                    onClick = {handleButtonClick}
                >
                    {isSignInForm ?"Sign In" : "Sign Up"}

                </button>

                {/* toggle in signup and signin */}
                <p className="text-white font-semibold hover: cursor-pointer hover:underline" 
                onClick={toggleSignInForm}>
                   {isSignInForm ? " New to Netflix? Sign up now" :" Already Registered User ? Sign in now"}</p>
            </form>
        </div>

        
           
    )
}
export default Login;