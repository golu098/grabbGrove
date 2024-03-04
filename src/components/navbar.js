// Navbar.js
import { Link } from "react-router-dom";
import { useState } from "react";
import './Navbar.css'; // Import CSS file for styling

const Navbar = ({ onSearch, cartItemCount }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu toggle

    const handleSubmit = () => {
        if (searchQuery.trim().length) {
            onSearch(searchQuery.trim());
        }
        setSearchQuery('');
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Toggle menu state
    };

    return (
        <>
            <div className="wrapper">
                <header className="container">
                    <div className="header py-2">
                        <div className="grid">
                            <button className="menu-toggle" onClick={toggleMenu}>
                                {/* Toggle button icon */}
                                <div className={isMenuOpen ? "menu-icon open" : "menu-icon"}></div>
                            </button>
                            <div className={isMenuOpen ? "menu open" : "menu"}>
                                {/* Menu items */}
                                <Link to="/" className="link">
                                    <h1 className="brand">GrabbGrove</h1>
                                </Link>
                                <Link to="/upshot" className="link">
                                    <h1 className="brand2">Upshot</h1>
                                </Link>
                            </div>
                            <div className="formContainer">
                                <form className="search">
                                    <div className="form-control">
                                        <input type="text" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder="Search Products...." />
                                    </div>
                                    <button type="button" onClick={handleSubmit} className="search-btn">
                                        Search
                                    </button>
                                    

                                </form>
                            </div>

                            <Link to="/upshot" className="link">
                                    <h1 className="brand3">Login</h1>
                                </Link>
                            <Link to="/cart" className="link headerCart">
                                <img className="cartImg" src="/cart.svg" alt="cart" />
                                {cartItemCount > 0 && (
                                    <div className="cartCounter">{cartItemCount <= 9 ? cartItemCount : "9+"}</div>
                                )}
                            </Link>

                        </div>
                    </div>
                </header>
            </div>
        </>
    );
};

export { Navbar };
