import React from 'react'

// //Auth
// const Login = React.lazy(() => import('./views/pages/login/Login') )
// const Register = React.lazy(() => import('./views/try/demo'))


const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))


// Buttons
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'))
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'))
const Dropdowns = React.lazy(() => import('./views/buttons/dropdowns/Dropdowns'))
const Charts = React.lazy(() => import('./views/charts/Charts'))
const Widgets = React.lazy(() => import('./views/widgets/Widgets'))

const Addproduct = React.lazy(() => import('./views/products/Addproduct'))
const Add = React.lazy(() => import('./views/invoice/Add'))
const Showinvoice = React.lazy(() => import('./views/invoice/Showinvoice'))
const Listproduct = React.lazy(() => import('./views/products/Listproduct'))
const Editproduct = React.lazy(() => import('./views/products/Editproduct'))
//const Editprofile = React.lazy(() => import('./views/pages/profile/Editprofile'))

const routes = [
  // { path: '/login',name: 'Login', element:Login},
  // { path: '/demo',name: 'Register', element: Register},
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/buttons', name: 'Buttons', element: Buttons, exact: true },
  { path: '/buttons/buttons', name: 'Buttons', element: Buttons },
  { path: '/buttons/dropdowns', name: 'Dropdowns', element: Dropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', element: ButtonGroups },
  { path: '/charts', name: 'Charts', element: Charts },
  { path: '/widgets', name: 'Widgets', element: Widgets },
  { path: '/Addproduct' , name: 'Addproduct',element: Addproduct},
  { path: '/Add' , name: 'Add', element: Add},
  { path: '/Showinvoice', name: 'Show', element: Showinvoice},
  { path: '/Listproduct', name: 'List' , element: Listproduct},
  { path: '/Editproduct/:id' , name: 'Editproduct', element: Editproduct},
 // { path: '/Editprofile/:id', name: 'Editprofile', element: Editprofile},
]

export default routes
