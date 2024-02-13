import Axios from "axios";
import React, { useEffect, useState } from 'react'
import Admin from "../Admin/Admin Home Page/Admin";
import User from "../User/User Home Page/User";
import PublicMainHomePage from "../Home page/PublicMainHomePage";
import PublicMenuBar from "../Home page/PublicMenuBar";

function Home() {
    const [role, setRole] = useState('');
    const [auth, setAuth] = useState(false);

    useEffect(() => {
        setRole(localStorage.getItem("role"));
        if (!localStorage.getItem("token")) {
            setAuth(false);
        } else {
            setAuth(true)
        }
    }, [])


    // useEffect(() => {
    //     axios.get(``{BASEURL}`/)
    //         .then(res => {
    //             if (res.data.valid) {
    //                 setRole(res.data.role);
    //                 setAuth(true);
    //             }
    //             else {
    //                 setAuth(false);
    //             }
    //         })
    //         .catch(err => {
    //             console.log(err);
    //             setAuth(false);
    //         });
    // }, []);

    Axios.defaults.withCredentials = true;

    if (!auth) {
        return (
            <>
                <PublicMenuBar />
                <PublicMainHomePage />
            </>
        )
    }

    if (role === 'user') {
        console.log('Rendering User');
        return <User />;
    } else {
        console.log('Rendering Admin');
        return <Admin />;
    }
}
export default Home;