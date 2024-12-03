export const checkValidData = (email, password,name, checkName) => {

    const isEmailValid = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    const isNameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);

    if(!isEmailValid){
        return "Email ID is invalid";
    }

    if(!isPasswordValid){
        return "Password is invalid";
    }

    if( checkName && !isNameValid) {
        return "Name is invalid";
    }

    return null;
}