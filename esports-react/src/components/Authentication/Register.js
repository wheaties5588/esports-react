import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from "../../context/UserContext";
import ErrorNotice from "../misc/ErrorNotice";
import Axios from "axios";


export default function Register() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [passwordCheck, setPasswordCheck] = useState();
    const [displayName, setdisplayName] = useState();
    const [error, setError] = useState();

    const history = useHistory();
    const { setUserData } = useContext(UserContext);
    
    const submit = async (e) => {
        e.preventDefault();
        try {
            const newUser = { email, password, passwordCheck, displayName};
            await Axios.post("http://localhost:5000/users/register", newUser
        );
        const loginRes = await Axios.post("http://localhost:5000/users/login", {
            email,
            password,
        });
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
            <div className = "card margin">
            <form onSubmit = {submit} >
                <div className="form-group row margin">
                    <label htmlFor="Email" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="Email" onChange={ (e) => setEmail(e.target.value)} />
                    </div>
                </div>
                <div className="form-group row margin">
                    <label htmlFor="Password" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="Password" onChange={ (e) => setPassword(e.target.value)} />
                    </div>
                </div>
                <div className="form-group row margin">
                    <label htmlFor="verifyPassword" className="col-sm-2 col-form-label">Verify Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="verifyPassword" onChange={ (e) => setPasswordCheck(e.target.value)} />
                    </div>
                </div>
                <div className="form-group row margin">
                    <label htmlFor="displayName" className="col-sm-2 col-form-label">displayName</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="displayName" onChange={ (e) => setdisplayName(e.target.value)} />
                    </div>
                </div>

                <input type="submit" value= "Register"/>
            </form>
            </div>


        </div>
    )
}
