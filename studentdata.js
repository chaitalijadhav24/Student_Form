import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserAuth from "./user";
import { signOut,getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

function StudentData() {
    const [data, setData] = useState([])
    const [search, setSearch] = useState([])
    // const [value,setValue]=useState("")
    const [sort, setSort] = useState("")

    let options = ["id", "name", "city", "percent", "state"]
    const navigate = useNavigate()

    let currentUser = UserAuth()

    useEffect(() => {
        fetch("https://student-tes-api.onrender.com/student")
            .then((res) => {
                return res.json()
            })
            .then((resp) => {
                console.log(resp)
                setData(resp)
                setSearch(resp)
            })
    }, [])

    const changeEdit = (id) => {
        navigate("/studentedit/" + id)
    }

    const changeDelete = (id) => {
        fetch("https://student-tes-api.onrender.com/student/" + id, {
            method: "DELETE",
        })
            .then(() => {
                alert("deleted successfully....!")
                window.location.reload()
            })
            .catch(() => {
                alert("error")
            })
    }

    const filter = (e) => {
        setSearch(data.filter(item => item.name.toLowerCase().includes(e.target.value)))
    }

    const sortData = async (e) => {
        e.preventDefault()
        let value = e.target.value
        setSort(value)
        return await axios.get(`https://student-tes-api.onrender.com/student?_sort=${value}&_order=asc`)
            .then((res) => {
                setData(res.data)   // data is state values
                setSearch(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

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
    const logout = (e) => {
        e.preventDefault()
        signOut(auth)
        .then(()=>{
            alert("Successfully Logout...!");
        navigate("/login");
        })
        .catch((err)=>{
            alert("error",err)
        })
    };


    return (
        <div className="border border-black py-4 my-4 mx-3">

            <h2 className="title text-center">STUDENT MANAGEMENT SYSTEM</h2>
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <Link to="/Studentform" className="btn btn-success px-2 me-3">ADD NEW(+)</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <select className="form-select m-2 me-3" style={{ width: "300px" }} value={sort} onChange={sortData}>
                            <option>SORT</option>
                            {/* map the function */}
                            {options.map((item) => (
                                <option>{item}</option>
                            ))}
                        </select>

                        <input type="text" onChange={filter} className="form-control me-4" placeholder="Search filter...!" aria-label="Text input with segmented dropdown button" />
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class="fa-solid fa-user"></i>{currentUser?.email}
                                </a>
                                <ul class="dropdown-menu">
                                    <li><Link to="/login" className="btn btn-light px-2 mx-2">Sign In/ Sign Up</Link></li>
                                </ul>
                            </li>
                        </ul>
                        <button class="btn btn-outline-success" type="submit" onClick={logout}>LOGOUT</button>
                    </div>
                </div>
            </nav><br /><br />
            <div className="table-responsive mx-2">
                <table className="table table-bordered">
                    <thead>
                        <tr className="text-center">
                            <th>ID</th>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>MOBILE</th>
                            <th>ROLL NUMBER</th>
                            <th>PERCENTAGE</th>
                            <th>CITY</th>
                            <th>STATE</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {search.map((item) => (
                            <tr key={item.id} className="text-center">
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.mobile}</td>
                                <td>{item.roll}</td>
                                <td>{item.percent}</td>
                                <td>{item.city}</td>
                                <td>{item.state}</td>
                                <td>
                                    {/* we use pass argument so we use function */}
                                    <button onClick={() => { changeEdit(item.id) }} className="btn btn-primary mx-2 mb-1">EDIT</button>
                                    <button onClick={() => { changeDelete(item.id) }} className="btn btn-danger">DELETE</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default StudentData;