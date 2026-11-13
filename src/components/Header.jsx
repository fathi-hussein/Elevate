import Link from "next/link";

export default function Navbar() {
    return (
        <header className="header">
        <nav className="navbar container">

            <a href="#" className="logo">
                elev<span>ate.</span>
            </a>

            <ul className="nav-links">
                <li><Link to="/" className="active">Home</Link></li>
                <li><Link to="/explore">Explore</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>

            

        </nav>
    </header>
    );
}


