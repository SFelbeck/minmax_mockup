import React from "react";

export default function IntroPage() {
    return(
        <div class="intro-screen">
            <img src={require("./assets/LogoIcon.png")} alt="minmax logo" width="200px" height="200px" />
            <br></br>
            <button class="login-page-btn">Login</button>
            <button class="signup-page-btn">Signup</button>
        </div>
    )
}