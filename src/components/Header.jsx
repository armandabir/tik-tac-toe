import { useState } from "react";
import logo from "./../assets/game-logo.png"

export function Header({mylogo=logo}){
    const [editbaleLogo,setEditbaleLogo]=useState(mylogo);
    
    return (
        <>
            
                <img src={editbaleLogo} alt="" />
                <h1>Tic-Tac-toe</h1>

            </>
    )
}



export {logo};