// Navbar.js
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import './Navbar.css'; // Import CSS file for styling

const Navbar = ({ onSearch, cartItemCount }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu toggle
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 767); // Set isMobile state based on screen width
        };
        handleResize(); // Initial check
        window.addEventListener('resize', handleResize); // Listen for resize events
        return () => window.removeEventListener('resize', handleResize); // Clean up on unmount
    }, []);

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
        <div className="wrapper">
            <header className="container">
                <div className="header">
                    <div className="grid">
                        {isMobile && (
                            <button className="menu-toggle" onClick={toggleMenu}>
                                {/* Toggle button icon */}
                                <div className={isMenuOpen ? "menu-icon open" : "menu-icon"}></div>
                            </button>
                        )}
                        <div className={isMobile && isMenuOpen ? "menu open" : isMobile ? "menu" : "menu desktop"}>
                            {/* Menu items */}
                            {!isMobile && (
                                <>
                                    <Link to="/" className="link">
                                        <h1 className="brand">GrabbGrove</h1>
                                    </Link>
                                    <Link to="/upshot" className="link">
                                        <h1 className="brand2">Upshot</h1>
                                    </Link>
                                                                   </>
                                                                   
                            )}
                            
                        </div>
                        
                        <div className="formContainer">
                            <form className="search">
                                <div className="form-control">
                                    <input type="text" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder="Search Products...." />
                                </div>
                                <button type="button" onClick={handleSubmit} className="search-btn">
                                    Search
                                </button>
                                <Link to="/cart" className="link headerCart">
                                        <img className="cartImg" src="/cart.svg" alt="cart" />
                                        {cartItemCount > 0 && (
                                            <div className="cartCounter">{cartItemCount <= 9 ? cartItemCount : "9+"}</div>
                                        )}
                                    </Link>
                                    <Link to="/login" className="link">
                                        <h1 className="brand3">Login</h1>
                                    </Link>

                            </form>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export { Navbar };
