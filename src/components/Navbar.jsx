import { useState, useEffect } from 'react'
import './Navbar.css'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navItems = [
        { label: 'Trang chủ', icon: 'flight_takeoff', href: '#hero' },
        { label: 'Chuyện tình yêu', icon: 'favorite', href: '#story' },
        { label: 'Lễ cưới', icon: 'event', href: '#ceremony' },
        { label: 'Trang phục', icon: 'checkroom', href: '#dresscode' },
        { label: 'Album', icon: 'photo_library', href: '#gallery' },
        { label: 'Xác nhận', icon: 'confirmation_number', href: '#rsvp' },
    ]

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-inner">
                <a href="#hero" className="navbar-logo">
                    <span className="material-icons logo-icon">flight</span>
                    <span className="logo-text">The Journey Air</span>
                    <span className="flight-code">CT&TM</span>
                </a>

                <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <a href={item.href} onClick={() => setMenuOpen(false)}>
                                <span className="material-icons nav-icon">{item.icon}</span>
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <button
                    className={`hamburger ${menuOpen ? 'active' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    )
}
