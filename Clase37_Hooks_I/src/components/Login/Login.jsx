import React, { Component } from "react";
import axios from 'axios';

import {userContext} from '../../context/userContext';

class Login extends Component {
  constructor(props) {
    super(props)
  
    this.state = { 
      id:""
    }
    this.name = React.createRef();
  }
  

handleChange = (event) => {
  console.log(event.target.value);
}

handleSubmit = async (event) =>{
  event.preventDefault();
  console.log("Enviado:"+this.name.current.value);

  const user = {
    name: this.name.current.value,
    DNI: "1234ABC",
    email:"falso@gmail.com"
  };

  const res = await axios.post(`https://jsonplaceholder.typicode.com/users`, { user });
  const data = await res.data;
  console.log(data);
  this.setState({id:data.id});
}
  render() {
    return <div>

              <h1>Introduce usuario</h1>
              <form onSubmit={this.handleSubmit} className="product-list-form">
                  
                  <label>
                  Nombre:
                  </label>
                  
                  <input type="text" onChange={this.handleChange} ref={this.name}/>
                  
                  <userContext.Consumer>
                    {({user,login}) => 
                      <input type="submit" value="Enviar" onClick={()=>login(this.name.current.value)}/>
                    }
                  </userContext.Consumer>
              </form>

              {this.state.id?<p>Gracias. Su ID de envío es: {this.state.id}</p>:""}
              
            </div>;
  }
}

export default Login;
