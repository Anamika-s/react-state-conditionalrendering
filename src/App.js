import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { AuthButton } from './AuthButton';
import { AuthButton1 } from './AuthButton1';
class App extends Component {
 constructor(props)
 {
  super(props)
  this.state=
  {
    isLoggedIn:false
  }
 }
  render()  
  {

    let isLoggedIn = this.state.isLoggedIn;
    let AuthButton;
    if(isLoggedIn)
    AuthButton = <button> Logout </button>
    else 
    AuthButton = <button> Login </button>
  //  const renderAuthButton = () =>
  //  {
  //   if(isLoggedIn)
  //   return <button> Logout </button>
  //   else 
  //   return <button> Login </button>
    
  //  }

  return (
    <div className="App">
      
  <h1>Demo 111 showing Conditional Rendeing in different ways </h1>      
  {/* <button> Login </button>   
  <button> Logout</button> */}
  {/* {renderAuthButton()} */}
  {/* <AuthButton isLoggedIn={this.state.isLoggedIn}/> */}
  {/* <AuthButton1 isLoggedIn={this.state.isLoggedIn}/> */}
  {/* {AuthButton} */}
 
  {/* {isLoggedIn ? <button>Logout </button> : <button>Login</button>  } */}
  {isLoggedIn && <button> Logout </button> }
  {!isLoggedIn && <button> Login </button> }

    </div>
  );
}
}
export default App;
