import React from 'react'
import { Link, Outlet } from 'react-router-dom'
function Header() {
  return (
    <div>
    <nav>
      <div>
        <h1> BlockTrack</h1>
      </div>
      <ul>
          <Link to = '/'> <li>Home</li> </Link>
          <Link to = '/product'> <li>Product</li> </Link>
          <Link to = '/add-product'> <li>Add Product</li> </Link>
          <Link to ="/connexion"> <li>Se connecter</li> </Link>
          <Link to = '/register'> <li>S'inscrire</li> </Link>
          <Link to = '/about'> <li>About</li> </Link>
      </ul>
    </nav>
    <Outlet></Outlet>
    </div>
  )
}

export default Header

