
export default function Navbar() {
    return (
        <header className="header">
        <nav className="navbar container">

            <a href="#" className="logo">
                elev<span>ate.</span>
            </a>

            <ul className="nav-links">
                <li><a href="/" className="active">Home</a></li>
                <li><a href="explore">Explore</a></li>
                <li><a href="about">About</a></li>
            </ul>

            

        </nav>
    </header>
    );
}


