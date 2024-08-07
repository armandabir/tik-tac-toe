import { useState } from "react"
export default function Player({name,symbol , isActive,onChangeName}){
const [isEditing,setIsEditing]=useState();
const [playerName,setPlayerName]=useState(name);

    function handleEdit(){
        setIsEditing((prevState)=>{
            return !prevState;
        })
    } 

    function handleChange(event){
        setPlayerName(event.target.value)
        onChangeName(event.target.value,symbol)
    }
    let editbleName=<span>{playerName}</span>
    if(isEditing){
        editbleName=<input type="text" onChange={handleChange} value={playerName}/>
    }
return (
    <li className={isActive ? "active" :""}>
        <span className="player">
           {editbleName}
            <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEdit}>{isEditing ? "save":"edit"}</button>
    </li>
)

}