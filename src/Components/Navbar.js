import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar({query, handleQuery, clearQuery}) {
    const submitForm = (event)=>event.target.preventDefault()
    return (
        <nav className="navbar navbar-dark bg-danger">
            <div className="container">
                <h4 className="navbar-brand">Task Manager</h4>
                <form onSubmit={submitForm} className="d-flex" role="search">
                    <input onChange={handleQuery} className="form-control me-2" type="search" placeholder="Search" value={query}></input>
                    <button onClick={clearQuery} className="btn-close mt-2" type="button"></button>
                </form>
            </div>
        </nav>
    )
}