import React from 'react';

class LoginForm extends React.Component {
  constructor() {
    super();


    this.state = {
      username: '',
      password: ''
    };
  }

  handleInput = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
    
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state;

    if (!username || !password) {
      return;
    }

    if(this.state.username.length > 0 && this.state.password.length > 0){
      this.props.onSubmit({ username, password });
    }
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" onChange={this.handleInput} name='username' value={this.state.user} type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" onChange={this.handleInput} name='password' value={this.state.pass} type="password" />
          </label>
        </div>
        <div>
          <button type="submit" onSubmit={this.props.onSubmit}>Log in</button>
        </div>
      </form>
    );
  }
}



export default LoginForm;
