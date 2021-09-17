import React from 'react'
import {Link} from 'react-router-dom'

function Navigate() {
    return (
        <nav class="navbar navbar-dark bg-primary navbar-expand-sm mb-5 fixed-top" id="navbar-site" >
        <div className="container" >
        <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navigation"       aria-controls="navigation" aria-expanded="false" aria-label="Toggle Navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navigation"  >
            <ul className="navbar-nav">
            <Link className="nav-item nav-link" to='/' > <li>Home</li></Link>
            <Link  className="nav-item nav-link"to='/' ><li>Administration</li></Link>
            <Link  className="nav-item nav-link"to='/' ><li>Admission</li></Link>
            <Link  className="nav-item nav-link"to='/Login'><li>Student's Login Portal</li></Link>
            <Link  className="nav-item nav-link"to='/Register'><li>Course Registration</li></Link>
            </ul>
            </div>
            </div>
        </nav>
    )
}

export default Navigate
