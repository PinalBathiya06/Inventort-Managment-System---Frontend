import React, { useState } from "react";
import CIcon from "@coreui/icons-react";
import { CForm, CInputGroup, CInputGroupText, CFormInput, CFormTextarea, CButton } from "@coreui/react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import axios from "axios";
import jsPDF from "jspdf"; // Import jsPDF for PDF generation
import { cilAddressBook,cilDescription,cilNotes, cilUser,cilContact } from '@coreui/icons'

const Add = ({ onClientSubmit, onItemSubmit }) => {
    const [itemsTxt, setItemsTxt] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');
    const [items, setItems] = useState([]);
    let invoice_id = 101;
    const [clientData, setClientData] = useState({
        name: '',
        address: '',
        email: '',
        contact: '',
    });

    const handleItems = (e) => {
        setItemsTxt(e.target.value);
    }

    const handleQuantity = (e) => {
        setQuantity(e.target.value);
    }

    const handlePrice = (e) => {
        setPrice(e.target.value);
    }

    const handleClick = (e) => {
        setItems(prev => [...prev, {
            description: itemsTxt,
            qty: quantity,
            price: price,
            status: 0
        }]);
        setItemsTxt("");
        setQuantity("");
        setPrice("");
    }

    const handleClientChange = (e) => {
        const { name, value } = e.target;
        setClientData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleClientSubmit = () => {
        onClientSubmit(clientData);
    };

    const handleItemSubmit = () => {
        onItemSubmit(items);
    };

    const sendData = async () => {

        try {
         
            let totalPrice = 0;
            items.forEach((item, index) => {
                totalPrice += parseFloat(item.price) * parseInt(item.qty);
            });

            const response = await axios.post('http://localhost:8081/api/invoices/addInvoice', {
                client_details: clientData,
                item_details: items,
                total: totalPrice,
                token: localStorage.getItem('token'),
                invoice_dt: new Date(),
            });

            generatePDF();
            invoice_id +=1;
        
        } catch (error) {
            console.error('Error sending data:', error);
        }
    };

 
    const generatePDF = () => {
        const doc = new jsPDF();
    
        // Add header
        doc.setFillColor(41, 128, 185); // Blue color for header background
        doc.rect(0, 0, 210, 40, 'F'); // Header rectangle
        doc.setFont("helvetica"); // Set font for header text
        doc.setFontSize(22); // Font size for header text
        doc.setTextColor(255); // Text color for header text
        doc.text("Invoice", 105, 25, { align: "center" }); // "Invoice" text in header
    
        // Invoice Id
        doc.setFont("times", "normal"); // Set font for body text
        doc.setFontSize(12); // Font size for body text
        doc.setTextColor(0); // Text color for body text
        const invoiceIdX = 140; // X-coordinate for Invoice Id
        const invoiceIdY = 50; // Y-coordinate for Invoice Id
        doc.text(`Invoice Id: ${invoice_id}`, invoiceIdX, invoiceIdY);
    
        // Admin Details
        const adminDetails = {
            name: "Pinal Bathiya",
            address: "Jamnagar",
            email: "pinal@gmail.com",
            contact: "+91 9876543210",
        };
        
        const adminX = invoiceIdX; // Align Admin details with Invoice Id
        const adminNameY = invoiceIdY + 10; // Y-coordinate for Admin Name
        const adminAddressY = adminNameY + 10; // Y-coordinate for Admin Address
        const adminEmailY = adminAddressY + 10; // Y-coordinate for Admin Contact
        const adminContactY = adminEmailY + 10; // Y-coordinate for Admin Email
        
        doc.setFont("times", "bold"); // Set font to bold
        doc.text(`Company Name: ${adminDetails.name}`, adminX, adminNameY);
        doc.text(`Company Address: ${adminDetails.address}`, adminX, adminAddressY);
        doc.text(`Company Email: ${adminDetails.email}`, adminX, adminEmailY);
        doc.text(`Company Contact: ${adminDetails.contact}`, adminX, adminContactY);
        
        doc.setFont("times", "normal"); // Reset font to normal
    
        // Invoice Date and Client Details
        doc.text(`Invoice Date: ${new Date().toLocaleDateString()}`, 10, 50);
        doc.text(`Client Name: ${clientData.name}`, 10, 60);
        doc.text(`Client Address: ${clientData.address}`, 10, 70);
        doc.text(`Client Email: ${clientData.email}`, 10, 80);
        doc.text(`Client Contact: ${clientData.contact}`, 10, 90);
        // Items Table
        doc.setLineWidth(0.1); // Set line width for table borders
        doc.rect(10, 100, 190, 140); // Table rectangle
        doc.line(10, 110, 200, 110); // Horizontal line below table header
        doc.line(50, 100, 50, 240); // Vertical line separating description and quantity
        doc.line(120, 100, 120, 240); // Vertical line separating quantity and price
        doc.setFontSize(14); // Font size for table header
        doc.text("Description", 20, 105);
        doc.text("Qty", 85, 105);
        doc.text("Price", 140, 105);
    
        let y = 120; // Initial y position for table content
        let totalPrice = 0;
        items.forEach((item, index) => {
            doc.setFontSize(12); // Font size for table content
            doc.text(`${item.description}`, 20, y);
            doc.text(`${item.qty}`, 85, y);
            doc.text(`$${item.price}`, 140, y);
            y += 15; // Increase y position for next row
            totalPrice += parseFloat(item.price) * parseInt(item.qty);
        });
    
        // Total Price
        doc.setFontSize(14); // Font size for total price
        doc.text(`Total: $${totalPrice.toFixed(2)}`, 140, 245);
    
        // Notes
        const notes = document.getElementById("floatingTextarea").value;
        doc.setFont("times", "italic"); // Set font to italic
        doc.setFontSize(12); // Font size for notes
        doc.text("Notes:", 10, 255);
        doc.text(notes, 10, 260);
    
        // Save PDF
        doc.save("invoice.pdf");
    };
    
    
    
    
    const handleGenerateInvoiceClick = () => {
        sendData();
    };
    return (
        <div>
            <CForm>
                <CInputGroup className="mb-3 mt-3">
                    <CInputGroupText>
                        <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput type="text" placeholder="Client Name" name="name" value={clientData.name} onChange={handleClientChange} />

                    <CInputGroupText >
                        <CIcon icon={cilAddressBook} />
                    </CInputGroupText>
                    <CFormInput type="text" placeholder="Address" name="address" value={clientData.address} onChange={handleClientChange} />
                </CInputGroup>
                <CInputGroup className="mb-3 mt-3">
                    <CInputGroupText>
                        <CInputGroupText id='basic-addon1'>@</CInputGroupText>
                    </CInputGroupText>
                    <CFormInput type="text" placeholder="Client Email" name="email" value={clientData.email} onChange={handleClientChange} />

                    <CInputGroupText >
                        <CIcon icon={cilContact} />
                    </CInputGroupText>
                    <CFormInput type="text" placeholder="Client Contact" name="contact" value={clientData.contact} onChange={handleClientChange} />
                </CInputGroup>

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
                        value={itemsTxt}
                        onChange={handleItems}
                    />
                </CInputGroup>

                <CInputGroup className="mb-3 mt-3">
                    <CFormInput
                        type="number"
                        placeholder="Quantity"
                        value={quantity}
                        onChange={handleQuantity}
                    />
                    <CInputGroupText>$</CInputGroupText>
                    <CFormInput
                        aria-label="Amount (to the nearest dollar)"
                        type="number"
                        placeholder="Price"
                        value={price}
                        onChange={handlePrice}
                    />
                    <CInputGroupText>.00</CInputGroupText>
                </CInputGroup>

                <CInputGroup>
                    <CButton onClick={handleClick} className="mb-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-bule-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">
                        Add Items
                    </CButton>
                </CInputGroup>

                <table width="100%" className="mb-10">
                    <thead>
                        <tr className="bg-gray-100 p-1">
                            <td className="font-bold">Description</td>
                            <td className="font-bold">Quantity</td>
                            <td className="font-bold">Price</td>
                            <td className="font-bold">Actions</td>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item, index) => (
                            <tr key={index}>
                                <td>{item.description}</td>
                                <td>{item.qty}</td>
                                <td>{item.price}</td>
                                <td>
                                    <CButton><MdDelete className="text-red-500 font-bold text-xl" /></CButton>
                                    <CButton><FaEdit className="text-green-500 font-bold text-xl" /></CButton>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <CInputGroup className='mb-4'>
                    <CInputGroupText>
                        <CIcon icon={cilNotes} />
                    </CInputGroupText>
                    <CFormTextarea id='floatingTextarea' floatingLabel='Add Notes for Clients' placeholder='Add Notes for Clients'></CFormTextarea>
                </CInputGroup>

                {/* <button onClick={handleClientSubmit}>Submit Client Details</button>
                <button onClick={handleItemSubmit}>Submit Item Details</button> */}
                <button type="button" onClick={handleGenerateInvoiceClick}>Generate Invoice</button>
            </CForm>
        </div>
    );
};

export default Add;



