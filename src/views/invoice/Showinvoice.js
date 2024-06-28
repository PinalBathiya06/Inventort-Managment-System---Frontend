// import React, { useState } from "react";
// import jsPDF from 'jspdf';
// import Add from './Add';

// const Showinvoice = () => {
//     const [client_details, setClient_details] = useState({
//         name: '',
//         address: '',
//         email: '',
//         contact: '',
//     });
//     const [item_details, setItem_details] = useState({
//         description: '',
//         qty: '',
//         price: '',
//     });

//     const [items, setItems] = useState([]);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setClient_details({
//             ...client_details,
//             [name]: value
//         });
//     };

//     const handleItems = () => {
//         setItem_details([...items, {
//             description: item_details.description,
//             qty: item_details.qty,
//             price: item_details.price
//         }]);
//     };

//     const calculateSubtotal = () => {
//         // return items.reduce((total, item) => total + (item.qty * item.price), 0);
//         return items.reduce((total, item) => total + (item.qty * item.price), 0);
//     };

//     const generatePDF = () => {
//         const doc = new jsPDF();

//         // Invoice details
//         doc.text(`Invoice Date: ${new Date().toLocaleDateString()}`, 10, 10);
//         doc.text(`Client Name: ${client_details.name}`, 10, 20);
//         doc.text(`Client Address: ${client_details.address}`, 10, 30);

//         // Items table
//         let y = 50;
//         items.forEach((item, index) => {
//             doc.text(`${index + 1}. ${item_details.description}`, 10, y);
//             doc.text(`Qty: ${item_details.qty}`, 70, y);
//             doc.text(`Price: ${item_details.price}`, 100, y);
//             y += 10;
//         });

//         // Subtotal
//         // const subtotal = calculateSubtotal();
//         const subtotal =10000;
//         doc.text(`Subtotal: ${subtotal}`, 10, y += 10);

//         // Taxes (if applicable)
//         // const taxes = ...
//         // doc.text(`Taxes: $${taxes}`, 10, y += 10);

//         // Total
//         const total = subtotal; // Add taxes or other charges if needed
//         doc.text(`Total: $${total}`, 10, y += 10);

//         // Save the PDF
//         doc.save('invoice.pdf');
//     };

//     return (
//         <>
//             {/* Your form inputs for client details and items */}
//             <button onClick={handleItems}>Add Item</button>
//             <button onClick={generatePDF}>Generate Invoice</button>
//         </>
//     );
// };

// export default Showinvoice;



// Showinvoice.js
// import React, { useState } from "react";
// import jsPDF from 'jspdf';
// import Add from './Add';

// const Showinvoice = () => {
//     const [clientDetails, setClientDetails] = useState({
//         name: '',
//         address: '',
//         email: '',
//         contact: '',
//     });

//     const [items, setItems] = useState([]);

//  // Function to handle client details submission
//  const handleClientSubmit = (clientDetails) => {
//     // Update the state with client details
//     setClient_details(clientDetails);
// };

// // Function to handle item details submission
// const handleItemSubmit = (itemDetails) => {
//     // Update the state with item details
//     setItem_details(itemDetails);
// };

//     const generatePDF = () => {
//         const doc = new jsPDF();

//         // Invoice details
//         doc.text(`Invoice Date: ${new Date().toLocaleDateString()}`, 10, 10);
//         doc.text(`Client Name: ${clientDetails.name}`, 10, 20);
//         doc.text(`Client Address: ${clientDetails.address}`, 10, 30);

//         // Items table
//         let y = 50;
//         items.forEach((item, index) => {
//             doc.text(`${index + 1}. ${item.description}`, 10, y);
//             doc.text(`Qty: ${item.qty}`, 70, y);
//             doc.text(`Price: ${item.price}`, 100, y);
//             y += 10;
//         });

//         // Subtotal
//         // const subtotal = calculateSubtotal();
//         const subtotal = 10000;
//         doc.text(`Subtotal: ${subtotal}`, 10, y += 10);

//         // Taxes (if applicable)
//         // const taxes = ...
//         // doc.text(`Taxes: $${taxes}`, 10, y += 10);

//         // Total
//         const total = subtotal; // Add taxes or other charges if needed
//         doc.text(`Total: $${total}`, 10, y += 10);

//         // Save the PDF
//         doc.save('invoice.pdf');
//     };

//     return (
//         <>
//             {/* Pass functions to Add component to handle data */}
//             {/* <Add onClientSubmit={handleClientSubmit} onItemSubmit={handleItemSubmit} /> */}
//             <Add onClientSubmit={handleClientSubmit} onItemSubmit={handleItemSubmit} />
//             {/* Your form inputs for client details and items */}
//             <button onClick={generatePDF}>Generate Invoice</button>
//         </>
//     );
// };

// export default Showinvoice;



import React, { useState } from "react";
import jsPDF from 'jspdf';
import Add from './Add'; // Make sure the path is correct


const Showinvoice = () => {
    const [clientDetails, setClientDetails] = useState({
        name: '',
        address: '',
        email: '',
        contact: '',
    });

    const [items, setItems] = useState([]);

    const handleClientSubmit = (clientData) => {
        setClientDetails(clientData);
    };

    const handleItemSubmit = (itemData) => {
        setItems(prevItems => [...prevItems, itemData]);
    };

    const generatePDF = () => {
        const doc = new jsPDF();

        // Invoice details
        doc.text(`Invoice Date: ${new Date().toLocaleDateString()}`, 10, 10);
        doc.text(`Client Name: ${clientDetails.name}`, 10, 20);
        doc.text(`Client Address: ${clientDetails.address}`, 10, 30);

        // Items table
        let y = 50;
        let totalPrice = 0;
        items.forEach((item, index) => {
            doc.text(`${index + 1}. ${item.description}`, 10, y);
            doc.text(`Qty: ${item.qty}`, 70, y);
            doc.text(`Price: ${item.price}`, 100, y);
            y += 10;
            totalPrice += parseFloat(item.price) * parseInt(item.qty);
        });

        // Total
        doc.text(`Total: $${totalPrice}`, 10, y += 10);

        // Save the PDF
        doc.save('invoice.pdf');
    };

    return (
        <div>
            {/* Pass functions to Add component to handle data */}
            <Add onClientSubmit={handleClientSubmit} onItemSubmit={handleItemSubmit} />
            {/* Your form inputs for client details and items */}
            <button onClick={generatePDF}>Generate Invoice</button>
        </div>
    );
};

export default Showinvoice;

