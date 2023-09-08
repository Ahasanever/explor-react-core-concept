import { useState } from "react"

export default function Team(){

    const [player, setTeam] = useState(11);

    const handelAdd =()=>{
        const newTeam = player +1;
        setTeam(newTeam);
    }

    const handleRemove=()=>{
        setTeam(player-1)
    }

    const teamStyle = {
        border:'2px solid gray',
        margin: '15px',
        padding:'15px',
        borderRadius:'15px'
    }
    return (
        <div style={teamStyle}>
            <h3> Players:{player}</h3>
            <button onClick={handelAdd}>Add</button>

            <button onClick={handleRemove}>remove</button>
        </div>
    )
}