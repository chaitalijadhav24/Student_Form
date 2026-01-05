import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";


function Studentedit(){
    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState("")
    const [roll,setRoll]=useState("")
    const [percent,setPercent]=useState("")
    const [city, setCity] = useState("")
    const [state,setState]=useState("")

    // used to fetch dynamic routing (studentid) from app to edit
    const {studentid}=useParams()
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

    useEffect(()=>{
        fetch("https://student-tes-api.onrender.com/student/"+studentid)
        .then((res)=>{
            return res.json()
        })
        .then((resp)=>{
            console.log(resp)
            setId(resp.id)
            setName(resp.name)
            setEmail(resp.email)
            setMobile(resp.mobile)
            setRoll(resp.roll)
            setPercent(resp.percent)
            setCity(resp.city)
            setState(resp.state)
        })
    },[])

    const formSubmit=(e)=>{
        e.preventDefault()
        let data={id,name,email,mobile,roll,percent,city,state}
        fetch("https://student-tes-api.onrender.com/student/"+studentid,{
            method:"PUT",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(data)
        })
        .then((resp)=>{
            alert("Edited form saved successfully...!")
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
        <div className="container" style={{maxWidth:"500px"}}>
            <div className="card p-3" style={{backgroundColor:"#333333da",color:"white",fontSize:"20px"}}>
                <div className="card-title text-center">
                    <h2>STUDENT EDIT</h2>
                </div>
                <div className="card-body">
                    <form onSubmit={formSubmit}>
                        <div className="mb-3">
                            <label className="form-label">ID</label>
                            <input value={id} disabled="disabled" type="number" className="form-control" onChange={changeId} required/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input value={name} type="text" className="form-control" onChange={changeName} required/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input value={email} type="email" className="form-control" onChange={changeEmail} required/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Mobile</label>
                            <input value={mobile} type="number" className="form-control" onChange={changeMobile} required/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Roll Number</label>
                            <input value={roll} type="number" className="form-control" onChange={changeRoll} required/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Percentage</label>
                            <input value={percent} type="number" className="form-control" onChange={changePercent} required/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">City</label>
                            <input value={city} type="text" className="form-control" onChange={changeCity} required/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">State</label>
                            <input value={state} type="text" className="form-control" onChange={changeState} required/>
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
export default Studentedit;