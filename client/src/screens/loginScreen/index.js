import React, {useState} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { FiUser } from 'react-icons/fi'
import { RiLockPasswordLine } from 'react-icons/ri'
import sessionActions from '../../store/session/actions'


import './styles.scss'

const LoginScreen = ({
  logIn
}) => { 
  
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

  return (
    <div className='login_Container'>
      
        <div className='login_Panel'>
          <div className='login_Panel_Image'>
            <div>
              <h1>OnStock</h1>
              <p>Tu negocio, organizado.</p>
            </div>
          </div>
          <div className='login_Panel_Form'>
              <div className='login_Panel_Form_Header'>
                <h1>¡Bienvenido!</h1>
                <p>Ingresá tu usuario y contraseña para acceder.</p>
              </div>
              <div className='login_Panel_Form_Content'>
                <div className='input-group'>
                  <label>Usuario</label>
                  <div className='input'>
                    <FiUser></FiUser>
                    <input type="text" value={userName} onChange={e=>{setUserName(e.target.value)}} />
                  </div>
                </div> 
                <div className='input-group'>
                  <label>Contraseña</label>
                  <div className='input'>
                    <RiLockPasswordLine></RiLockPasswordLine>
                    <input type="password" value={password} onChange={e=>{setPassword(e.target.value)}}/>
                  </div>
                </div>
                <div className='input-group_remember-forgot'>
                  <div className='remember'>
                    <input id='rememberSession' type="checkbox"/>
                    <label htmlFor='rememberSession'>Recordar por 7 días</label>
                  </div>
                  <div className='forgot'>
                    <Link to="/forgot-password">¿Olvidaste tu contraseña?</Link>
                  </div>
                </div>
                <div className='input-group_submit'>
                  <button onClick={()=>{logIn(userName,password)}}>Ingresar</button>
                </div>
              </div>
          </div>
        </div>
    </div>
  )
}

const mapDistpatchToProps = dispatch => {
  return{
    logIn:(userName, password)=>{return dispatch(sessionActions.logIn(userName,password))}
  }
}

const connectedLogin = connect(
  null,
  mapDistpatchToProps
)(LoginScreen)

export default connectedLogin