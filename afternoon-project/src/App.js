import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data'
import Whitecard from './Components/whitecard';

class App extends Component {
  
  state = {
    i:0
  }
  
  nextPerson =()=> {
    console.log('hit')
    if(this.state.i === 24){
      this.state.i = 0
    }
    this.setState({
      i:this.state.i + 1
    })
  }

  previousPerson = () => {
    console.log(this.state.i)
    if(this.state.i ===  0) {
      this.state.i=25
     }  
    this.setState({
      i:this.state.i - 1
    })
    
  }
  
  
  render() {
    return (
      <div className="App">
       <header className="App-header">Home</header>
        <div className ='body'>
          <div className ='whiteBox'>

          <Whitecard person = {data[this.state.i]}
            nextPerson = {this.nextPerson}
            previousPerson = {this.previousPerson}
        />
        </div>
       
       </div>
        
         
        
      </div>
    );
  }
}

export default App;
