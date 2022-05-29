import React, {useEffect} from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import LoginScreen from '../../screens/loginScreen';
import HomeScreen from '../../screens/homeScreen';
import NavBar from '../NavBarComponent';
import ProducsScreen from '../../screens/producsScreen';
import { getValidSession } from '../../store/session/selector';
import { connect } from 'react-redux';
import AppActions from '../../store/application/actions'

const AplicationRouter = ({
    bootApp,
    validSession
}) => {

    useEffect(() => {
        bootApp()
    }, [])
    

  return (
    <BrowserRouter>
          <Routes>
            {!validSession &&
            <>
                <Route path='/login' element={<LoginScreen/>}/>
                <Route path='/forgot-password' element={<LoginScreen/>}/>
                <Route path='/*' element={<Navigate to="/login" replace={true}/>}/>
            </>
            }
            {validSession && 
            <>
                <Route path='/' element={<NavBar/>}>
                    <Route path='home' element={<HomeScreen/>} />
                    <Route path='products' element={<ProducsScreen/>}/>
                    <Route path='/*' element={<HomeScreen/>}/>
                </Route>
                <Route path='/*' element={<Navigate to="/home" replace={true}/>}/>
            </>
            }
          </Routes>
      </BrowserRouter>
  )
}

const mapStateToProps = state => {
    return {
        validSession: getValidSession(state)
    }
}

const mapDistpatchToProps = dispatch => {
    return {
        bootApp:()=>{return dispatch(AppActions.bootApp())}
    }
}
  
  const connectedApp = connect(
    mapStateToProps,
    mapDistpatchToProps
  )(AplicationRouter)

export default connectedApp