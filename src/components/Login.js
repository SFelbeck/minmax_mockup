import React from "react";

export default function Login() {
    return(
        <div class="login">
            <img src={require("./assets/LogoIcon.png")} alt="minmax logo" width="200px" height="200px" />
            <br></br>
            <input id="login-user-input" class="text-input" type="text" placeholder="Username" />
            <br></br>
            <input id="login-pass-input" class="text-input" type="text" placeholder="Password" />
            <br></br>
            <button class="login-btn">Login</button>
        </div>
    )
}