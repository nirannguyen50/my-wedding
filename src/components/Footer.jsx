import useScrollReveal from '../hooks/useScrollReveal'
import './Footer.css'

export default function Footer() {
    const [footerRef, footerVisible] = useScrollReveal({ threshold: 0.2 })

    return (
        <footer ref={footerRef} className={`footer reveal ${footerVisible ? 'visible' : ''}`}>
            <div className="section-wrapper">
                <div className="footer-top">
                    <div className="footer-logo">
                        <span className="material-icons">flight</span>
                        <span>The Journey Air</span>
                    </div>
                    <p className="footer-tagline">Chuyến bay TM0404 • Vận hành bởi The Journey Air</p>
                </div>

                <div className="footer-links">
                    <a href="#hero">Trang Chủ</a>
                    <a href="#story">Chuyện Tình Yêu</a>
                    <a href="#ceremony">Lễ Cưới</a>
                    <a href="#gallery">Album</a>
                    <a href="#rsvp">Xác Nhận</a>
                </div>

                <div className="footer-divider" />

                <div className="footer-bottom">
                    <p>© 2026 Cát Tường & Thu Minh. Mọi quyền được bảo lưu.</p>
                    <p className="footer-made">Được tạo với ❤️</p>
                </div>
            </div>
        </footer>
    )
}
