import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar() {
    return (
        <nav className="navbar navbar-dark bg-secondary">
            <div className="container">
                <h5 className="navbar-brand">Task Manager</h5>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                    <button className="btn btn-outline-light" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}