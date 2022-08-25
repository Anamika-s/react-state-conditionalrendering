import React from 'react'

export const AuthButton = (props) => {
  console.log(props)
  let {isLoggedIn} = props;

   if(isLoggedIn)
    return <button> Logout </button>
    else 
    return <button> Login </button>
  
}
