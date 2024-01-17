import React from 'react';
import Menubar from "./AdminMenuBar";
import SideBar from './SideBar';
import AdminMain from './AdminMain';

function Admin() {
  return (
    <div>
      <Menubar />
      <div className='d-flex col-lg-12'>
        <div col-lg-3>
          <SideBar />
        </div>
        <div col-lg-9>
          <AdminMain/>
        </div>
      </div>

    </div>
  )
}

export default Admin;