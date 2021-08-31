import React from 'react'
import {Link} from 'react-router-dom'

function Navigate() {
    return (
        <nav>
            <ul className="nav nav-pills justify-content-end flex-column flex-md-row">
            <Link className="nav-item nav-link" to='/' > <li>Home</li></Link>
            <Link  className="nav-item nav-link"to='/' ><li>Administration</li></Link>
            <Link  className="nav-item nav-link"to='/' ><li>Admission</li></Link>
            <Link  className="nav-item nav-link"to='/Login'><li>Student's Login Portal</li></Link>
            <Link  className="nav-item nav-link"to='/Register'><li>Course Registration</li></Link>
            </ul>
        </nav>
    )
}

export default Navigate
