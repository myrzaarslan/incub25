import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [inter, setInter] = useState(null)

  function handleName(formData) {
    const name = formData.get("name")
    setName(name)
    console.log(name)

    if (inter) {
      clearInterval(inter)
    }

    const intervalNum = setInterval(() => {
      setMessage("You got this, " + name + "!")
    }, 1000)

    setInter(intervalNum)
  }

  function handleReset() {

    if (inter) {
      clearInterval(inter)
    }
    setMessage("")
  }
  
  return (
    <>
      <form action={handleName}>
        <input name="name" placeholder="Your Name"/>
        <button type="start">Start Timer!</button>
      </form>

      <p>{message}</p>

      <button onClick={handleReset}>Reset</button>
    </>
  )
}

export default App
