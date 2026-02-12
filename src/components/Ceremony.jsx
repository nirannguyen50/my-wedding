import ceremonyImg from '@assets/MT-7.jpg'
import useScrollReveal from '../hooks/useScrollReveal'
import './Ceremony.css'

export default function Ceremony() {
    const [headerRef, headerVisible] = useScrollReveal()
    const [cardRef, cardVisible] = useScrollReveal({ threshold: 0.1 })
    const [sideRef, sideVisible] = useScrollReveal({ threshold: 0.1 })

    return (
        <section id="ceremony" className="ceremony-section">
            <div className="section-wrapper">
                <div ref={headerRef} className={`section-header reveal ${headerVisible ? 'visible' : ''}`}>
                    <div className="terminal-badge">
                        <span className="material-icons">door_sliding</span>
                        TERMINAL 2
                    </div>
                    <h2>Cổng Khởi Hành</h2>
                    <p>Vui lòng chuẩn bị thẻ lên máy bay.</p>
                </div>

                <div className="ceremony-grid">
                    <div ref={cardRef} className={`ceremony-card main-card reveal-left ${cardVisible ? 'visible' : ''}`}>
                        <div className="card-glow" />
                        <div className="boarding-header">
                            <span className="material-icons">flight</span>
                            <span>THẺ LÊN MÁY BAY</span>
                        </div>
                        <div className="boarding-body">
                            <div className="boarding-row">
                                <div className="boarding-col">
                                    <span className="boarding-label">Hành khách</span>
                                    <span className="boarding-value">CÁT TƯỜNG & THU MINH</span>
                                </div>
                            </div>
                            <div className="boarding-row">
                                <div className="boarding-col">
                                    <span className="boarding-label">Từ</span>
                                    <span className="boarding-value">ĐỘC THÂN</span>
                                </div>
                                <div className="boarding-col">
                                    <span className="boarding-label">Đến</span>
                                    <span className="boarding-value">KẾT HÔN</span>
                                </div>
                                <div className="boarding-col">
                                    <span className="boarding-label">Chuyến bay</span>
                                    <span className="boarding-value">TM0404</span>
                                </div>
                            </div>
                            <div className="boarding-divider" />
                            <div className="boarding-row">
                                <div className="boarding-col">
                                    <span className="boarding-label">Ngày</span>
                                    <span className="boarding-value large">04.04.2026</span>
                                </div>
                                <div className="boarding-col">
                                    <span className="boarding-label">Giờ</span>
                                    <span className="boarding-value large">16:00</span>
                                </div>
                            </div>
                            <div className="boarding-row">
                                <div className="boarding-col full">
                                    <span className="boarding-label">Địa điểm</span>
                                    <span className="boarding-value">
                                        <span className="material-icons">place</span>
                                        Chloe Gallery
                                    </span>
                                </div>
                            </div>
                            <div className="boarding-row">
                                <div className="boarding-col">
                                    <span className="boarding-label">Cổng</span>
                                    <span className="boarding-value">TÌNH YÊU</span>
                                </div>
                                <div className="boarding-col">
                                    <span className="boarding-label">Ghế</span>
                                    <span className="boarding-value">MÃI MÃI</span>
                                </div>
                                <div className="boarding-col">
                                    <span className="boarding-label">Hành lý</span>
                                    <span className="boarding-value">Chỉ Niềm Vui</span>
                                </div>
                            </div>
                        </div>
                        <div className="boarding-tear">
                            {Array.from({ length: 30 }).map((_, i) => (
                                <div className="tear-circle" key={i} />
                            ))}
                        </div>
                        <div className="boarding-footer">
                            <div className="barcode">
                                {Array.from({ length: 40 }).map((_, i) => (
                                    <div
                                        className="bar"
                                        key={i}
                                        style={{ height: `${15 + Math.random() * 20}px` }}
                                    />
                                ))}
                            </div>
                            <span className="barcode-text">CT&TM-04042026-LOVE</span>
                        </div>
                    </div>

                    <div ref={sideRef} className={`ceremony-side reveal-right ${sideVisible ? 'visible' : ''}`}>
                        <div className="ceremony-img-wrap">
                            <img src={ceremonyImg} alt="Ceremony" />
                            <div className="img-overlay" />
                        </div>

                        <div className="gate-notice">
                            <span className="material-icons blink">notifications_active</span>
                            <div>
                                <strong>VUI LÒNG ĐẾN CỔNG NGAY</strong>
                                <p>Chuyến bay sắp khởi hành. Tất cả hành khách vui lòng đến Cổng TÌNH YÊU cho chuyến bay TM0404.</p>
                            </div>
                        </div>

                        <div className="registry-card">
                            <span className="material-icons">card_giftcard</span>
                            <h4>Mừng Cưới</h4>
                            <p>Sự hiện diện của bạn là món quà quý giá nhất. Nếu bạn muốn gửi lời chúc phúc, chúng tôi trân trọng tấm lòng của bạn.</p>
                            <a href="#rsvp" className="btn-secondary">
                                Xem Chi Tiết
                                <span className="material-icons">arrow_forward</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
