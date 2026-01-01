import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAuth,signInWithEmailAndPassword } from "firebase/auth";

function Login(){
    const [email, setEmail] = useState("")
    const [pswd, setPswd] = useState("")
    const navigate=useNavigate()

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
const auth=getAuth()

    const changeEmail=(e)=>{
        setEmail(e.target.value)
    }
    const changePassword=(e)=>{
        setPswd(e.target.value)
    }
   
   const submitData=(e)=>{
    e.preventDefault()
    let obj={
        email:email,
        pswd:pswd,
    }
    signInWithEmailAndPassword(auth,obj.email,obj.pswd)
    .then(()=>{
        alert("successfully Loggedin...!")
        navigate("/studentdata")
    })
    .catch(()=>{
        alert("error...!")
    })
   }

    return(
        <div style={{ backgroundImage:`url("https://65designs.com/wp-content/uploads/2020/07/crop.jpg")`, backgroundSize: "cover", backgroundRepeat: "no-repeat",minHeight: "100vh",padding: "30px"}}>
        <div className="container" style={{maxWidth:"500px"}}>
            <div className="card m-3" style={{backgroundColor:"rgba(13, 0, 88, 0.63)",color:"whitesmoke"}}>
                <div className="card-title text-center">
                    <h2>LOGIN FORM</h2>
                </div>
                <div className="card-body">
                    <form onSubmit={submitData}>
                        <div className="mb-3">
                            <label className="form-label"><i class="fa-solid fa-envelope"></i><span className="mx-3">Email</span></label>
                            <input value={email} type="email" className="form-control" onChange={changeEmail} required/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label"><i class="fa-solid fa-key"></i><span className="mx-3">Password</span></label>
                            <input value={pswd} type="password" className="form-control" onChange={changePassword} required/>
                        </div>
                        <div className="text-center">
                        <button type="submit" className="btn btn-primary mx-3">Submit</button>
                        <Link to="/" className="btn btn-danger">Back</Link>
                        <br/><br/>
                        <div>
                            <b>If you do not have an account? </b>
                            <Link to="/"> REGISTRATOR HERE</Link>
                        </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
    )
}
export default Login;