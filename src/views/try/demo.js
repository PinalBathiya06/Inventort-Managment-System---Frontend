import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CFormTextarea,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'

const demo = () => {
  // const[userInfo, setUserInfo] = useState(
  //   {
  //     name: "",
  //     address: "",
  //     email: "",
  //     contact: "",
  //     password: ""
  //   }
  // );

  // const handleChange = (e)=>{
  //   setUserInfo((prev)=>{
  //     prev = {
  //       ...prev,
  //       [e.target.name]:e.target.value
  //     }
  //     return prev;
  //   });
  // }

  // const handleRegister = async ()=> {
  //   let result = await fetch('http://localhost:8081/api/users/addUser', {
  //     method: "POST",
  //     headers: {
  //       'Content-Type': 'application/JSON',
  //       'Access-Control-Allow-Origin': '/*',
  //     },
  //     body:JSON.stringify(userInfo)
  //   })
  //   if(result.ok){
  //     window.location.href= "/src/views/dashboard/Dashboard.js";
  //   }
  // }

  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
    <CContainer>
      <CRow className="justify-content-center">
        <CCol md={8}>
          <CCardGroup>
            <CCard className="p-4">
              <CCardBody >
                <div className='text-center mb-2'> <h1>Register</h1> </div>
                <div className='mt-3'>
                  <img src='src\assets\images\16rhafyg.png' alt='' width={'100%'} height={'120%'} />
                </div>
                <CForm>
                  {/* <p className="text-body-secondary">Sign In to your account</p> */}
                  <CInputGroup className="mb-3 mt-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput type='text' id='floatingInput' floatingClassName='mb-3' floatingLabel = 'Name' placeholder="Username" autoComplete="username" />
                  </CInputGroup>
                  <CInputGroup className='mb-4'>
                    <CInputGroupText>


                    </CInputGroupText>
                    <CFormTextarea id='floatingTextarea' floatingLabel = 'Address' placeholder='Your Address Here'></CFormTextarea>
                  </CInputGroup>
                  <CInputGroup className='mb-4'>
                    <CInputGroupText id='basic-addon1'>@</CInputGroupText>
                    <CFormInput type='email' id='floatingInputInValid' floatingLabel = 'Email addres' placeholder='name@example.com' invalid />
                  </CInputGroup>
                  <CInputGroupText className='mb-4'>

                    <CFormInput type='text' id='floatingInput' floatingClassName='mb=3' floatingLabel = 'Contact' placeholder='9428675123' />
                  </CInputGroupText>
                  <CInputGroup className="mb-4">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="Password"
                      autoComplete="current-password"
                    />
                  </CInputGroup>
                  <CRow>
                    <CCol xs={6}>
                      <CButton color="primary" className="px-4" onClick={handleClick}>
                        Register
                      </CButton>
                    </CCol>
                    {/* <CCol xs={6} className="text-right">
                      <CButton color="link" className="px-0">
                        Forgot password?
                      </CButton>
                    </CCol> */}
                  </CRow>
                </CForm>
              </CCardBody>
            </CCard>
            <CCard className="bg-login text-black p-4" >
              <CCardBody  >
                {/* <div className='text-center mb-2'> <h1>Register</h1> </div> */}
                <div className="mt-5 text-center" >
                  <h3>
                    Register 
                  </h3>
                  <b> your Business  with us
                  </b>
                  <div className='mt-5'><h6>New Here? </h6>
                  </div>
                  {/* <Link to="/register">
                    <CButton color="primary" className=" mt-3" active tabIndex={-1}>
                      Register Now!
                    </CButton>
                  </Link> */}
                </div>
              </CCardBody>
            </CCard>
          </CCardGroup>
        </CCol>
      </CRow>
    </CContainer>
  </div>
  )
}

export default demo
