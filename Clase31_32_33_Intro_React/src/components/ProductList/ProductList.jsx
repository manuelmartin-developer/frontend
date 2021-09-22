import React, { Component } from "react";
import Product from "../Product";
import products from "../../data";

class ProductList extends Component {

  constructor(props) {
    super(props)

    this.name = React.createRef();
    this.desc = React.createRef();
    this.url = React.createRef();
    this.price = React.createRef();

    this.state = {
      data: {},
      products: products //[{}, {}...] Array de productos from data.js
    }
  }

  // Function
  addProduct = (event) => {

    event.preventDefault();

    const name = this.name.current.value;
    const desc = this.desc.current.value;
    const url = this.url.current.value;
    const price = this.price.current.value;

    if (name && desc && url && price) {
      const product = { name, desc, url, price }

      this.setState({ data: product })
      //agregar producto al array
      const newProduct = product;
      this.setState({ products: [...this.state.products, newProduct] });
    }

  }
  removeAllProducts = () => {
    this.setState({ data: {} })
    this.setState({ products }) // Deja el estado inicial

  }
  removeOneProduct = (index) => {
    const remainProducts = this.state.products.filter((currentValue, currentIndex) => currentIndex !== index)
    this.setState({products:remainProducts});
  }

  paintProduct = () => {
    return this.state.products.map((product, index) => <Product info={product} key={index} remove={() => this.removeOneProduct(index)}/>)
  };


  handleChange = (event) => {
    // Vemos por consola lo que se va escribiendo en los inputs
    console.log(event.target.value)
  }


  render() {

    const message = this.state.data.name ? <h1>Ultimo producto agregado: {this.state.data.name}</h1> : <h1>Bienvenido, agrega un producto</h1>
    return (
      // ó <></>
      <React.Fragment>

        <form onSubmit={this.addProduct}>
          <label>
            Nombre:
            <input type="text" name="name" ref={this.name} />
          </label>
          <label>
            Descripción:
            <input type="text" name="desc" ref={this.desc}/>
          </label>
          <label>
            URL:
            <input type="url" name="url" ref={this.url} />
          </label>
          <label>
            Precio:
            <input type="number" name="price" ref={this.price}/>
          </label>
          <input type="submit" value="Submit" />
        </form>

        <section>
          <h1>Agregar Producto</h1>
          <button onClick={this.addProduct}>agregar</button>
          <button onClick={this.removeAllProducts}>borrar todo</button>
          {message}
        </section>

        <section>
          <h1>Esto es una lista de productos</h1>
          <article>
            {this.paintProduct()}
          </article>
        </section>
      </React.Fragment>
    )
  }
}

export default ProductList;
