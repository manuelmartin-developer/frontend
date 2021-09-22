import React, { Component } from 'react'
import Product from '../Product'
import products from '../../data.js'

export class ProductList extends Component {

    constructor(props) {
        super(props)
    
        this.url = React.createRef(); // Referencia para URL
        this.texto = React.createRef();

        this.state = {
             data:{},
             "products": products // [{p1},{p2},{p3},{p4},{p5}]
        }
    }
    
    addProduct = (event) => {
        //const name = prompt("Introduce nombre")
        //const desc = prompt("introduce descripción")

        event.preventDefault();
        console.log("**************************");
        const name = event.target.elements.name.value;
        const desc = event.target.elements.desc.value;

        const price = event.target.elements.price.value;
        //const url = event.target.elements.url.value;
        const url = this.url.current.value; // Leer el valor de la referencia URL
        alert(url)

        if(name && desc && price && url){
            const product = {name,desc,price,url}
            this.setState({data:product})

            //Añadir producto al array
            const newProduct = product
            this.setState({ products: [...this.state.products, newProduct]})
        }

    }
    removeAllProducts = () => {
        this.setState({data:{}})
        this.setState({products}) // Deja el estado inicial
    }
    removeProduct = (i) => {
       const remainProducts = this.state.products.filter((product,j)=>j!==i);
       this.setState({products:remainProducts})
    }

    paintProducts = () => {
        // [{p1},{p2},{p3},{p4},{p5}] --> this.state.products
        return this.state.products.map((product,i)=><Product info={product} key={i} remove={()=>this.removeProduct(i)}/>)
    }

    handleChange = (event) => {
        console.log(event.target.value);
    }
    leerDato = () => {
        console.log(this.texto.current.value)
    }


    render() {
        const message = this.state.data.name?
        <h3>Último producto añadido: {this.state.data.name}</h3>:
        <h3>Bienvenido, añade algo</h3>

        return (
            <div className="productList">
                <form onSubmit={this.addProduct}>
                    <label>
                    Nombre:
                    <input type="text" name="name" onChange={this.handleChange} />
                    </label>
                    <br/>
                    <label>
                    Descripción:
                    <input type="text" name="desc"/>
                    </label><br/>
                    <label>
                    Precio:
                    <input type="number" name="price"/>
                    </label><br/>
                    <label>
                    URL img:
                    <input type="url" name="url" ref={this.url}/>
                    </label><br/>
                    <input type="submit" value="Submit" />
                </form>

                <section>
                    <h1>Añadir producto</h1>
                    <button onClick={this.addProduct}>Añadir producto</button>
                    <button onClick={this.removeAllProducts}>Borrar todo</button>
                    {message}
                </section>

                <section className="productList--products">
                    <h1>Lista de productos</h1> 
                    <article className="productList--products-article">
                        {this.paintProducts()}
                    </article>
                </section>
            </div>
        )
    }
}

export default ProductList
