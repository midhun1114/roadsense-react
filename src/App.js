import logo1 from './logo1.png';
import './App.css';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, { Component, createRef } from 'react';
import {data} from './Form/Form'
import Status from './Form/Status'
import StarRatingComponent from 'react-star-rating-component';
// import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

class App extends Component {
  
  state = {
    imageFile: null,
    email: null,
    name:null,
    comment: null,
    location: null,
    showReport: false,
    showStatus: false,
    starRating: 0
  } ;

  myRef = createRef(null);
  statusRef = createRef(null);

  componentDidUpdate(_prevProps, prevState) {
    if (prevState.showReport !== this.state.showReport && this.state.showReport) {
      this.scrollToMyRef();
    } else if (prevState.showStatus !== this.state.showStatus && this.state.showStatus) {
      this.scrollToStatusRef();
    }
  }

  scrollToMyRef = () => window.scrollTo(0, this.myRef.current.offsetTop);
  scrollToStatusRef = () => window.scrollTo(0, this.statusRef.current.offsetTop);
  ratingChanged = (newRating) => {
    console.log(newRating);
    this.setState({starRating: newRating});
  }
  toggleRoadReportHandler = () => {
   
    this.setState( { showReport: true, showStatus: false } );
  }
  toggleRoadStatusHandler = () => {
  
    this.setState( { showStatus: true, showReport: false } );
  }
  submitHandle =() =>
  {
    alert("Successfully Submitted");
    document.getElementById("report").reset();
    data.push(this.state);
    this.setState({
      imageFile: null,
      email: null,
      name:null,
      comment: null,
      location: null,
      showReport: true,
      showStatus: false,
      starRating: 0
    });
  }

  handleChange = (event) => {
    console.log(event.target);
    if(event.target.id=='defaultContactFormName')
    {
      this.setState({
        name :event.target.value
        
       });
      
    }
    if(event.target.id=='defaultContactFormEmail')
    {
      this.setState({
        email :event.target.value
        
       });
       
    }
    if(event.target.id=='defaultContactFormLocation')
    {
      this.setState({
        location :event.target.value
       });
    }
    if(event.target.id=='defaultContactFormFile')
    {
      if (event.target.files.length)
    {
     console.log(event.target.files);
    this.setState({
      imageFile: URL.createObjectURL(event.target.files[0])
     });
     
    }
    
  }
  if(event.target.id=='comment')
  {
    this.setState({
      comment :event.target.value
      
     });
     
  }
}
 
  render() {
    let road = null;
    if ( this.state.showReport ) { 
      road = (
        <div ref={this.myRef}>
          <div class="row">
          <div class="col-lg-6 col-md-12">
            <form class="text-center border border-light p-5" id="report" action="#!">

             
              <input type="text" id="defaultContactFormName" class="form-control mb-4" placeholder="Name Of Road" onBlur={this.handleChange} />
              <input type="email" id="defaultContactFormEmail" class="form-control mb-4" placeholder="E-mail" onBlur={this.handleChange} />
              <input type="file" id="defaultContactFormFile" class="form-control mb-4" placeholder="Photo/Video" onBlur={this.handleChange} />
              <input type="url" id="defaultContactFormLocation" class="form-control mb-4" placeholder="Location" onBlur={this.handleChange} />
              <div class="form-group">
                <textarea class="form-control rounded-0" id="comment" rows="3" placeholder="Comment(Optional)" onBlur={this.handleChange}></textarea>
              </div>
              <StarRatingComponent
                starCount={5}
                onStarClick={this.ratingChanged}  
                name="rate1" 
               
                value={this.state.starRating}
              />
              <button class="btn btn-info btn-block send_button" type="button" onClick={this.submitHandle}> Submit</button>
              


            </form>
           
            


          </div>
        
        </div>
         
        </div>
      );
    }
    else if (this.state.showStatus)
{
  
  road = (
    <Status forwardRef={this.statusRef}/>
  );
}

    return (
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light navbar-trans navbar-inverse">
          <a className="navbar-brand" href="#"><img src={logo1} className='logo' /></a>
          <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">

            <ul className="navbar-nav ml-auto">

              <li className="nav-item">
                <a className="nav-link" href="#abt">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#cta">Contact Us</a>
              </li>
            </ul>
          </div>
        </nav>

        <section id="title">
          <div className="container-fluid">
            <div className='row bg'>

              <div className='col-lg-6 md-3 sm-1 left'>

                <h1 className='brand-txt'>Roadsense</h1>
                <p class='about'>Our website allows you to see the status of the roads you wish to travel so that you can preplan and select the road better for your ride.
You can also report bad roads and we will try our best to bring it up to the officials.</p>
              </div>

              <div className='col-lg-6 md-3 sm-1 right'>

              </div>
            </div>
          </div>
        </section>
        <section className="row p-4 outerbox">
          
          <button type="button" className="btn btn-light funcs " onClick={this.toggleRoadReportHandler}>Road Report</button>
          <button type="button" className="btn btn-light funcs" onClick={this.toggleRoadStatusHandler}>Road Status</button>
        </section>

        <section class='container-fluid form-section'>
        {road}
        </section>
            
        
      </div>
    );
  }
}

export default App;