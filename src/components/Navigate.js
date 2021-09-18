import React from 'react'
import {Link} from 'react-router-dom'

function Navigate() {
    return (
        <nav className="navbar navbar-dark bg-primary navbar-expand-sm fixed-top">
        <div className="container">
        <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navigation"  aria-controls="navigation" aria-expanded="false" aria-label="Toggle Navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navigation">
            <ul className="navbar-nav">
            <Link to='/home' className="nav-item nav-link"> <li >Home</li></Link>
            <Link to='/administration'  className="nav-item nav-link"><li >Administration</li></Link>
            <Link to='/admission' className="nav-item nav-link"><li >Admission</li></Link>
            <Link to='/' className="nav-item nav-link active" ><li>Student's Login Portal</li></Link>
            <Link to='/Register' className="nav-item nav-link"><li >Course Registration</li></Link>
            </ul>
            </div>
            </div>
        </nav>
        
)
}

export default Navigate
