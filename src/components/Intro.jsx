import { useState, useEffect } from 'react'
import './Intro.css'
import AirplaneModel from './AirplaneModel'

export default function Intro({ onCheckIn }) {
    const [animationDone, setAnimationDone] = useState(false)
    const [fadeOut, setFadeOut] = useState(false)
    const [isCheckingIn, setIsCheckingIn] = useState(false)

    useEffect(() => {
        // Plane initial animation delay before showing buttons
        const timer = setTimeout(() => {
            setAnimationDone(true)
        }, 3000)
        return () => clearTimeout(timer)
    }, [])

    const handleCheckIn = () => {
        setIsCheckingIn(true)
        setFadeOut(true)
        // Wait for zoom in animation to door (2s)
        setTimeout(() => {
            onCheckIn()
        }, 2200)
    }

    return (
        <div className={`intro-container ${fadeOut ? 'fade-out-late' : ''}`}>
            {/* 3D Background */}
            <AirplaneModel isCheckingIn={isCheckingIn} />

            {/* Overlay Content */}
            <div className={`intro-content ${animationDone ? 'show' : ''} ${fadeOut ? 'fade-out' : ''}`}>
                <h2 className="intro-title">THE LOVE JOURNEY</h2>
                <h1 className="flight-name">CAT TUONG & THU MINH</h1>
                <p className="flight-code">TM0404</p>

                <button className="btn-checkin" onClick={handleCheckIn}>
                    <span className="material-icons">airplane_ticket</span>
                    Check-in
                </button>
            </div>
        </div>
    )
}
