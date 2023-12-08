import React from 'react';
import logo from '../Assets/logo.jpg';
import '../CSS/Navbar.css';


export default function Navbar() {
  const number = 36;

  return (
  // <div>

      <nav className="navbar navbar-expand-lg bg-body">
        <div className="container">
            <a className="navbar-brand" href="#"><img classNameNameName='img-thumbnail' src={logo} alt='brand_name' width={150} height={50}/></a>
            <button className="navbar-toggler ms-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse ms-3">
            <button className="toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
              </button>

            <div className="dropdown ms-3">
              {/* <a className="btn btn-light dropdown-toggle all-btn" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                All   
              </a> */}
              <select className='dropdown'>
                <option value="">All</option>
                <option value="">All</option>

              </select>

              <ul className="dropdown-menu ps-2">
                <li><a className="dropdown-item" href="#">Watches</a></li>
                <li><a className="dropdown-item" href="#">New Arrivals</a></li>
                <li><a className="dropdown-item" href="#">Products</a></li>
              </ul>

            </div>
              <form className="d-flex w-75" role="search">
                <input type="text" className="form-control all-btn1" placeholder="Search" aria-label="Recipient's username" aria-describedby="button-addon2" />
                <button className="btn btn-primary" type="button" id="button-addon2"><i className="fa-solid fa-magnifying-glass" /></button>
              </form>

              <button className="btn ms-2" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="User" type="button"><i className="fa-solid fa-user"></i></button>
              <button className="btn btn position-relative" type="submit"><i className="fa-solid fa-cart-shopping"><span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{number}<span className="visually-hidden">unread messages</span></span></i></button>
            </div>
                      {/* Names on Nav bar*/}

            {/* <div class="collapse navbar-collapse" id="navbarSupportedContent" >
              <ul class="navbar-nav me-auto mb-2 mb-lg-0 " data-bs-toggle="collapse">
                <li class="nav-item" data-bs-toggle="collapse">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item" data-bs-toggle="collapse">
                  <a class="nav-link" href="#">About</a>
                </li>

                <li className='' data-bs-toggle="collapse"><a class="nav-link" href="#">New Arrivals</a></li>
                <li className='' data-bs-toggle="collapse"><a class="nav-link" href="#">Products</a></li>
              </ul>

            </div> */}
        </div>
      </nav>

  // </div>

  )
}