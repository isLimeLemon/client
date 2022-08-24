import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { connect } from 'react-redux'

import './styles.scss'

const NavBar = () => {
  

 const activeLink = "active"

  return (
    <div className='app-container'>
        <div className='navBar-container'>
            <div className='logo-container'>
              <div className='logo'>
                <h2>OnStock</h2>
              </div>
            </div>
            <div>

            </div>
            <div className='navLinks'>
              <NavLink to="/home" className={
                ({isActive})=> isActive ? activeLink : ''
              }>
                Nueva venta
              </NavLink>
              <NavLink to="/products" className={
                ({isActive})=> isActive ? activeLink : ''
              }>
                Productos
              </NavLink>
              <NavLink to="/valance" className={
                ({isActive})=> isActive ? activeLink : ''
              }>
                Valance
              </NavLink>
              <NavLink to="/orders" className={
                ({isActive})=> isActive ? activeLink : ''
              }>
                Pedidos
              </NavLink>
              <NavLink to="" onClick={()=>{}} className={
                ({isActive})=> isActive ? activeLink : ''
              }>
                Cerrar sesion 
              </NavLink>
            </div>
        </div>
        <div>
          <Outlet/>
        </div>
    </div>
  )
}
const mapStateToProps = state => {
  return {
    
  }
}

const connectedNavBar = connect(
  mapStateToProps,
  null
)(NavBar)

export default connectedNavBar