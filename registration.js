import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAuth,createUserWithEmailAndPassword } from "firebase/auth";

function Register(){
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [pswd, setPswd] = useState("")
    const [cpswd,setCpswd]=useState("")
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

    const changeName = (e) => {
        setName(e.target.value)
    }
    const changeEmail=(e)=>{
        setEmail(e.target.value)
    }
    const changePassword=(e)=>{
        setPswd(e.target.value)
    }
    const changeCpswd=(e)=>{
        setCpswd(e.target.value)
    }

   const submitData=(e)=>{
    e.preventDefault()
    let obj={
        email:email,
        pswd:pswd,
    }
    createUserWithEmailAndPassword(auth,obj.email,obj.pswd)
    .then(()=>{
        alert("successfully Registered...!")
        navigate("/login")
    })
    .catch(()=>{
        alert("error...!")
    })
   }

    return(
        <div style={{backgroundImage:`url("https://directlinedev.com/media/cases/rooney/header/background_1_zM58lsj.desktop.jpeg")`,backgroundRepeat:"no-repeat",backgroundSize:"cover",padding: "30px",minHeight:"100vh",display: "flex",
        justifyContent: "center",
        alignItems: "center",}}>
        <div className="container" style={{width:"450px"}}>
            <div className="card m-3 p-3" style={{backgroundColor:"rgba(15, 15, 15, 0.63)",color:"whitesmoke"}}>
                <div className="card-title text-center">
                    <h3>REGISTRATION FORM</h3>
                </div>
                <div className="card-body">
                    <form onSubmit={submitData}>
                        <div className="mb-3">
                            <label className="form-label"><i class="fa-solid fa-user"></i><span className="mx-3">Name</span></label>
                            <input value={name} type="text" className="form-control" onChange={changeName} required/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label"><i class="fa-solid fa-envelope"></i><span className="mx-3">Email</span></label>
                            <input value={email} type="email" className="form-control" onChange={changeEmail} required/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label"><i class="fa-solid fa-key"></i><span className="mx-3">Password</span></label>
                            <input value={pswd} type="password" className="form-control" onChange={changePassword} required/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label"><i class="fa-solid fa-lock"></i><span className="mx-3">Confirm Password</span></label>
                            <input value={cpswd} type="password" className="form-control" onChange={changeCpswd} required/>
                        </div>
                        <div className="text-center">
                        <button type="submit" className="btn btn-primary mx-3">Submit</button>
                        <Link to="/studentdata" className="btn btn-danger">Back</Link>
                        <br/><br/>
                        <div>
                            <b>If you have an account? </b>
                            <Link to="/login"> LOGIN HERE</Link>
                        </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
    )
}
export default Register;