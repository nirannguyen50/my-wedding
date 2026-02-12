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
                    <p>Chúng tôi mong quý khách đến với trang phục lịch sự, trang trọng.</p>
                </div>

                <div ref={gridRef} className={`dresscode-grid stagger reveal ${gridVisible ? 'visible' : ''}`}>
                    <div className="color-card">
                        <div className="color-swatch" style={{ background: 'linear-gradient(135deg, #c9a96e, #e8c990)' }} />
                        <h4>Vàng Hồng</h4>
                        <span className="color-role">Màu chủ đạo</span>
                        <p>Gợi ý cho phụ kiện và chi tiết trang phục.</p>
                    </div>

                    <div className="color-card">
                        <div className="color-swatch" style={{ background: 'linear-gradient(135deg, #f0ede8, #ffffff)' }} />
                        <h4>Trắng Mây</h4>
                        <span className="color-role">Tông nền</span>
                        <p>Phù hợp cho áo sơ mi và lớp áo nhẹ.</p>
                    </div>

                    <div className="color-card">
                        <div className="color-swatch" style={{ background: 'linear-gradient(135deg, #1a1a2e, #2d2d44)' }} />
                        <h4>Xanh Đêm</h4>
                        <span className="color-role">Tông trang trọng</span>
                        <p>Gợi ý cho vest và trang phục dạ tiệc.</p>
                    </div>
                </div>

                <div ref={notesRef} className={`dresscode-notes stagger reveal ${notesVisible ? 'visible' : ''}`}>
                    <div className="note-card gentlemen">
                        <span className="material-icons">man</span>
                        <div>
                            <strong>Quý ông</strong>
                            <p>Khuyến khích mặc vest tối màu, phối phụ kiện tone Rose Gold.</p>
                        </div>
                    </div>
                    <div className="note-card ladies">
                        <span className="material-icons">woman</span>
                        <div>
                            <strong>Quý bà</strong>
                            <p>Xin vui lòng tránh váy trắng tinh để tôn vinh cô dâu. Tone pastel hoặc rose gold được khuyến khích.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
