import React from 'react';
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div style={{ display: 'flex', height: '100%', overflow: 'scroll initial' }}>
            <CDBSidebar textColor="#fff" backgroundColor="#333">
                <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                    <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
                        Admin
                    </a>
                </CDBSidebarHeader>
                <CDBSidebarContent className="sidebar-content">
                    <CDBSidebarMenu>
                        <NavLink exact to="/" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/admin/manage_movies" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="table">Movies</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/admin/manage_users" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="user">Users</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/admin/booking_details" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="user">Bookings</CDBSidebarMenuItem>
                        </NavLink>
                        
                    </CDBSidebarMenu>
                </CDBSidebarContent>

                <CDBSidebarFooter style={{ textAlign: 'center' }}>
                    <div
                        style={{
                            padding: '20px 5px',
                        }}
                    >
                        Movie Booking App
                    </div>
                </CDBSidebarFooter>
            </CDBSidebar>
        </div>
    );
};

export default Sidebar;