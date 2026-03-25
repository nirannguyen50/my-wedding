import useScrollReveal from '../hooks/useScrollReveal'
import './Parking.css'

export default function Parking() {
    const [headerRef, headerVisible] = useScrollReveal()
    const [gridRef, gridVisible] = useScrollReveal({ threshold: 0.1 })

    return (
        <section id="parking" className="parking-section">
            <div className="section-wrapper">
                <div ref={headerRef} className={`section-header reveal ${headerVisible ? 'visible' : ''}`}>
                    <div className="terminal-badge">
                        <span className="material-icons">local_parking</span>
                        INFORMATION
                    </div>
                    <h2>Hướng Dẫn Gửi Xe</h2>
                    <p>Để thuận tiện cho việc tham dự, quý khách vui lòng xem thông tin bên dưới.</p>
                </div>

                <div ref={gridRef} className={`parking-grid reveal-up ${gridVisible ? 'visible' : ''}`}>
                    <div className="parking-card">
                        <div className="card-icon">
                            <span className="material-icons">pedal_bike</span>
                        </div>
                        <h3>Xe Máy</h3>
                        <p>Quý khách vui lòng gửi xe tại bãi xe của <strong>Chloe Gallery</strong></p>
                        <div className="card-hint">
                            <span className="material-icons">info</span>
                            Miễn phí cho khách mời
                        </div>
                    </div>

                    <div className="parking-card highlight">
                        <div className="card-icon">
                            <span className="material-icons">directions_car</span>
                        </div>
                        <h3>Ô Tô</h3>
                        <p>Có bãi đỗ xe ô tô rộng rãi ngay phía trước sảnh hoặc khu vực dọc đường <strong>Phan Văn Chương</strong>.</p>
                        <div className="card-hint">
                            <span className="material-icons">check_circle</span>
                            Có nhân viên hướng dẫn
                        </div>
                    </div>

                    <div className="parking-card map-card">
                        <div className="card-icon">
                            <span className="material-icons">map</span>
                        </div>
                        <h3>Bản Đồ Chỉ Đường</h3>
                        <p>Xem bản đồ chi tiết hướng dẫn di chuyển đến địa điểm tổ chức Chloe Gallery.</p>
                        <a href="https://maps.app.goo.gl/9uoSNBCuAXuPg6Ga8" target="_blank" rel="noopener noreferrer" className="btn-primary map-btn">
                            <span className="material-icons">location_on</span>
                            Xem Bản Đồ (Google Maps)
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
