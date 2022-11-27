import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us :</span>
        </div>  
      </section>
      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                SiTerbang
              </h6>
              <p>
              Find your Flight service and explore the world with us.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Features</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Find Ticket
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  My Booking
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Chat
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Notification
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Download SiTerbang App</h6>
              {/* <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p> */}
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-1" />
                Jakarta, Indonesia
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-1" />
                SiTerbang@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-1" /> + 024 - 8311150
              </p>
              <p>
                <MDBIcon icon="print" className="me-1" /> + 024 - 8311151
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2022 Copyright:
        <a className='text-reset fw-bold' href="https://github.com/Front-end-X-Back-end-SiTerbang/Frontend-siterbang-asli-repo-utama.git">
          SiTerbang
        </a>
      </div>
    </MDBFooter>
  );
}