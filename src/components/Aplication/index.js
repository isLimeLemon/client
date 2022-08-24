import React, {useEffect} from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import LoginScreen from '../../screens/loginScreen';
import HomeScreen from '../../screens/homeScreen';
import NavBar from '../NavBarComponent';
import ProducsScreen from '../../screens/producsScreen';
import { getValidSession } from '../../store/session/selector';
import { connect } from 'react-redux';
import AppActions from '../../store/application/actions'
import SessionActios from '../../store/session/actions'
import { getAppHasBooted } from '../../store/application/selector'
import LoadScreen from '../../screens/loadingScreen';
import AdminScreen from '../../screens/adminScreen'
import 'sweetalert2/src/sweetalert2.scss'

const AplicationRouter = ({
    bootApp,
    validSession,
    appHasBooted,
    tryLoginByToken,
}) => {

    useEffect(()=>{
        bootApp()
    },[])

    useEffect(() => {
        if(appHasBooted){
            tryLoginByToken()
        }
    }, [appHasBooted])
    

    if(!appHasBooted){
        return <LoadScreen></LoadScreen>
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/admin' element={<AdminScreen/>}/>
            {(!validSession && appHasBooted) &&
            <>
                <Route path='/login' element={<LoginScreen/>}/>
                <Route path='/forgot-password' element={<LoginScreen/>}/>
                <Route path='/*' element={<Navigate to="/login" replace={true}/>}/>
            </>
            }
            {(validSession && appHasBooted)  && 
            <>
                <Route path='/' element={<NavBar/>}>
                    <Route path='home' element={<HomeScreen/>} />
                    <Route path='products' element={<ProducsScreen/>}/>
                    <Route path='/*' element={<Navigate to="/home" replace={true}/>}/>
                </Route>
            </>
            }
            </Routes>
        </BrowserRouter>
    )
}

const mapStateToProps = state => {
    return {
        validSession: getValidSession(state),
        appHasBooted: getAppHasBooted(state),
    }
}

const mapDistpatchToProps = dispatch => {
    return {
        bootApp:()=>{return dispatch(AppActions.bootApp())},
        tryLoginByToken:()=>{return dispatch(SessionActios.tryLoginByToken())}
    }
}
  
  const connectedApp = connect(
    mapStateToProps,
    mapDistpatchToProps
  )(AplicationRouter)

export default connectedApp