import React, { useContext } from 'react'
import { UserContext } from './context/UserContext'

function User({user}) {
    //console.log("User Component Props" , user,changeColor)
    const {changeColor} = useContext(UserContext)
    //console.log("Context data :",changeColor)
  return (
    <div style={{background:user.color,padding:"5px",border:"2px ridge",width:"600px",margin:"0 auto", borderRadius:"50px"}}>
       <h3>PART : {user.id}</h3>
       <p>Color : {user.color}</p>
       New Color : 
<input value={user.color} onChange={e=>changeColor(user.id,e.target.value)}/>
    </div>
  )
}

export default User