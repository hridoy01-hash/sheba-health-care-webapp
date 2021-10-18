import initializationAuthentication from "../Firebase/firebase.init"
import { GoogleAuthProvider,getAuth,signInWithPopup,onAuthStateChanged,signOut,GithubAuthProvider,createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";

initializationAuthentication();

const useFirebase=()=>{
    const [user,setUser] = useState([])
    const [email,setEmail] = useState([])
    const [password,setPassword] = useState([])
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    //handleGoogleSignIn
    const handleGoogleSignIn =()=>{
        signInWithPopup(auth,googleProvider)
        .then(result =>{
        const user = result.user;
        setUser(user);
        })

    }
    //handle github sign

    const handleGithubSugnIn=()=>{
        signInWithPopup(auth, githubProvider)
       .then((result) => {
        const user = result.user;
        setUser(user);
  })
    }

    //Create new user or Register
    const handleEmail =(e)=>{
        setEmail(e.target.value)

    }
    const handlePassword=(e)=>{
    setPassword(e.target.value)
    }

   const handleSignup=()=>{
    createUserWithEmailAndPassword(auth, email, password)
    .then((result) => {
      const user = result.user
      setUser(user)
    })
   }

   //handle user login

   const handleLogin=()=>{
    signInWithEmailAndPassword(auth, email, password)
    .then((result) => {
      const user = result.user
      setUser(user)
    })
   }
    

    //observe user state change
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {     
            setUser(user) 
             
            } else {
             setUser({})
            }
          });
    },[]);

    //logout handle
   const logout=()=>{
    signOut(auth)
    .then(() => {
        setUser({})
      });
   }


    return{
        user,
        handleGoogleSignIn,
        handleGithubSugnIn,
        logout,
        handleEmail,
        handlePassword,
        handleSignup,
        handleLogin,


    }
 


}
export default useFirebase;