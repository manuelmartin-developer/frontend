import React, { Component } from "react";
import { userContext } from '../../contexts/userContex';


class Login extends Component {

  constructor(props) {
    super(props)

    this.user = React.createRef();
  }

  handleChange = (event) => {
    console.log(event.target.value);
  }
  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({

    })
  }

  render() {
    return (
      <>
        <h1>Introduce Nombre</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} ref={this.user} />
          <userContext.Consumer>
            {({ user, login }) => 
              <input type="submit" value="Enviar" onClick={() => login(this.user.current.value)} />
            }
          </userContext.Consumer>
        </form>
      </>
    )
  }
}

export default Login;
