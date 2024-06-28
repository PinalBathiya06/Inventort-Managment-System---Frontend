import React, { useEffect, useState } from 'react'
import CIcon from '@coreui/icons-react';
import { cilPlus, cilUser, cilAddressBook, cilContact } from '@coreui/icons'
import { CFormInput, CCol, CButton, CContainer, CRow, CCardBody, CCardGroup, CCard, CInputGroup, CInputGroupText, CForm } from '@coreui/react'
// import { Axios } from 'axios';
import axios from "axios"
import { useParams, useNavigate } from "react-router-dom"
//import { BsAlignCenter } from 'react-icons/bs';
//import {  cilName, cilContact } from '@coreui/icons'

const Editprofile = () => {
    // const [name, setName] = useState('');
    // const [addr, setQty] = useState('');
    // const [email, setEmail, status: res.data[0].Status] = useState('');
    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     // const response = await axios.put(`/products/${name}`,{
    //     //     description,
    //     //     addr,
    //     //     email
    //     // });
    //     // if(response.status === 200){
    //     //     alert(`Successfully`);
    //     // }else{
    //     //     alert(`Failed`);
    //     // }
    //     const updatedProduct = {
    //         id: id, // Assuming the product ID is the same as the description
    //         description: description,
    //         addr: addr,
    //         email: email
    //       };
    //       try {
    //         const response = await axios.put(`/products/${id}`, updatedProduct);
    //         if(response.status === 200) {
    //           alert(`Successfully updated product`);
    //           // You can also navigate back to the product list after updating a product
    //           // window.location.href = "/Listproduct";
    //         } else {
    //           alert(`Failed to update product`);
    //         }
    //       } catch (error) {
    //         console.error(error);
    //         alert(`Failed to update product`);
    //       }
    // };
    const { id } = useParams();
    // const {product, setProduct} = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8081/api/users/${id}`)
            .then(res => {
                console.log(res)
                setValues({ ...values, name: res.data[0].Name, addr: res.data[0].Address, email: res.data[0].Email, contact: res.data[0].Contact })

            })
            .catch(err => console.log(err))
    }, [])
    const [values, setValues] = useState({
        name: '',
        address: '',
        email: '',
        contact: ''
    })

    const handleUpdate = (event) => {
        event.preventDefault();
        axios.put(`http://localhost:8081/api/users/${id}`, values)
            .then(res => {
                console.log(res)
                navigate('/Profile')
            }).catch(err => console.log(err))
    }

    return (
      <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={6}>
            <CCardGroup>
              <CCard className="p-2">
                <CCardBody >
                  {/* <div className='text-center mb-2'> <h1>Register</h1> </div> */}
                   <div className="mt-2 text-center" >
                    <h3>
                      Edit Profile 
                    </h3>
                    {/* <div className='mt-5'><h6>New Here? </h6>
                    </div> */}
                    {/* <Link to="/register">
                      <CButton color="primary" className=" mt-3" active tabIndex={-1}>
                      Register Now!
                      </CButton>
                    </Link> */}
                  </div>
                     <CForm onSubmit={handleUpdate}>
                         <CInputGroup className="mb-3 mt-3">
                             <CInputGroupText>
                                 <CIcon icon={cilUser} />
                             </CInputGroupText>
                             <CFormInput
                                 type="text"
                                 id='floatingInput'
                                 floatingLabel="Name"
                                 floatingClassName="mb-8"
                                 placeholder="name"
                                 defaultValue={values.name}
                                 onChange={(e) => setValues({ ...values, name: e.target.value })}
                             />
                         </CInputGroup>
                         <CInputGroup className='mb-3 mt-3'>
                         <CInputGroupText>
                                 <CIcon icon={cilAddressBook} />
                             </CInputGroupText>
                         <CFormInput
                             type="text"
                             floatingLabel={"Address"}
                             floatingClassName="mb-8"
                             placeholder="Address"
                             value={values.addr}
                             onChange={(e) => setValues({ ...values, addr: e.target.value })}
                         />
                         </CInputGroup>
                         <CInputGroup className='mb-4'>
                             <CInputGroupText id='basic-addon1'>@</CInputGroupText>
                             <CFormInput type='email' id='floatingInputInValid' floatingLabel='Email address' placeholder='name@example.com'  name='email'defaultValue={values.email}
                                 onChange={(e) => setValues({ ...values, email: e.target.value})} required />
                         </CInputGroup>
                         <CInputGroup className="mb-3 mt-3">
                             <CInputGroupText>
                                 <CIcon icon={cilContact} />
                             </CInputGroupText>
                             <CFormInput
                                 type="text"
                                 id='floatingInput'
                                 floatingLabel="Contact"
                                 floatingClassName="mb-8"
                                 placeholder="contact"
                                 defaultValue={values.contact}
                                 onChange={(e) => setValues({ ...values, contact: e.target.value })}
                             />
                         </CInputGroup>
                         <CCol md="4" className="d-flex align-items-center">
                             <CButton
                                 color="success"
                                 style={{ color: "white" }}
                                 type="submit" // Add this line
                             >
                                 <CIcon style={{ marginRight: 1 }} icon={cilPlus} />Update Profile
                             </CButton>
                         </CCol>
                     </CForm>
                </CCardBody>
              </CCard>
              {/* / */}
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
       
    )
}
export default Editprofile;
                  // <CForm>
                  //   {/* <p className="text-body-secondary">Sign In to your account</p> */}
                  //   <CInputGroup className="mb-3 mt-3">
                  //     <CInputGroupText>
                  //       <CIcon icon={cilUser} />
                  //     </CInputGroupText>
                  //     <CFormInput type='text' id='floatingInput' floatingClassName='mb-8' floatingLabel = 'Name' value={userInfo.name} name="name" placeholder="Username"  onChange={handleChange} autoComplete="username" required/>
                  //   </CInputGroup>
                  //   <CInputGroup className='mb-4'>
                  //     <CInputGroupText>
                  //     <CIcon icon={cilAddressBook} />
                  //     </CInputGroupText>
                  //     <CFormTextarea id='floatingTextarea' floatingLabel = 'Address' placeholder='Your Address Here' value={userInfo.address} name="address" onChange={handleChange} required></CFormTextarea>
                  //   </CInputGroup>
                  //   <CInputGroup className='mb-4'>
                  //     <CInputGroupText id='basic-addon1'>@</CInputGroupText>
                  //     <CFormInput type='email' id='floatingInputInValid' floatingLabel = 'Email address' placeholder='name@example.com' onChange={handleChange} value={userInfo.email} name='email' required/>
                  //   </CInputGroup>
                  //   <CInputGroup className='mb-4'>
                  //     <CInputGroupText>
                  //     <CIcon icon={cilContact} />
  
  
                  //     </CInputGroupText>
  
                  //     <CFormInput type='number' id='floatingInput' floatingLabel = 'Contact' placeholder='9428675123' onChange={handleChange} value={userInfo.contact} name='contact' required/>
                  //   </CInputGroup>
                  //   <CInputGroup className="mb-4">
                  //     <CInputGroupText>
                  //       <CIcon icon={cilLockLocked} />
                  //     </CInputGroupText>
                  //     <CFormInput
                  //       type="password"
                  //       placeholder="Password"
                  //       autoComplete="current-password"
                  //       onChange={handleChange}
                  //       value={userInfo.password}
                  //       name='password'
                  //       required
                  //     />
                  //   </CInputGroup>
                  //   <CRow>
                  //     <CCol xs={6}>
                  //       <CButton color="primary" className="px-4" onClick={handleRegister}  >
                  //         Register
                  //       </CButton>
                  //     </CCol>
                  //     {/* <CCol xs={6} className="text-right">
                  //       <CButton color="link" className="px-0">
                  //         Forgot password?
                  //       </CButton>
                  //     </CCol> */}
                  //   </CRow>
                  // </CForm>