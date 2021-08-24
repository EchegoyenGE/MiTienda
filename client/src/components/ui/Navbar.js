import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <Link className="navbar-brand" to='/'>
                    MiTienda
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <Link className="nav-link active" aria-current="page" href="#">
                            Cart
                        </Link>
                        <Link className="nav-link" href="#">
                            Login
                        </Link>
                        <Link className="nav-link" to="/products/new">
                            New Product
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar