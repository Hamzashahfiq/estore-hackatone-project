import React from 'react'
import './AdminLogin.css'
import Box from '@mui/material/Box'
import TextFields from '../authComponets/textFields/TextFields'
import BasicButton from '../authComponets/basicButton/BasicButton'
import UseLogin from './UseAdminLogin'
import { Link } from "react-router-dom";
import '../../../App.css'


export default function AdminLogin() {
  const { userData, setValue, loginHandler, loginLoading, } = UseLogin()
  return (
       <div className='mainDiv'>

          <div className='singinDiv'>
             <Box component='h3' sx={{ mb: 2 }}>Admin Login</Box>

             <p>Only click on login button</p>
             <Box component='form'>
                <TextFields value={userData.userEmail} change={(e) => setValue(e)} name="userEmail" type={'email'} required ={true} />
                <TextFields value={userData.password} change={(e) => setValue(e)} name="password" label={'Password'} type={'password'} required ={true} />
                <Box sx={{ textAlign: 'center', m:1}}>
                  <Link to ="/admin" style={{textDecoration: 'none'}}> <BasicButton style={{textDecoration: 'none'}} type= {'submit'} customStyle={{ margin: '0px' }}   loading={loginLoading} /></Link>
                   {/* <BasicButton type= {'submit'} customStyle={{ margin: '0px' }} onPress={loginHandler}  loading={loginLoading} /> */}
                </Box>
                <Box sx={{ textAlign: 'center',  m:1 }}>
                 {/* <Link to = '/signup' style={{textDecoration: 'none'}}><BasicButton text ={'Sign Up'} customStyle={{ margin: '0px', backgroundColor:"#c7893e"}}  /></Link>  */}
                </Box>
             </Box>
          </div>
       </div>
  )
}
