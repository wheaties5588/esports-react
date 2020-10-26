import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from "../../context/UserContext";
import ErrorNotice from "../misc/ErrorNotice";
import Axios from "axios";

export default function Login() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();

    const history = useHistory();
    const { setUserData } = useContext(UserContext);
    const { userData } = useContext(UserContext);

    useEffect(() => {
        console.log(userData.user)
        if(userData.user) history.push("/");
    }, [userData, history]); // if gives issues add => ,[userData]
     
    const baseUrl = process.env.baseURL || "http://localhost:5000"

    const submit = async (e) => {
        e.preventDefault();

        try {
            const loginUser = { email, password };

            const loginRes = await Axios.post(baseUrl + "/users/login", loginUser);
            setUserData({
                token: loginRes.data.token,
                user: loginRes.data.user,
            });
    
            localStorage.setItem("auth-token", loginRes.data.token);
            history.push("/");
            
        } catch (err) {
                // it will execute if both sides are true, so it will set the error if there is a message.
                err.response.data.msg && setError(err.response.data.msg);
        }

    };

    return (
        <div className="page container">
            {error && <ErrorNotice message={error} clearError={()=>setError(undefined)}/>}
            <div className = "card margin mx-auto LoginMargin ">
                <div className = "card-header"> Login </div>
                <div className="card-body">
                <form onSubmit = {submit} >
                <div className="form-group row margin">
                    <label htmlFor="login-Email" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="login-Email" placeholder="Enter Email" onChange={ (e) => setEmail(e.target.value)} />
                    </div>
                </div>
                <div className="form-group row margin">
                    <label htmlFor="login-Password" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="login-Password" placeholder="Enter Password" onChange={ (e) => setPassword(e.target.value)} />
                    </div>
                </div>

                <button className= "btn btn-success" type="submit">Login</button>
            </form>
                </div>

            </div>


        </div>
    )
}