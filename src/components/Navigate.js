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
            <Link to='/home' > <li className="nav-item nav-link">Home</li></Link>
            <Link to='/administration' ><li className="nav-item nav-link" >Administration</li></Link>
            <Link to='/admission' ><li className="nav-item nav-link" >Admission</li></Link>
            <Link to='/'><li className="nav-item nav-link" >Student's Login Portal</li></Link>
            <Link to='/Register'><li className="nav-item nav-link" >Course Registration</li></Link>
            </ul>
            </div>
            </div>
        </nav>
    )
}

export default Navigate
