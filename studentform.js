import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Studentform(){
    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState("")
    const [roll,setRoll]=useState("")
    const [percent,setPercent]=useState("")
    const [city, setCity] = useState("")
    const [state,setState]=useState("")
    const navigate=useNavigate()

    const changeId = (e) => {
        setId(e.target.value)
    }
    const changeName = (e) => {
        setName(e.target.value)
    }
    const changeEmail=(e)=>{
        setEmail(e.target.value)
    }
    const changeMobile=(e)=>{
        setMobile(e.target.value)
    }
    const changeCity=(e)=>{
        setCity(e.target.value)
    }
    const changeState=(e)=>{
        setState(e.target.value)
    }
    const changeRoll=(e)=>{
        setRoll(e.target.value)
    }
    const changePercent=(e)=>{
        setPercent(e.target.value)
    }

    const formSubmit=(e)=>{
        e.preventDefault()
        let data={id,name,email,mobile,roll,percent,city,state}
        fetch("https://student-tes-api.onrender.com/student",{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(data)
        })
        .then((resp)=>{
            alert("saved successfully...!")
            console.log(resp)
            navigate("/studentdata")
            setId("")
            setName("")
            setEmail("")
            setMobile("")
            setRoll("")
            setPercent("")
            setCity("")
            setState("")
        })
        .catch((err)=>{
            alert("getting error...!"+err)
        })
    }
    return(
        <div style={{ backgroundImage:`url("https://getwallpapers.com/wallpaper/full/0/d/0/368914.jpg")`, backgroundSize: "cover", backgroundRepeat: "no-repeat",padding: "30px"}}>
        <div className="container" style={{maxWidth:"650px"}}>
            <div className="card p-3" style={{backgroundColor:"#333333da",color:"white",fontSize:"20px"}} >
                <div className="card-title text-center">
                    <h2>STUDENT FORM</h2>
                </div>
                <div className="card-body">
                    <form onSubmit={formSubmit}>
                        <div className="mb-3">
                            <label className="form-label">ID</label>
                            <input value={id} disabled="disabled" type="number" className="form-control" style={{backgroundColor:"rgba(116, 112, 112, 0.548)",color:"white"}} onChange={changeId} required/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label"><i class="fa-solid fa-user"></i><span className="mx-3">Name</span></label>
                            <input value={name} type="text" className="form-control" style={{backgroundColor:"rgba(116, 112, 112, 0.548)",color:"white"}} onChange={changeName} required/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label"><i class="fa-solid fa-envelope"></i><span className="mx-3">Email</span></label>
                            <input value={email} type="email" className="form-control" style={{backgroundColor:"rgba(116, 112, 112, 0.548)",color:"white"}} onChange={changeEmail} required/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label"><i class="fa-solid fa-phone"></i><span className="mx-3">Mobile</span></label>
                            <input value={mobile} type="number" className="form-control" style={{backgroundColor:"rgba(116, 112, 112, 0.548)",color:"white"}} onChange={changeMobile} required/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label"><i class="fa-regular fa-registered"></i><span className="mx-3">Roll Number</span></label>
                            <input value={roll} type="number" className="form-control" style={{backgroundColor:"rgba(116, 112, 112, 0.548)",color:"white"}} onChange={changeRoll} required/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label"><i class="fa-solid fa-percent"></i><span className="mx-3">Percentage</span></label>
                            <input value={percent} type="number" className="form-control" style={{backgroundColor:"rgba(116, 112, 112, 0.548)",color:"white"}} onChange={changePercent} required/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label"><i class="fa-solid fa-city"></i><span className="mx-3">City</span></label>
                            <input value={city} type="text" className="form-control" style={{backgroundColor:"rgba(116, 112, 112, 0.548)",color:"white"}} onChange={changeCity} required/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label"><i class="fa-regular fa-flag"></i><span className="mx-3">State</span></label>
                            <input value={state} type="text" className="form-control" style={{backgroundColor:"rgba(116, 112, 112, 0.548)",color:"white"}} onChange={changeState} required/>
                        </div>
                        <div className="text-center">
                        <button type="submit" className="btn btn-primary mx-3">Submit</button>
                        <Link to="/studentdata" className="btn btn-danger">Back</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
    )
}
export default Studentform;