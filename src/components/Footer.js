import React from 'react'
import { Link, Outlet } from 'react-router-dom'
function Footer() {
  return (
    <div class="col-12 col-md-4 text-md-end">
    <ul class="list-inline">
        <li class="list-inline-item"><i class="bi bi-linkedin"></i></li>
        <li class="list-inline-item"><i class="bi bi-twitter"></i></li>
        <li class="list-inline-item"><i class="bi bi-facebook"></i></li>
        <li class="list-inline-item"><i class="bi bi-instagram"></i></li>
    </ul>
</div>
    
    )
}
export default Footer;