import React from 'react';
import Menubar from "./AdminMenuBar";
import SideBar from '../Side Bar/SideBar';
import AdminMain from './AdminMain';

function Admin() {
  return (
    <div>
      <Menubar />
      <div className='d-flex col-lg-12'>
        <div col-lg-3 style={{height: '100vh'}}>
          <SideBar />
        </div>
        <div col-lg-9>
          <AdminMain />
        </div>
      </div>

    </div>
  )
}

export default Admin;