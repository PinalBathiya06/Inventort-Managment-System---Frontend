import React, {useEffect, useState} from 'react'
import CIcon from '@coreui/icons-react';
import { cilPlus, cilDescription } from '@coreui/icons'
import {CFormInput, CCol, CButton, CInputGroup, CInputGroupText, CForm } from '@coreui/react'
// import { Axios } from 'axios';
import axios from "axios"
import { useParams, useNavigate } from "react-router-dom"

const Editproduct = () => {
    // const [description, setDescription] = useState('');
    // const [qty, setQty] = useState('');
    // const [price, setPrice] = useState('');
    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     // const response = await axios.put(`/products/${description}`,{
    //     //     description,
    //     //     qty,
    //     //     price
    //     // });
    //     // if(response.status === 200){
    //     //     alert(`Successfully`);
    //     // }else{
    //     //     alert(`Failed`);
    //     // }
    //     const updatedProduct = {
    //         id: id, // Assuming the product ID is the same as the description
    //         description: description,
    //         qty: qty,
    //         price: price
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
    const {id } = useParams();
    // const {product, setProduct} = useState([])
    const navigate = useNavigate()

    useEffect(() => {
      axios.get(`http://localhost:8081/api/products/${id}`)
      .then(res => {
        console.log(res)
       setValues({...res.data})

      })
      .catch(err => console.log(err))
    }, [])
    const [values, setValues] = useState({
      description: '',
      qty: '',
      price: ''
    })

    const handleUpdate = (event) => {
      event.preventDefault();
      axios.put(`http://localhost:8081/api/products/${id}`, values)
      .then(res => {
         console.log(res)
         navigate('/Listproduct')
       }).catch(err => console.log(err))
    }
console.log("values", values)
  return (
    <CForm onSubmit={handleUpdate}>
    <CInputGroup className="mb-3 mt-3">
        <CInputGroupText>
            <CIcon icon={cilDescription} />
        </CInputGroupText>
        <CFormInput 
            type="text" 
            id='floatingInput' 
            floatingLabel="Description" 
            floatingClassName="mb-8" 
            placeholder="name" 
            defaultValue={values.description} 
            onChange={(e) => setValues({...values, description: e.target.value})}
        />
    </CInputGroup>

    <CFormInput 
        type="number" 
        floatingLabel={"Quantity"} 
        floatingClassName="mb-3" 
        placeholder="Quantity" 
        value={values.qty} 
        onChange={(e) => setValues({...values, qty: e.target.value})}
    />

    <CInputGroup className="mb-3">
        <CInputGroupText>$</CInputGroupText>
        <CFormInput 
            aria-label="Amount (to the nearest dollar)" 
            type="number" 
            floatingLabel={"Price"} 
            floatingClassName="mb-8" 
            placeholder="Price"  
            value={values.price} 
            onChange={(e) => setValues({...values, price: e.target.value})}
        />
        <CInputGroupText>.00</CInputGroupText>
    </CInputGroup>
    <CCol md="4" className="d-flex align-items-center">
        <CButton
            color="success"
            style={{ color: "white" }}
            type="submit" // Add this line
        >
            <CIcon style={{ marginRight: 1 }} icon={cilPlus} />Update to List
        </CButton>
    </CCol>
</CForm>
  )
}
export default Editproduct;