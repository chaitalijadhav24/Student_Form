import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

const firebaseConfig = {
    apiKey: "AIzaSyCI2wVbfvGPqKbiydZumupq1FBovT2xoYY",
    authDomain: "student-7be08.firebaseapp.com",
    projectId: "student-7be08",
    storageBucket: "student-7be08.appspot.com",
    messagingSenderId: "819051537838",
    appId: "1:819051537838:web:155e351b59fecab9b3543f",
    measurementId: "G-S4T09F953J"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth()

function UserAuth(){
    const [user,setUser]=useState()
    useEffect(()=>{
        let x=onAuthStateChanged(auth,user=>setUser(user))
        return x
    },[])
    return user
}
export default UserAuth;