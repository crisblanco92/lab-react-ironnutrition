import React, {Component} from "react";


class FoodForm extends Component {


  constructor(props) {

    super(props)

    this.state = {
      name : '', 
      calories: '', 
      image:''}
}




handleChange = e => {
  let { name, value} = e.target;
  console.log(e.target)
  
      this.setState({
        [name]: value
      });
}


handleForSubmit = e => {
  e.preventDefault()
  this.props.addNewFood(this.state)
  this.setState({
    name: '',
    calories: '',
    image: ''
  })
}




    render(){
      return (
        <section className="form-box">

        <form onSubmit={this.handleForSubmit}>
        <label for="name">Name</label>
        <input type="text" name="name" value={this.state.name} onChange={(e) => this.handleChange(e)} /><br></br><br></br>
        <label for="calories">Calories</label>
        <input type="text" name="calories" value={this.state.calories} onChange={(e) => this.handleChange(e)} /><br></br><br></br>
        <label for="calories">Image</label>
        <input type="text" name="image" value={this.state.image} onChange={(e) => this.handleChange(e)} /><br></br><br></br>
        
        <button>Submit</button>       
 {/* <img src={this.image} alt="food-image" /> */}
        </form>
        </section>
      )
      
    }




}
export default FoodForm;