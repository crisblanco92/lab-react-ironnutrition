import React, { Component } from 'react';

class Search extends Component {

    constructor(props) {

        super(props)

        this.state = {
          name:'',
          
        }
    }


    handleChange = e => {
      let { name, value} = e.target;
       this.setState({
         [name]: value
        }, () => {
          
          this.props.searchForFood(this.state.name)
        });
    }




    render() {
        return (
          <div className="search-container">
            <div className="search-bar">
              <input type="text" name="name" value={this.state.name} className="searchTerm" placeholder="What are you looking for?" onChange= { (e) => { 
                this.handleChange(e) 
              }}
              />
            </div>
          </div>
        )
    }
}


export default Search;