import React from "react";

export default function SignUp() {
    return(
        <div class="signup">
            <img src="./assets/LogoIcon.png" alt="MinMax Logo" />
            <input id="create-user-input" type="text" placeholder="Username" />
            <input id="create-pass-input" type="text" placeholder="Password" />
            <input id="confirm-pass-input" type="text" placeholder="Confirm Password" />
            <button id="create-user-btn">Create Account</button>
        </div>
    )
}