
import React, { useEffect, useRef, useState } from "react";
import CIcon from '@coreui/icons-react';
import { cilPlus, cilDescription } from '@coreui/icons'
import { CRow, CFormInput, CCol, CButton, CInputGroup, CInputGroupText, CForm } from '@coreui/react'
import { getProducts } from "../../services/productServices";
import{ addProducts} from "../../services/productServices";
import Listproduct from "./Listproduct";


const Addproduct = () => {
    
     const [showForm, setShowForm] = useState(false);
     const [productList, setProductList] = useState([]);

    // useEffect(()=>{
    //     getProducts().then((res)=>{
    //         setProductList(_=>{
    //             return [...res]
    //         })
    //     });
    // }, [])

   
        const id = useRef("");
        const description = useRef(null);
        const qty =useRef(null);
        const price = useRef(null);

        async function handleClick(){
            const data = {
                description: description.current.value,
                qty: qty.current.value,
                price: price.current.value,
            }
            let result = addProducts(data).then(() => {
                getProducts().then((res)=>{
                    setProductList(_=>{
                        return [...res]
                    })
                });
            })
           
        }
  
      
    return (
        <>
            <CRow>
                <CCol xs>
                    <CButton
                        color="success"
                        style={{ color: "white" }}
                        onClick={() => { setShowForm(!showForm) }}
                    >
                        <CIcon style={{ marginRight: 1 }} icon={cilPlus} />Add
                    </CButton>
                </CCol>
            </CRow>
            {
                showForm &&
                <CForm >
                    <CInputGroup className="mb-3 mt-3">
                        <CInputGroupText>
                            <CIcon icon={cilDescription} />
                        </CInputGroupText>
                        <CFormInput type="text" id='floatingInput' floatingLabel="Description" floatingClassName="mb-8" placeholder="name" ref={description} />
                    </CInputGroup>

                    <CFormInput type="number" floatingLabel={"Quantity"} floatingClassName="mb-3" placeholder="Quantity" ref={qty}/>

                    <CInputGroup className="mb-3">
                        <CInputGroupText>$</CInputGroupText>
                        <CFormInput aria-label="Amount (to the nearest dollar)" type="number" floatingLabel={"Price"} floatingClassName="mb-8" placeholder="Price"  ref={price}/>
                        <CInputGroupText>.00</CInputGroupText>
                    </CInputGroup>
                    <CCol md="4" className="d-flex align-items-center">
                    <CButton
                        color="success"
                        style={{ color: "white" }}
                        onClick={handleClick}
                        // type="submit"
                        // href="/Listproduct"
                    >
                        <CIcon style={{ marginRight: 1 }} icon={cilPlus} />Add to List
                    </CButton>
                    </CCol>
                </CForm>

            }
            {/* <CRow className="mt-3">
                <CCol xs>
                    <h5>Products List</h5>
                </CCol>
            </CRow>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        productList.map((record, index)=>{
                            return (
                                <tr key={index}>
                                    <td>{record.id}</td>
                                    <td>{record.description}</td>
                                    <td>{record.qty}</td>
                                    <td>{record.price}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table> */}
        </>
    );
}

export default Addproduct;