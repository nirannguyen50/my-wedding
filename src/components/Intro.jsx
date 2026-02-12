import { useState, useEffect } from 'react'
import './Intro.css'

export default function Intro({ onCheckIn }) {
    const [animationDone, setAnimationDone] = useState(false)
    const [fadeOut, setFadeOut] = useState(false)

    useEffect(() => {
        // Plane animation takes 3s (defined in CSS)
        // We set animationDone to true shortly after to show the button
        const timer = setTimeout(() => {
            setAnimationDone(true)
        }, 2500) // Button appears slightly before plane finishes leaving screen
        return () => clearTimeout(timer)
    }, [])

    const handleCheckIn = () => {
        setFadeOut(true)
        // Wait for fade out transition (0.8s) before unmounting
        setTimeout(() => {
            onCheckIn()
        }, 800)
    }

    return (
        <div className={`intro-container ${fadeOut ? 'fade-out' : ''}`}>
            <div className="sky-track">
                <div className="plane-wrapper">
                    <span className="material-icons plane-icon">flight</span>
                    <div className="contrail"></div>
                </div>
            </div>

            <div className={`intro-content ${animationDone ? 'show' : ''}`}>
                <h2 className="intro-title">Welcome to</h2>
                <h1 className="flight-name">The Journey Air</h1>
                <p className="flight-code">TM0404</p>

                <button className="btn-checkin" onClick={handleCheckIn}>
                    <span className="material-icons">airplane_ticket</span>
                    Check-in
                </button>
            </div>
        </div>
    )
}
