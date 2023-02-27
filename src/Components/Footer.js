import { FaFacebook, FaLinkedin, FaGithub, FaYoutubeSquare } from "react-icons/fa";

export default function Footer() {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-bottom">
            <div class="container">
                <a class="navbar-brand text-danger" href="/">iCode&trade; 2022</a>
                
                <div class="">
                    <div class="navbar-nav d-sm-flex flex-row justify-content-around">
                        <a className="nav-link text-danger fs-5 me-1" href="/"> <FaFacebook /> </a>
                        <a className="nav-link text-danger fs-5 me-1" href="/"> <FaGithub /> </a>
                        <a className="nav-link text-danger fs-5 me-1" href="/"> <FaLinkedin /> </a>
                        <a className="nav-link text-danger fs-5 me-1" href="/"> <FaYoutubeSquare /> </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}




