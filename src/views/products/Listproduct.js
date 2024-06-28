
import React, { useEffect, useState } from "react";
// import { CRow, CCol } from "@coreui/react";
import { getProducts } from "../../services/productServices";
import './table.css';
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { CButton } from "@coreui/react";
import axios from "axios";
import { Link } from 'react-router-dom'
import { data } from "autoprefixer";
import{ removeProducts} from "../../services/productServices";

const Listproduct = () => {
    const [productList, setProductList] = useState([]);
    useEffect(() => {
        getProducts().then((res) => {
            setProductList(_ => {
                return [...res]
            })
        });
    }, [])


    // const postDelete = (id) => {
    //    // e.preventDefault();
    //     let result = deleteProduct(id).then(() => {
    //         getProducts().then((res)=>{
    //             setProductList(_=>{
    //                 return [...res]
    //             })
    //         });
    //     })
    //     // console.log(result)
        
    // }
// const postDelete = (id, e) => {
//     e.preventDefault();
//     removeProducts(id)
//         .then(() => {
//             // Axios.delete('http://localhost:8081/api/products/${id}')
//             getProducts().then((res) => {
//                 console.log('Product Deleeted', res);
//             })
//              .catch(err => console.log(err))
//         })
// }
// const postDelete = async (id, e) => {
//     e.preventDefault();
//     try {
//         const response = await removeProducts(id);
//         console.log('Product Deleted', response);
//     } catch (error) {
//         console.error(error);
//     }
// };
const deleteProduct = (id) => {
    axios.delete(`http://localhost:8081/api/products/${id}`).then(() => {
        //console.log('Product Deleted', response);
    })
}
// const deleteProduct = async (id) => {
//     try {
//         await axios.delete(`http://localhost:8081/api/products/${id}`);
//         getProducts();
//     } catch (error) {
//         console.error(error);
//     }
// };
    // const editRow = (id) => {
    //     console.log(id)
    // }

    
    return (
        <>
            <section>
                <h1>Product List</h1>
                <div className="tbl-header">
                    <table cellPadding="0" cellSpacing="0" border="0">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Description</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                    </table>
                </div>
                <div className="tbl-content">
                    <table cellPadding="0" cellSpacing="0" border="0">
                        <tbody>
                            {
                                productList.map((product, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{product.id}</td>
                                            <td>{product.description}</td>
                                            <td>{product.qty}</td>
                                            <td>{product.price}</td>
                                            <td>
                                                <CButton onClick={()=>deleteProduct(product.id)} >
                                                    <MdDelete className="text-red-500 font-bold text-xl" />
                                                </CButton>
                                                <Link to= {`/Editproduct/${product.id}`}>
                                                <CButton>
                                                    <FaEdit  className="text-green-500 font-bold text-xl" />
                                                </CButton>
                                                </Link>
                                            </td>
                                            {/* <td><button onClick={() => deleteRow(id)}><MdDelete className="text-red-500 font-bold text-xl" />
                    </button></td>
                    <td><button onClick={() => editRow(id)}><FaEdit className="text-green-500 font-bold text-xl" />
                    </button></td> */}
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    )
}
export default Listproduct;