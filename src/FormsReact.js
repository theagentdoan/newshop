import React from 'react';

class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.state = {user: '', pass:'', gender:'female'};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({[event.target.name]:event.target.value})
      
      console.log(this.state[event.target.name]);
    };
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      console.log(this.state)
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            User:
            <input type="text" name="user" value={this.state.user} onChange={this.handleChange} />
          </label>
           <br/>
          <label>
            Pass:
            <input type="password" name="pass" value={this.state.pass} onChange={this.handleChange} />
          </label>
          <br/>
          <label>
            Male:
            <input type="radio" name="gender" checked = {this.state.gender == "male"? true : false}  value="banana" onChange={this.handleChange} />
          </label>
          <label>
            Female:
            <input type="radio" name="gender" checked = {this.state.gender == "female"? true : false} value="pineapple" onChange={this.handleChange} />
          </label>
           <br/>
          
          <label>
            Address:
            <textarea name="address" value={this.state.address} onChange={this.handleChange} />
          </label>
           <br/>
          <input type="submit" value="Update" />
        </form>
      );
    }
  }
  
  ReactDOM.render(
    <NameForm />,
    document.getElementById('root')
  );