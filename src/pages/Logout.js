import React from 'react'
import Navbar from '../components/Navbar'

const Logout = ({handleLogout})=> {

    return (
        <section>
            <nav>
                <button onClick={handleLogout}>Logout</button>
            </nav>
        </section>
    )
}

export default Logout;
