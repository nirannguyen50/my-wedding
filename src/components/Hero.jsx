import { useState, useEffect } from 'react'
import heroImg from '@assets/MT-3.jpg'
import './Hero.css'

export default function Hero() {
    const [timeLeft, setTimeLeft] = useState({})
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        setLoaded(true)
        const weddingDate = new Date('2026-04-04T16:00:00+07:00')
        const timer = setInterval(() => {
            const now = new Date()
            const diff = weddingDate - now
            if (diff <= 0) {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
                return
            }
            setTimeLeft({
                days: Math.floor(diff / (1000 * 60 * 60 * 24)),
                hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((diff / (1000 * 60)) % 60),
                seconds: Math.floor((diff / 1000) % 60),
            })
        }, 1000)
        return () => clearInterval(timer)
    }, [])

    return (
        <section id="hero" className="hero">
            <div className="hero-bg">
                <img src={heroImg} alt="Cat Tuong & Thu Minh" />
                <div className="hero-overlay" />
            </div>

            <div className={`hero-content ${loaded ? 'loaded' : ''}`}>
                <div className="flight-banner hero-anim hero-anim-1">
                    <span className="material-icons">flight</span>
                    <span>CHUYẾN BAY TM0404</span>
                    <span className="dot">•</span>
                    <span>THE JOURNEY AIR</span>
                </div>

                <h1 className="hero-title hero-anim hero-anim-2">
                    <span className="groom-name">Cát Tường</span>
                    <span className="ampersand">&</span>
                    <span className="bride-name">Thu Minh</span>
                </h1>

                <p className="hero-subtitle hero-anim hero-anim-3">
                    Chúng tôi sắp cất cánh trên hành trình mới. Hãy thắt dây an toàn
                    cho một lễ kỷ niệm tình yêu, tiếng cười và hạnh phúc mãi mãi.
                </p>

                <div className="flight-info-strip hero-anim hero-anim-4">
                    <div className="flight-info-item">
                        <span className="material-icons">schedule</span>
                        <div>
                            <span className="fi-label">Trạng thái</span>
                            <span className="fi-value on-time">Đúng giờ</span>
                        </div>
                    </div>
                    <div className="flight-info-divider" />
                    <div className="flight-info-item">
                        <span className="material-icons">wb_sunny</span>
                        <div>
                            <span className="fi-label">Thời tiết</span>
                            <span className="fi-value">Tuyệt đẹp</span>
                        </div>
                    </div>
                    <div className="flight-info-divider" />
                    <div className="flight-info-item">
                        <span className="material-icons">place</span>
                        <div>
                            <span className="fi-label">Điểm đến</span>
                            <span className="fi-value">Mãi mãi ❤️</span>
                        </div>
                    </div>
                </div>

                <div className="countdown hero-anim hero-anim-5">
                    <div className="countdown-label">
                        <span className="material-icons">timer</span>
                        Đếm ngược cất cánh
                    </div>
                    <div className="countdown-grid">
                        {[
                            { val: timeLeft.days, label: 'Ngày' },
                            { val: timeLeft.hours, label: 'Giờ' },
                            { val: timeLeft.minutes, label: 'Phút' },
                            { val: timeLeft.seconds, label: 'Giây' },
                        ].map((item, i) => (
                            <div className="countdown-item" key={i}>
                                <span className="count-num">
                                    {String(item.val ?? 0).padStart(2, '0')}
                                </span>
                                <span className="count-label">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="hero-actions hero-anim hero-anim-6">
                    <a href="#rsvp" className="btn-primary">
                        <span className="material-icons">confirmation_number</span>
                        Check-in Ngay
                    </a>
                    <a href="#story" className="btn-secondary">
                        <span className="material-icons">auto_stories</span>
                        Chuyện Tình Yêu
                    </a>
                </div>
            </div>

            <div className="scroll-indicator">
                <span className="material-icons">keyboard_arrow_down</span>
            </div>
        </section>
    )
}
