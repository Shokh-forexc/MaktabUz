import { Link } from 'react-router-dom'
import './NavbarMaktabUz.css'
import { useState } from 'react'
export const Navbar = () =>{  
    return(
        <div>
            <div className='Navbar'>
            <img src="https://toshvxtb.uz/uploads/8d95c3877e0502206aac1901e1264357.jpg" alt="" />
            <select class="form-select" aria-label="Default select example">
                 <option selected>O'zbek</option>
                 <option value="1">O'zbek</option>
                 <option value="2">Rus</option>
                 <option value="3">Eng</option>
            </select>
            <div class="input-group mb-3">
                 <input type="text" class="form-control" placeholder="Search" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                 <button class="btn btn-outline-secondary" type="button" id="button-addon2"><i className='bi bi-search'></i></button>
            </div>
            <i class="bi bi-eye"></i>
            <div className="Text">
                <Nav-item>Rules of etiquette</Nav-item>
                <Nav-item>Sports FAQ</Nav-item>
                <Nav-item>Lesson</Nav-item>
                <Nav-item>About Us</Nav-item>
                <Nav-item>Help</Nav-item>
                <Nav-item>FAQ</Nav-item>
            </div>
        </div>
        <div className="BootNavbar">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
  <img src="https://toshvxtb.uz/uploads/8d95c3877e0502206aac1901e1264357.jpg" alt="" />
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href=''><Link to={'/Rules'}>Rules of etiquette</Link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Sports FAQ</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Eng
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Uzb</a></li>
            <li><a class="dropdown-item" href="#">Rus</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Eng</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-disabled="true">Lesson</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-disabled="true">About Us</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
        </div>
    </div>
    )
}