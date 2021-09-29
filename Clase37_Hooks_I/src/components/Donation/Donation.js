import React, { useState } from "react";


const Donation = () => {

  const [count, setCount] = useState(0);
    // useState devuelve un array [state, ()setState]
    // asique usamos destructuring para sacarlos a variables
  const [values, setValues] = useState({
      email: '',
      account: ''
  });


    const handleAddClick = () => {
        setCount(count + 1)
    }

    const handleSubClick = () => {
        setCount(count - 1)
    }

    const handleChange = (e) => {
      setValues({
          ...values,
          [e.target.name]: e.target.value
      })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(values)
    }

  return (
    <>
      <h1>Dóname una cerveza</h1>
      <h1>Cantidad a donar: {count} euros</h1>
      <button name='add' onClick={handleAddClick} >+</button>
      <button name='sub' onClick={handleSubClick} >-</button>
      <h1>Datos de facturación</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input name="email" type="text" onChange={handleChange}></input>
        <br/><br/>
        <label htmlFor="account">Bank Account</label>
        <input name="account" type="text" onChange={handleChange}></input>
        <br />
        <button >Pay</button>
      </form>
      <p>{values.email} va a pagar {count} cervezas</p>
    </>
  )
}



export default Donation;
