import useScrollReveal from '../hooks/useScrollReveal'
import './Dresscode.css'

export default function Dresscode() {
    const [headerRef, headerVisible] = useScrollReveal()
    const [gridRef, gridVisible] = useScrollReveal({ threshold: 0.1 })
    const [notesRef, notesVisible] = useScrollReveal()

    return (
        <section id="dresscode" className="dresscode-section">
            <div className="section-wrapper">
                <div ref={headerRef} className={`section-header reveal ${headerVisible ? 'visible' : ''}`}>
                    <div className="terminal-badge">
                        <span className="material-icons">checkroom</span>
                        TERMINAL 3
                    </div>
                    <h2>Trang Phục Khách Mời</h2>
                    <p>Tone trang phục: <strong>Nhạt</strong>. Chúng tôi mong quý khách đến với trang phục lịch sự, trang trọng.</p>
                </div>

                <div ref={gridRef} className={`dresscode-grid stagger reveal ${gridVisible ? 'visible' : ''}`}>
                    <div className="color-card">
                        <div className="color-swatch" style={{ background: 'linear-gradient(135deg, #ffffff, #f0f0f0)', border: '1px solid #ddd' }} />
                        <h4>Trắng</h4>
                        <span className="color-role">Thanh khiết</span>
                        <p>Lựa chọn tuyệt vời cho sự sang trọng dành cho các quý ông.</p>
                    </div>

                    <div className="color-card">
                        <div className="color-swatch" style={{ background: 'linear-gradient(135deg, #000000, #333333)' }} />
                        <h4>Đen</h4>
                        <span className="color-role">Lịch lãm</span>
                        <p>Tông màu kinh điển cho các buổi tiệc.</p>
                    </div>

                    <div className="color-card">
                        <div className="color-swatch" style={{ background: 'linear-gradient(135deg, #00008b, #000055)' }} />
                        <h4>Xanh Đậm</h4>
                        <span className="color-role">Trang trọng</span>
                        <p>Sâu lắng và đầy cá tính.</p>
                    </div>

                    <div className="color-card">
                        <div className="color-swatch" style={{ background: 'linear-gradient(135deg, #fff5f5, #fff0f5)' }} />
                        <h4>Pastel</h4>
                        <span className="color-role">Nhẹ nhàng</span>
                        <p>Nhẹ nhàng và đầy tinh tế.</p>
                    </div>
                </div>

                <div ref={notesRef} className={`dresscode-notes stagger reveal ${notesVisible ? 'visible' : ''}`}>
                    <div className="note-card gentlemen">
                        <span className="material-icons">man</span>
                        <div>
                            <strong>Quý ông</strong>
                            <p>Khuyến khích mặc vest tối màu.</p>
                        </div>
                    </div>
                    <div className="note-card ladies">
                        <span className="material-icons">woman</span>
                        <div>
                            <strong>Quý bà</strong>
                            <p>Xin vui lòng tránh váy trắng tinh để tôn vinh cô dâu.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
