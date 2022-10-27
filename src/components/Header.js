import React from "react";


export default function Header() {
    return(
        <header class="header">
            <img src={require("./assets/LogoIcon.png")} alt="MinMax logo" width="50px" height="50px" />
            <input class="search-input" type="text" placeholder="Search..." />
            <button class="search-btn">Search</button>
            <div>
                <button class="library-btn">Library</button>
                <button class="leaderboard-btn">Class Leaderboard</button>
                <button class="Account-btn">Account</button>
            </div>
        </header>
    )
}