import React, { useState } from 'react'
import { connect } from 'react-redux'
import sessionActions from '../../store/session/actions'

const LoginForm = ({logIn}) => {

    const [userName, setUserName] = useState('')
    const [passWord, setPassWord] = useState('')

  return (
    <div>
        <label>Usuario</label>
        <input type="text" value={userName} onChange={e=>{setUserName(e.target.value)}} />
        <label>Contraseña</label>
        <input type="password" value={passWord} onChange={e=>{setPassWord(e.target.value)}}/>
        <button onClick={()=>{logIn(userName,passWord)}}>Ingresar</button>
    </div>
  )
}

const mapDispatchToProps = (dispatch) =>{
    return {
      logIn:(userName,password)=>{return dispatch(sessionActions.logIn(userName,password))}
    }
}
const mapStateToProps = (state) =>({
   
})

const connectedLoginForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginForm)

export default connectedLoginForm