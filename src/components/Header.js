import React from "react";


export default function Header() {
    return(
        <header class="header">
            <img class="header-logo" src={require("./assets/LogoIcon.png")} alt="MinMax logo" width="50px" height="50px" />
            <div class="search">
                <input id="search-input" class="text-input" type="text" placeholder="Search..." />
                <button class="search-btn">Search</button>
            </div>
            <div class="nav">
                <button class="library-btn">Library</button>
                <button class="leaderboard-btn">Class Leaderboard</button>
                <button class="account-btn">Account</button>
            </div>
        </header>
    )
}