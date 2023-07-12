`use client`
import { useState } from "react";
import "./login.css"

export default function login(); {

    const [state, setState] = useState({
        email: "",
        password: ""
    });

    const handleChange = (event) => {
        console.log(event)
        const { name, value } = event.target;
        setState({
            ...state, 
            [name]: value
        })
    }

    return (
        <div className="container">
        
            <input onChance={handleChange} 
            name="email" 
            value={state.email} 
            type="text" 
            placeholder="email"/>
            <input 
            name="password" 
            onChange={handleChange} 
            type="password" 
            placeholder="123456"/>

            
            <button>Login</button>

        </div>
    )
}