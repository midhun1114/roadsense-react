import logo1 from './logo1.png';
import './App.css';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';


class App extends Component {
  render () {
    



  return (
    <div className="App">
                      <nav className="navbar navbar-expand-lg navbar-dark navbar-trans navbar-inverse">
                    <a className="navbar-brand" href="#"><img src={logo1} className='logo'  /></a>
                    <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02">
                        <span className="navbar-toggler-icon"></span>
                    </button>
            
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            
                      <ul className="navbar-nav ml-auto">
                        
                        <li className="nav-item">
                          <a className="nav-link" href="#pricing">About</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#cta">Contact</a>
                        </li>
                      </ul>
                    </div>
                </nav>

                <section id="title">
                  <div className="container-fluid"> 
                  <div className='row bg'>

                  <div className='col-lg-6 md-3 sm-1 left'>
                    
                      <h1 className='brand-txt'>Roadsense</h1>
                    </div>
                    
                    <div className='col-lg-6 md-3 sm-1 right'>

                    </div>
                  </div>
                </div>
                </section>
                <section className="row p-4 outerbox">
                <button type="button" className="btn btn-dark funcs">Road Report</button>
                <button type="button" className="btn btn-dark funcs">Road Status</button>
                </section>
                
               
      
    </div>

  );
}
}

export default App;
