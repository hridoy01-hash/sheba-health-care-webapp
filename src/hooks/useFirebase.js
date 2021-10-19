import initializationAuthentication from "../Firebase/firebase.init"
import { GoogleAuthProvider,getAuth,signInWithPopup,onAuthStateChanged,signOut,GithubAuthProvider,createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";

initializationAuthentication();

const useFirebase=()=>{
    const [user,setUser] = useState({})
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [name,setName] = useState('')
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    //handleGoogleSignIn
    const handleGoogleSignIn =()=>{
       setIsLoading(true);
        signInWithPopup(auth,googleProvider)
        .then(result =>{
        const user = result.user;
        setUser(user);
        })
        .finally(() => setIsLoading(false));
        

    }
    //handle github sign

    const handleGithubSugnIn=()=>{
        setIsLoading(true);
        signInWithPopup(auth, githubProvider)
       .then((result) => {
        const user = result.user;
        setUser(user);
       })
     .finally(() => setIsLoading(false));
    }

    //Create new user or Register
    const handleEmail =(e)=>{
        setEmail(e.target.value)

    }
    const handleName =(e)=>{
        setName(e.target.value)

    }
    const handlePassword=(e)=>{
    setPassword(e.target.value)
    }
    //update user name
    const handleUserName =()=>{
      updateProfile(auth.currentUser, {
        displayName:name
      }).then(() => {
        // Profile updated!
        // ...
      }).catch((error) => {
        // An error occurred
        // ...
      });
    }

   const handleSignup=()=>{
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
    .then((result) => {
      handleUserName();
      const user = result.user
      setUser(user)
    })
    .finally(() => setIsLoading(false));

   }

   //handle user login

   const handleLogin=()=>{
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
    .then((result) => {
      const user = result.user
      setUser(user)
    })
    .finally(() => setIsLoading(false));
   }
    

    //observe user state change
    useEffect(()=>{
      const unsubscribed =  onAuthStateChanged(auth, (user) => {
            if (user) {     
            setUser(user) 
             
            } else {
             setUser({})
            }
            setIsLoading(false);
          });
          return () => unsubscribed;
    },[]);

    //logout handle
   const logout=()=>{

    signOut(auth)
    .then(() => {
      setIsLoading(true)
        setUser({})
      })
      .finally(() => setIsLoading(false));
   }


    return{
        user,
        isLoading,
        handleGoogleSignIn,
        handleGithubSugnIn,
        logout,
        handleEmail,
        handlePassword,
        handleSignup,
        handleLogin,
        handleName


    }
 


}
export default useFirebase;