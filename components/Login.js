import React from "react";

export default function Login() {
    return(
        <div class="login">
            <img src="./assets/LogoIcon.png" alt="minmax logo" />
            <input id="login-user-input" type="text" placeholder="Username" />
            <input id="login-pass-input" type="text" placeholder="Password" />
            <button class="login-btn">Login</button>
        </div>
    )
}