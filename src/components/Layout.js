import {Link, Outlet} from 'react-router-dom'
import React, { useState, useEffect} from 'react';

function Layout(){
    // const [list, setItems] = useState([]);

    // useEffect(() => {
    //     const list = JSON.parse(localStorage.getItem('list'));
    //     if (list) {
    //     setItems(list);
    //     }
    // }, []);

    return(
        <div className='main'>
            <div className='flexbox'>
                <h1>TODO LIST</h1>
                <Link to="/events" className="eventsButton">EVENTS</Link>
            </div>
            <Outlet />
        </div>
    )
}

export default Layout;