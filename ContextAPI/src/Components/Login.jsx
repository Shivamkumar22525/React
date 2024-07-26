import UserContext from "../Context/UserContext";
import { useContext,useState, } from "react";

function Login(){
    const [username,Setusername] = useState('')
    const[password,Setpassword] = useState('')

    const {Setuser} = useContext(UserContext);

    const handleSubmit = (e)=>{
        e.preventDefault();
        Setuser({username,password})

    }
    
    return(
        <div>
            <div>
                <h2>Login</h2>
            </div>

            <div>
                <input type="text" value={username} onChange={(e)=>Setusername(e.target.value)} placeholder="Username" />
            </div>            
            
            <div>
                <input type="password" value={password} onChange={(e)=>Setpassword(e.target.value)}  placeholder="Password" />

            </div>
            
            <div>
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
        
    )
}

export default Login;