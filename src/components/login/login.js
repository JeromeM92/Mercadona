import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  }

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  }

  handleLogin = () => {
    const { email, password } = this.state;
    // Ici, vous pouvez ajouter la logique de connexion, par exemple, en appelant une API.
  }

  render() {
    return (
      <div>
        <h1>Connexion</h1>
        <div>
          <label htmlFor="email">E-mail :</label>
          <input
            type="email"
            id="email"
            value={this.state.email}
            onChange={this.handleEmailChange}
          />
        </div>
        <div>
          <label htmlFor="password">Mot de passe :</label>
          <input
            type="password"
            id="password"
            value={this.state.password}
            onChange={this.handlePasswordChange}
          />
        </div>
        <button onClick={this.handleLogin}>Se connecter</button>
      </div>
    );
  }
}

export default Login;
