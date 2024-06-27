import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import Image from '../assets/Photo10.jpeg'


const Home = () => {
  return (
    <div className="home-container" style={{backgroundImage: `url(${Image})`}}>
      <div className="title-home">Welcome to our CRUD application!</div>

      <div className="info-text">
        <p>"Here, you can create , Here, you can read, Here, you can update, Here, you can delete tasks seamlessly. Enjoy a smooth and intuitive user experience designed to boost your productivity."</p>
      </div>

      <div className="button-container">
        <Link to="/task" className="button pulse" >Create a new task</Link>
        
      </div>
    </div>
  )
}

export default Home
