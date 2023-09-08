import { useEffect, useState } from 'react'
import './friends.css'
import Friend1 from './friend'


export default function Friends(){
    // step 1
    const [friends,setFriends] = useState([])
    //step 2
    useEffect(()=>{
        // step 3
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFriends(data))
    },[])
    
    return (
        <div className="card">
            <h3>Friends:{friends.length} </h3>

            {
                // 5 and friend component
                friends.map(friend => <Friend1 kamal={friend}></Friend1>)
            }
        </div>
    )
}

/*
1. to load data declared a state to hold data.
2. useEffect with dependency array.
3. use fetch to load data
4.set loaded data to state
5.display data on the component
*/