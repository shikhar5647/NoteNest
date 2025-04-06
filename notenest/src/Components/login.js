import React from 'react'
import { useState } from 'react';

const login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:5000/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        }).then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err));
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        const onChange = (e) => {
            setCredentials({ ...credentials, [e.target.name]: e.target.value });
            console.log(credentials);
        }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" value={credentials.email} id="email" onChange={onChange} name='email' aria-describedby="emailHelp"/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" value={credentials.password} id="password" onChange={onChange} name='password' />
                </div>
                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
        </div>
    )
}
}

export default login
