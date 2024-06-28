import React from 'react'
import classNames from 'classnames'
import {CRow, CCol, CCard, CCardBody, CCardHeader} from '@coreui/react'
// import { useState, useRef } from "react";
// import ReactToPrint from "react-to-print";

function Dashboard() {
  return (
    <>
      <CRow>
        <CCol md={4} xs={12}>
          <CCard className='bg-main text-white'>
            <CCardHeader>
              <h4 className='text-center'>
                Total Products
              </h4>
            </CCardHeader>
            <CCardBody className='text-center'>
              <h5>
                10
              </h5>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol md={4} xs={12}>
          <CCard className='bg-main text-white'>
            <CCardHeader>
              <h4 className='text-center'>
                Total Invoices
              </h4>
            </CCardHeader>
            <CCardBody className='text-center'>
              <h5>
                10
              </h5>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol md={4} xs={12}>
          <CCard className='bg-main text-white'>
            <CCardHeader>
              <h4 className='text-center'>
                Total Users
              </h4>
            </CCardHeader>
            <CCardBody className='text-center'>
              <h5>
                5
              </h5>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow> 
    </>
  );
}

export default Dashboard
