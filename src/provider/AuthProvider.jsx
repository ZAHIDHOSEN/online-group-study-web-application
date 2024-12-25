import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from '../firebase/firebase.init';
import axios from 'axios';


const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)

    }

    const loginUser = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }


   const signInWithGoogle = () =>{
        setLoading(true)
        signInWithPopup(auth, googleProvider)

    }

    const logoutUser = () =>{
        setLoading(true)
        return signOut(auth)
    }



    useEffect(() =>{
       const unSubscribe = onAuthStateChanged(auth, currentUser=>{
           setUser(currentUser);
           console.log('state capture', currentUser?.email);

           if(currentUser?.email){
            const user = {email: currentUser.email}

            axios.post('http://localhost:5000/jwt',user,{
                withCredentials:true
            })
            .then(res => {
                console.log('login token',res.data)
                
               setLoading(false);
            })
           }
           else{

            axios.post('http://localhost:5000/logout', {}, {
                withCredentials:true

            })
            .then(res =>{
                console.log('logout', res.send)
                setLoading(false);
            })

           }

        })
        return () =>{
            unSubscribe();
        }

    },[])

    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        signInWithGoogle,
        logoutUser

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
         </AuthContext.Provider>
    );
};

export default AuthProvider;