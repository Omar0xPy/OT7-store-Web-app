import {Link} from 'react-router-dom'

function Navbar()
{
    const mystyle = {
        color: "#000080",
        fontFamily:"A-OTF Shin Go Pro DB",
        padding:"40px",
        fontSize:"47px"
    }

    const style = {
        fontFamily:"hack",
        padding:"10px",
        fontSize:"16px"
    }

    return (
        <>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container">
    <Link className="navbar-brand" to="/">
        <h2 style={mystyle}>
            OT7-store
        </h2>
    </Link>
    <button className="navbar-toggler" 
    type="button" 
    data-bs-toggle="collapse"
    data-bs-target="#navbarSupportedContent" 
    aria-controls="navbarSupportedContent" 
    aria-expanded="false" 
    aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/" style={style}>
            Home
        </Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/about" style={style}>
            About
            </Link>
        </li>
        </ul>
    </div>
    </div>
</nav>
        </>
    )
}

export default Navbar;