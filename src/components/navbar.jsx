import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (

    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/about">About Me</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/project">Project</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="https://drive.google.com/file/d/16IPHBsI-Et8jKELPvBNk1VuBNp-6hXXS/view?usp=drive_link" target="_blank" rel="noopener noreferrer" >Resume</a>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/expertise">Expertise</Link>
            </li>
 </ul>

            <ul className='navbar-nav ms-auto me-5'>
              <li className="nav-item ">
                <Link className="nav-link active " aria-current="page" to="/contact"><button type="button" className="btn btn-primary">Contact Us</button></Link>
              </li>
            </ul>






         


        </div>
      </div>
    </nav>
  )
}