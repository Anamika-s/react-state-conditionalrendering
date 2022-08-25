import React, { Component } from 'react'

export default class Employee extends Component {
  
  constructor()
  {
    super()
    this.state=
    {
      id:100,
      name:'Ajay',
      dept:'Accts'
    }
  }
  Function1 = ()=>
  {
  console.log("Function called");
  }
  ChangeValues = ()=>
  {
    console.log(this.state.id + " " + 
    this.state.name + " " + this.state.dept)
    this.setState({id:101, name:'Deepak',dept :'Sales'})
  }
  render() {
    return (
      <div>  <h1> Employee Details </h1>
     ID :   {this.state.id} <br/>
     Name :   {this.state.name} <br/>
     Dept :   {this.state.dept} <br/> 
   <button type="button" onClick={this.Function1}> Call Function </button> 

   <button type="button" onClick={this.ChangeValues}> Update Values </button> 
      </div>
    )
  }
}
