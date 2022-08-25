// We want to use State & update it also
// useState 

import { useState } from "react"

export const Emp = ()=>
{
  //  console.log(useState("Hello2"))
  //  var msg="Hello1"
//  [variab;e, Functionthatwillchangeitsvalue] = useState("initiaalue")
  var [msg,setMsg] = useState("Hello1")
  var [id, setId] = useState(100)
  var [name,setName] = useState("Ajay")
  var [dept,setDept]  = useState("Accts")
  const changeMsg =()=>
  {
    console.log(msg)
    msg="bye"
  setMsg("bye")
  }
  const UpdateValues = ()=>
  {
 setId(101)
 setName("Deepak")
 setDept("Sales")
  }
  return(
 <div> 
     <h1> {msg} </h1> 
     <h1> Employee Details </h1>
     ID :   {id} <br/>
     Name :   {name} <br/>
     Dept :   {dept} <br/> 

    <button type="button" onClick={changeMsg}> Change Message  </button>


    <button type="button" onClick={UpdateValues}> Update Values  </button>
 </div>
  )
}