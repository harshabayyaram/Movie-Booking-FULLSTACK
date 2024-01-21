import React from 'react';
import BookingComponent from './BookingComponent';
import UserMenuBar from '../MenuBar/UserMenuBar';

function UserBookingList() {
  return (
    <div>
      <UserMenuBar />
      <BookingComponent />
    </div>
  )
}

export default UserBookingList;