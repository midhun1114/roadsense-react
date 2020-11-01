
import 'bootstrap/dist/css/bootstrap.css';

import React, { Component } from 'react';

import './Status.css';
import { data } from './Form';
import StarRatingComponent from 'react-star-rating-component';


class status extends Component {
  state = {
    searchValue: null,
    filteredData: [],
    submitClicked: false
  };

  onSearchInput = (event) => {
    this.setState({ searchValue: event.target.value, submitClicked: false });
  }
  onSearch = () => {
    this.setState({ submitClicked: true});
    if (this.state.searchValue) {
      const items = data.map((data1) => {
        if (data1.name === this.state.searchValue) {
          return data1;
        }
      });
      this.setState({ filteredData: items.filter(Boolean) });
    } else {
      return null;
    }
  }
  render() {
    console.log("----------4--------", this.state.filteredData);
    let totalUserRating = 0;
    this.state.filteredData.forEach(d => {
      totalUserRating += d.starRating;
    })
    const averageRating = totalUserRating / this.state.filteredData.length;

    return (
      <div className="Status" ref={this.props.forwardRef}>
        <input type="text" id="searchName" class="form-control mb-4" placeholder="Name Of Road" onBlur={this.onSearchInput} />

        <button class="btn btn-info btn-block send_button" id="searchButton" onClick={this.onSearch}>Search</button>
        
        {this.state.filteredData.length ? (
          <>
          <p class="avgRating">Avg User rating !</p>
        <StarRatingComponent
          starCount={5}

          name="rateStatus"

          value={averageRating}
        />

          </>
        ) : null}
        {this.state.submitClicked && this.state.filteredData.length === 0 && (
          <p>No results found!</p>
        )}
         
        <div className="users">


          {this.state.filteredData.map((user, index) => (
            <div key={index} class='opinions'>
              <h3 class='mail'>{user.email}</h3> Says
              <p class='cmnt'>{user.comment}</p>
          <p class='location'>  <a href={user.location}>Location</a></p>
              <StarRatingComponent
                starCount={5}
            
                name="rateStatus"
                
                value={user.starRating}
              />
              <img class='road-img' src={user.imageFile} />
              <hr></hr>
            </div>
          ))}
        </div>







      </div>
    )
  }
}

export default status;