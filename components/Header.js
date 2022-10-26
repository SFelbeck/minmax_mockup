import React from "react";


export default function Header() {
    return(
        <header class="header">
            <img src="./assets/LogoIcon.png" alt="MinMax logo" />
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