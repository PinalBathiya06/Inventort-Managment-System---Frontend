// import React, { useRef } from 'react'
// import 'src/views/pages/profile/Profile.css'
// import { CButton, CFormInput } from '@coreui/react'
// import CIcon from '@coreui/icons-react';
// import { cilPlus } from '@coreui/icons'
// import { Link } from 'react-router-dom'

// function Profile() {
//     const id = useRef("");
//     const name = useRef(null);
//     const address = useRef(null);
//     const email = useRef(null);
//     const contact = useRef(null);

//   async function handleClick(){
//     const data = {
//       id: id.current,
//       name: name.current.value,
//       address: address.current.value,
//       email: email.current.value,
//       contact: contact.current.value,
//     //   email: email.current.value,
//     //   password: password.current.value,
//     }

//     let result = await fetch('http://localhost:8081/api/users/id', {
//       method: 'POST',
//       headers: {'content-Type': 'application/JSON'},
//       body: JSON.stringify(data)
//     })

//     if(!result.ok)
//     {
//       alert('Nope');
//       return;
//     }

//    window.location.href = "#/dashboard";
//   }
//     return (
//         <div>
//             <aside className="profile-card">
//                 <header>
//                     {/* <!-- here’s the avatar --> */}
//                     <a target="_blank" href="#">
//                         <img src="http://lorempixel.com/150/150/people/" className="hoverZoomLink" />
//                     </a>

//                     {/* <!-- the username --> */}
//                     <h1  ref={name}>
//                        abc
                       
//                     </h1>

//                     {/* <!-- and role or location --> */}
//                     <h2>
//                         Invoicer
//                     </h2>

//                 </header>

//                 {/* <!-- bit of a bio; who are you? --> */}
//                 <div className="profile-bio">

//                     <h5 ref={email}>
//                         Email Address: abc@gmail.com
//                     </h5>
//                     <h5>
//                         Address: "rajkot"
//                     </h5>
//                     <h5>
//                        contact:9944775212
//                     </h5>

//                 </div>
//                 <CFormInput
//                              type="text"
//                              floatingLabel={"Address"}
//                              floatingClassName="mb-8"
//                              placeholder="Address"
//                              //value={values.addr}
//                              //onChange={(e) => setValues({ ...values, addr: e.target.value })}
//                          />

//                 <Link to="/editprofile">
//                 <CButton
                
//                     color="primary"
//                     style={{ color: "white", marginLeft: "35%" , marginRight: "35%" }}
//                     //type="submit" // Add this line
//                    // classNameName="d-flex align-items-center align-center "
//                 >
//                     <CIcon style={{ marginRight: 1 }} icon={cilPlus} />Edit
//                 </CButton>
//                 </Link>

//                 {/* <button type="button" className="btn btn-primary >Save</button> */}
//             </aside>
//         </div>
//     )
// }

// export default Profile



import React, { useState, useEffect } from 'react';
import 'src/views/pages/profile/Profile.css';
import { CButton, CFormInput } from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilPlus } from '@coreui/icons';
import { Link } from 'react-router-dom';

function Profile() {
    const [userData, setUserData] = useState({
        id: "",
        name: "",
        address: "",
        email: "",
        contact: ""
    });
    // Add a loading state
//const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, []); // Empty dependency array to run effect only once when component mounts

    // async function fetchData() {
    //     try {
    //         const response = await fetch('http://localhost:8081/api/users/id');
    //         if (!response.ok) {
    //             throw new Error('Failed to fetch data');
    //         }
    //         const data = await response.json();
    //         setUserData(data); // Update state with fetched data
    //     } catch (error) {
    //         console.error(error);
    //         // Handle error
    //     }
    // }
    async function fetchData() {
        try {
            const response = await fetch('http://localhost:8081/api/users/get/id');
            if (!response.ok) {
                throw new Error('Failed to fetch data' + response.status);
            }
            const data = await response.json();
            setUserData(data); // Update state with fetched data
           // setLoading(false); // Set loading to false once data is fetched
        } catch (error) {
            console.error(error);
            // Handle error
        }
    }

    return (
        <div>
            {/* {loading ? (
                <p>loading</p>
            ):( */}
            <aside className="profile-card">
                <header>
                    <a target="_blank" href="#">
                        <img src="http://lorempixel.com/150/150/people/" className="hoverZoomLink" />
                    </a>
                    <h2>Invoicer</h2>
                    {/* <h1>{userData.name}</h1> */}
                    <h1>Pinal Bathiya</h1>
                </header>

                <div className="profile-bio">
                    {/* <h5>Email Address: {userData.email}</h5>
                    <h5>Address: {userData.address}</h5>
                    <h5>Contact: {userData.contact}</h5> */}
                    <h5>Email Address: pinal@gmail.com</h5>
                    <h5>Address: Jamnagar</h5>
                    <h5>Contact: 9876543210</h5>
                </div>

                {/* You can include the CFormInput here if needed */}

                <Link to="/editprofile">
                    <CButton
                        color="primary"
                        style={{ color: "white", marginLeft: "35%", marginRight: "35%" }}
                    >
                        <CIcon style={{ marginRight: 1 }} icon={cilPlus} />Edit
                    </CButton>
                </Link>
            </aside>
            {/* )} */}
        </div>
    );
}

export default Profile;



// import React, { useState, useEffect } from 'react';

// function Profile() {
//     const [userData, setUserData] = useState("");
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         fetchData();
//     }, []);

//     // async function fetchData() {
//     //     try {
//     //         const response = await fetch('http://localhost:8081/api/users/id');
//     //         if (!response.ok) {
//     //             throw new Error('Failed to fetch data: ' + response.status);
//     //         }
//     //         const data = await response.json();
//     //         console.log('Data from backend:', data);
//     //         setUserData(data);
//     //         setLoading(false);
//     //     } catch (error) {
//     //         console.error(error);
//     //         setLoading(false);
//     //     }
//     // }
//     async function fetchData() {
//         console.log(userData);
//         try {
//             const response = await fetch('http://localhost:8081/api/users/get/id');
//             if (!response.ok) {
//                 throw new Error('Failed to fetch data: ' + response.status);
//             }
//             const data = await response.json();
//             console.log('Data from backend:', data);
//             setUserData(data);
//             setLoading(false);
//         } catch (error) {
//             console.error(error);
//             setLoading(false);
//         }
//     }
    

//     // if (loading) {
//     //     return <p>Loading...</p>;
//     // }

//     // if (!userData) {
//     //     return <p>No data available</p>;
//     // }

//     return (
//         <div>
//             <h1>User Profile</h1>
//             <p>Name: {"pin"}</p>
//             <p>Email: {"abc@gmail.com"}</p>
//             <p>Address: {"address"}</p>
//             <p>Contact: {"1321231211"}</p>
//         </div>
//     );
// }

// export default Profile;

