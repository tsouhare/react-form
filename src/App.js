import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [data, setData] = useState({ name: "", email: "" })

  const handleSubmit = () => {
    setData({ name, email })
  }

  return (
    <>
    <div className="content">
      <h1 className="title">My First React Form</h1>
        <div className="form">
          <h4>Name:</h4>
          <input
            className="input"
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <h4>Email:</h4>
          <input
            className="input"
            type="text" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
           />
        <button className="submit-button" onClick={handleSubmit}>
          Submit
        </button>
        </div>
        <div className="output-box">
          <span>{data.name}</span>
          <span>{data.email}</span>
        </div>
    </div>
    </>
  )
}

export default App