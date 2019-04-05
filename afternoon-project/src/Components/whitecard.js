import React, { Component } from 'react'
import '../App.css'

class Whitecard extends Component {




render() {
  return(
  <div className='infos'>
    <h1 className = 'fullName'>
      <u>
      {this.props.person.name.first + ' '} 
      {this.props.person.name.last}
      </u>
      </h1>
    <div className = 'from'>
       <p><b>From:</b>
      {this.props.person.city +', '}
      {this.props.person.country}
      </p>
    </div>
    <div className = 'job'>
      <p><b>Job Title:</b>
      {this.props.person.title}
      </p>
    </div>
    <div className = 'employer'>
      <p><b>Employer:</b>
      {this.props.person.employer}
      </p>
    </div>
     <div>
      <ol className = 'movies'>
        
          <b>Favorite Movies:</b>
        <li>1. {this.props.person.favoriteMovies[0]}</li>
        <li>2. {this.props.person.favoriteMovies[1]}</li>
        <li>3. {this.props.person.favoriteMovies[2]}</li>
        
      </ol>
      
      </div>
  
      <div className ='buttons'>   
        <button className='previous'
        onClick ={this.props.previousPerson}
        >Previous
        </button>
        <button className='next'
        onClick ={this.props.nextPerson}
        >Next</button>
      </div>
   
   
    </div>


  
  
    
  
  )
}


}


export default Whitecard