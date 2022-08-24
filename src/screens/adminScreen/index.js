import React, {useState} from 'react'
import { connect } from 'react-redux'
import Input from '../../components/inputComponent'
import sessionActions from '../../store/session/actions'


import './styles.scss'

const AdminScreen = ({
  logIn
}) => { 


    /*
    const {userName,
    password,
    firstName,
    lastName,
    role, 
    contactData
    */
   
  return (
    <div className='admin_Container'>
        <div className='userForm'>
            
        </div>
        <div className='contactData'>
            <Input  />
        </div>
    </div>
  )
}

const mapDistpatchToProps = dispatch => {
  return{
    logIn:(userName, password)=>{return dispatch(sessionActions.logIn(userName,password))}
  }
}

const connectedAdmin = connect(
  null,
  mapDistpatchToProps
)(AdminScreen)

export default connectedAdmin