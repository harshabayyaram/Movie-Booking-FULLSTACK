import React from 'react'

function TheaterList(props) {
    const { handleBookTicket } = props;
    console.log(handleBookTicket);
    return (
        <div>TheaterList
            <div>
                <button onClick={handleBookTicket}>book ticket</button>
            </div>
        </div>
    )
}

export default TheaterList