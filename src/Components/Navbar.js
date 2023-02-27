import 'bootstrap/dist/css/bootstrap.min.css';
import { FaSistrix } from "react-icons/fa";


export default function Navbar({tasksList, updateList, query, handleQuery}) {
    const submitForm = (event)=>event.target.preventDefault()
    return (
        <nav className="navbar navbar-dark bg-secondary">
            <div className="container">
                <h5 className="navbar-brand">Task Manager</h5>
                <form onSubmit={submitForm} className="d-flex" role="search">
                    <input onChange={handleQuery} className="form-control me-2" type="search" placeholder="Search" value={query}></input>
                </form>
            </div>
        </nav>
    )
}