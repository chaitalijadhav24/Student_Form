import { BrowserRouter as Routers,Routes,Route } from "react-router-dom";
import Studentform from "./studentform";
import StudentData from "./studentdata";
import Studentedit from "./studentedit";
import Register from "./registration";
import Login from "./Login";

function App(){
    return(
        <div>
            <Routers>
                <Routes>
                    <Route path="/" element={<Register/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/studentdata" element={<StudentData/>}/>
                    <Route path="/studentform" element={<Studentform/>}/>
                    <Route path="/studentedit/:studentid" element={<Studentedit/>}/>
                </Routes>
            </Routers>
        </div>
    )
}
export default App;