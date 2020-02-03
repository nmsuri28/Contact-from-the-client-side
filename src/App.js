import React from 'react';

// Contact Component
import Contact from './components/Contact'

//css
import './App.css';



function App() {

  return (
    <div className="App">

     {/* Jumbotron */}
      <div className="jumbotron backgroundImg ">
      <div className='row-fluid'>
      <div className='col textCss'>
        <h1 className="display-3">Sending Email from the Front-End with Email.js</h1>
          <p className="display-4">When a quick client side tool is needed</p>
          <p className="lead">
          <a className="btn btn-primary btn-lg" href="https://www.emailjs.com/" role="button">Learn more</a>
          </p>
      </div>
      </div>
      </div>
    

      <Contact/>
          
           
      <nav class="navbar fixed-bottom navbar-light ">
  <a class="navbar-brand" href="https://www.linkedin.com/in/natosha-arringtion-676263165/">
    <p >Created by Natosha Arrington</p>
  </a>
</nav>
    </div>
  );
}


export default App;
