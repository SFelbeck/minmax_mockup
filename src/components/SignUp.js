import React from "react";

export default function SignUp() {
    return(
        <div class="signup">
            <img src={require("./assets/LogoIcon.png")} alt="minmax logo" width="200px" height="200px" />
            <br></br>
            <input id="create-user-input" class="text-input" type="text" placeholder="Username" />
            <br></br>
            <input id="create-pass-input" class="text-input" type="text" placeholder="Password" />
            <br></br>
            <input id="confirm-pass-input" class="text-input" type="text" placeholder="Confirm Password" />
            <br></br>
            <button id="create-user-btn">Create Account</button>
        </div>
    )
}