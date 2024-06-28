import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
//import { login } from "../../../services/userServices"

const Login = () => {

//   useEffect(()=>{
//     document.title = "Login Page"
// },[])

  const id = useRef("");
  const email = useRef(null);
  const password = useRef(null);

  // async function handleClick(){
  //   const data = {
  //     id: id.current,
  //     email: email.current.value,
  //     password: password.current.value,
  //   }

  //   let result = await fetch('http://localhost:8081/api/users/login', {
  //     method: 'POST',
  //     headers: {'content-Type': 'application/JSON'},
  //     body: JSON.stringify(data)
  //   })
  //   if (data != null) {
  //     result(data).then(res => {
  //         console.log("Hi");
  //         if (res.status === 200) {
  //                 console.log(res);
  //                 localStorage.setItem("token", res.data.token);
  //                 localStorage.setItem("id", res.data.id);
  //                 window.location.href = "#/dashboard";        
  //         }
  //     }).catch(err=>alert("Wrong User Name And Password"));
  // }


  //   // if(!result.ok)
  //   // {
  //   //   alert('Nope');
  //   //   return;
  //   // }
  //   // if(email==null || password==null){
  //   //   alert('Please fill in all fields');
  //   //   return;
  //   // }
    

  //   //  window.location.href = "#/dashboard";
  // }
//   async function handleClick() {
//     const data = {
//         id: id.current,
//         email: email.current.value,
//         password: password.current.value,
//     };

//     try {
//         const response = await fetch('http://localhost:8081/api/users/login', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(data)
//         });

//         if (!response.ok) {
//             throw new Error('Login failed');
//         }

//         const responseData = await response.json();
//         console.log(responseData);

//         localStorage.setItem("token", responseData.token);
//         localStorage.setItem("id", responseData.id);
//         window.location.href = "#/dashboard";
//     } catch (error) {
//         console.error('Error during login:', error);
//         alert("Wrong User Name And Password");
//     }
// }
// async function handleClick() {
//   const emailValue = email.current.value;
//   const passwordValue = password.current.value;

//   if (!emailValue || !passwordValue) {
//       alert("Please fill in all fields");
//       return;
//   }

//   const data = {
//       id: id.current,
//       email: emailValue,
//       password: passwordValue,
//   };

//   try {
//       const response = await fetch('http://localhost:8081/api/users/login', {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify(data)
//       });

//       if (!response.ok) {
//           throw new Error('Login failed');
//       }

//       const responseData = await response.json();
//       console.log(responseData);

//       localStorage.setItem("token", responseData.token);
//       localStorage.setItem("id", responseData.id);
//       window.location.href = "#/dashboard";
//   } catch (error) {
//       console.error('Error during login:', error);
//       alert("Wrong User Name And Password");
//   }
// }


// async function handleClick() {
//   const emailValue = email.current.value;
//   const passwordValue = password.current.value;

//   if (!emailValue || !passwordValue) {
//       alert("Please fill in all fields");
//       return;
//   }

//   const data = {
//       id: id.current,
//       email: emailValue,
//       password: passwordValue,
//   };

//   try {
//       const response = await fetch('http://localhost:8081/api/users/login', {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify(data)
//       });

//       const responseData = await response.json();

//       if (response.ok) {
//           console.log(responseData);
//           localStorage.setItem("token", responseData.token);
//           localStorage.setItem("id", responseData.id);
//           window.location.href = "#/dashboard";
//       } else {
//           throw new Error(responseData.message || 'Login failed');
//       }
//   } catch (error) {
//       console.error('Error during login:', error);
//       alert("Wrong User Name And Password");
//   }
// }

// async function handleClick() {
//   const emailValue = email.current.value;
//   const passwordValue = password.current.value;

//   if (!emailValue || !passwordValue) {
//       alert("Please fill in all fields");
//       return;
//   }

//   const data = {
//       email: emailValue,
//       password: passwordValue,
//   };

//   try {
//       const response = await fetch('http://localhost:8081/api/users/login', {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify(data)
//       });

//       const responseData = await response.json();

//       if (response.ok) {
//           console.log(responseData);
//           localStorage.setItem("token", responseData.token);
//           // Optionally, you can also store user data in localStorage
//           localStorage.setItem("user", JSON.stringify(responseData.user));
//           window.location.href = "#/dashboard";
//       } else {
//           throw new Error(responseData.message || 'Login failed');
//       }
//   } catch (error) {
//       console.error('Error during login:', error);
//       alert("Wrong User Name And Password");
//   }
// }

// async function handleClick() {
//   const emailValue = email.current.value;
//   const passwordValue = password.current.value;

//   if (!emailValue || !passwordValue) {
//       alert("Please fill in all fields");
//       return;
//   }

//   const data = {
//       email: emailValue,
//       password: passwordValue,
//   };

//   try {
//       const response = await fetch('http://localhost:8081/api/users/login', {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify(data)
//       });

//       const responseData = await response.json();

//       if (response.ok) {
//           console.log(responseData);
//           localStorage.setItem("token", responseData.token);
//           // Optionally, you can also store user data in localStorage
//           localStorage.setItem("user", JSON.stringify(responseData.user));
//           window.location.href = "#/dashboard";
//       } else {
//           // Handle error response from the server
//           console.error('Error during login:', responseData.message);
//           alert(responseData.message || 'Login failed');
//       }
//   } catch (error) {
//       console.error('Error during login:', error);
//       alert("An unexpected error occurred during login");
//   }
// }
// async function handleClick() {
//   const emailValue = email.current.value;
//   const passwordValue = password.current.value;

//   if (!emailValue || !passwordValue) {
//       alert("Please fill in all fields");
//       return;
//   }

//   const data = {
//       email: emailValue,
//       password: passwordValue,
//   };

//   try {
//       const response = await fetch('http://localhost:8081/api/users/login', {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify(data)
//       });

//       const responseData = await response.json();

//       if (response.status === 200) { // Check for successful response status
//           console.log(responseData);
//           localStorage.setItem("token", responseData.token);
//           // Optionally, you can also store user data in localStorage
//           localStorage.setItem("user", JSON.stringify(responseData.user));
//           window.location.href = "#/dashboard";
//       } else {
//           // Handle error response from the server
//           console.error('Error during login:', responseData.message);
//           alert(responseData.message || 'Login failed');
//       }
//   } catch (error) {
//       console.error('Error during login:', error);
//       alert("An unexpected error occurred during login");
//   }
// }

async function handleClick() {
  const emailValue = email.current.value;
  const passwordValue = password.current.value;

  if (!emailValue || !passwordValue) {
      alert("Please fill in all fields");
      return;
  }

  const data = {
      email: emailValue,
      password: passwordValue,
  };

  try {
      const response = await fetch('http://localhost:8081/api/users/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
      });

      const responseData = await response.json();

      if (response.ok && responseData.status === 200) {
          console.log(responseData);

          localStorage.setItem("token", responseData.token);
          localStorage.setItem("user", JSON.stringify(responseData.user));
          
          window.location.href = "#/dashboard";
      } else {
          console.error('Error during login:', responseData.message);
          alert(responseData.message || 'Login failed');
      }
  } catch (error) {
      console.error('Error during login:', error);
      alert("An unexpected error occurred during login");
  }
}






  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody >
                  <div className='text-center mb-2'> <h1>Login</h1> </div>
                  <div className='mt-3'>
                    <img src='src\assets\images\16rhafyg.png' alt='' width={'100%'} height={'120%'} />
                  </div>
                    {/* <p className="text-body-secondary">Sign In to your account</p> */}
                    <CInputGroup className="mb-3 mt-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput placeholder="Email" autoComplete="email" ref={email} required/>
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        ref={password}
                        required
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton color="primary" className="px-4" onClick={handleClick} >
                          Login
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>
                </CCardBody>
              </CCard>
              <CCard className="bg-login text-black p-4" >
                <CCardBody  >
                  <div className='text-center mb-2'> <h1>Register</h1> </div>
                  <div className="mt-5 text-center" >
                    <h3>
                      Welcome, User!
                    </h3>
                    <b> This is a website in which you can generate your invoices. Also you can download and print invoices.
                    </b>
                    <div className='mt-5'><h6>New Here? </h6>
                    </div>
                    <Link to="/register">
                      <CButton color="primary" className=" mt-3" >
                        Register Now!
                      </CButton>
                    </Link>
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

export default Login
