import React, { Component } from 'react'

export default class Home extends Component {
constructor()
{
  super()
  this.state =
  {
     isLoggedIn : false
  }
}
logoutClicked = ()=>
{
 this.setState({isLoggedIn:false})
}
loginClicked = ()=>
{
this.setState({isLoggedIn:true})
}
  render() {
    return (
      <div> Home Page 
      <Message isLoggedIn={this.state.isLoggedIn}/>
      {
        (this.state.isLoggedIn)?(
          <Logout clickButton={this.logoutClicked}/>
        ) : (
          <Login clickButton={this.loginClicked}/>
          
        )
      }
      </div>
    )


  }
}

function Message(props)
{ 
  console.log(props.isLoggedIn)
  if(props.isLoggedIn)
    return  <h1> Welcome User </h1>
    else 
return  <h1> Please Login </h1> 
}


function Login(props)
{
  return <button onClick={props.clickButton}> Login </button>
}


function Logout(props)
{
  return <button onClick={props.clickButton}> Logout </button>
}

