import { useState } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'
import './Rsvp.css'

// 👉 Paste URL deploy Apps Script của bạn vào đây
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyGFEP0jBPwUEKhjRcgV9oOO7c8gGrFb-xEVVPDvQCmlG7Bym99Bs3wL1DpLxCfkEmV-w/exec'

export default function Rsvp() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        attending: 'yes',
        guests: '1',
        message: '',
    })
    const [submitted, setSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [headerRef, headerVisible] = useScrollReveal()
    const [passRef, passVisible] = useScrollReveal({ threshold: 0.1 })
    const [formRef, formVisible] = useScrollReveal({ threshold: 0.1 })

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError(null)

        try {
            const params = new URLSearchParams({
                name: formData.name,
                phone: formData.phone,
                guests: formData.attending === 'yes' ? formData.guests : '0',
                message: formData.message || '(Không có lời chúc)',
            })

            await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: params.toString(),
                mode: 'no-cors',
            })

            setSubmitted(true)
        } catch (err) {
            console.error('RSVP error:', err)
            setError('Có lỗi xảy ra. Vui lòng thử lại!')
        } finally {
            setLoading(false)
        }
    }

    return (
        <section id="rsvp" className="rsvp-section">
            <div className="section-wrapper">
                <div ref={headerRef} className={`section-header reveal ${headerVisible ? 'visible' : ''}`}>
                    <div className="terminal-badge">
                        <span className="material-icons">confirmation_number</span>
                        TERMINAL 4
                    </div>
                    <h2>Xác Nhận Tham Dự</h2>
                    <p>Sự hiện diện của bạn là niềm vinh hạnh của chúng tôi.</p>
                </div>

                <div className="rsvp-grid">
                    <div ref={passRef} className={`rsvp-boarding-pass reveal-left ${passVisible ? 'visible' : ''}`}>
                        <div className="rsvp-bp-header">
                            <span className="material-icons">flight</span>
                            <span>THẺ LÊN MÁY BAY</span>
                        </div>
                        <div className="rsvp-bp-body">
                            <div className="rsvp-bp-row">
                                <div className="rsvp-bp-col">
                                    <span className="rsvp-bp-label">Hành khách</span>
                                    <span className={`rsvp-bp-value highlight ${formData.name ? 'filled' : 'placeholder'}`}>
                                        {formData.name ? formData.name.toUpperCase() : 'TÊN CỦA BẠN'}
                                    </span>
                                </div>
                            </div>
                            <div className="rsvp-bp-row triple">
                                <div className="rsvp-bp-col">
                                    <span className="rsvp-bp-label">Chuyến bay</span>
                                    <span className="rsvp-bp-value">TM0404</span>
                                </div>
                                <div className="rsvp-bp-col">
                                    <span className="rsvp-bp-label">Từ</span>
                                    <span className="rsvp-bp-value">ĐỘC THÂN</span>
                                </div>
                                <div className="rsvp-bp-col">
                                    <span className="rsvp-bp-label">Đến</span>
                                    <span className="rsvp-bp-value">KẾT HÔN</span>
                                </div>
                            </div>
                            <div className="rsvp-bp-divider" />
                            <div className="rsvp-bp-row triple">
                                <div className="rsvp-bp-col">
                                    <span className="rsvp-bp-label">Ngày</span>
                                    <span className="rsvp-bp-value large">04 APR</span>
                                </div>
                                <div className="rsvp-bp-col">
                                    <span className="rsvp-bp-label">Giờ</span>
                                    <span className="rsvp-bp-value large">16:00</span>
                                </div>
                                <div className="rsvp-bp-col">
                                    <span className="rsvp-bp-label">Số khách</span>
                                    <span className="rsvp-bp-value large">{formData.attending === 'yes' ? formData.guests : '—'}</span>
                                </div>
                            </div>
                            <div className="rsvp-bp-row">
                                <div className="rsvp-bp-col full">
                                    <span className="rsvp-bp-label">Điểm đến</span>
                                    <span className="rsvp-bp-value">
                                        <span className="material-icons">place</span>
                                        Chloe Gallery
                                    </span>
                                </div>
                            </div>
                            <div className="rsvp-bp-divider" />
                            <div className="rsvp-bp-row">
                                <div className="rsvp-bp-col">
                                    <span className="rsvp-bp-label">Liên hệ</span>
                                    <span className="rsvp-bp-value">{formData.phone || '—'}</span>
                                </div>
                                <div className="rsvp-bp-col">
                                    <span className="rsvp-bp-label">Trạng thái</span>
                                    <span className={`rsvp-bp-status ${formData.attending === 'yes' ? 'confirmed' : 'cancelled'}`}>
                                        <span className="material-icons">{formData.attending === 'yes' ? 'check_circle' : 'cancel'}</span>
                                        {formData.attending === 'yes' ? 'XÁC NHẬN' : 'KHÔNG ĐẾN'}
                                    </span>
                                </div>
                            </div>
                            {formData.message && (
                                <div className="rsvp-bp-row">
                                    <div className="rsvp-bp-col full">
                                        <span className="rsvp-bp-label">Lời chúc</span>
                                        <span className="rsvp-bp-message">"{formData.message}"</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div ref={formRef} className={`rsvp-form-card reveal-right ${formVisible ? 'visible' : ''}`}>
                        {!submitted ? (
                            <form onSubmit={handleSubmit}>
                                <h3>
                                    <span className="material-icons">edit</span>
                                    Xác Nhận Tham Gia
                                </h3>

                                <div className="form-group">
                                    <label>
                                        <span className="material-icons">person</span>
                                        Họ và tên
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Nhập tên của bạn"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label>
                                        <span className="material-icons">phone</span>
                                        Số điện thoại
                                    </label>
                                    <input
                                        type="tel"
                                        placeholder="Nhập số điện thoại"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label>
                                        <span className="material-icons">event_available</span>
                                        Bạn sẽ tham gia?
                                    </label>
                                    <div className="radio-group">
                                        <label className={`radio-card ${formData.attending === 'yes' ? 'active' : ''}`}>
                                            <input
                                                type="radio"
                                                name="attending"
                                                value="yes"
                                                checked={formData.attending === 'yes'}
                                                onChange={(e) => setFormData({ ...formData, attending: e.target.value })}
                                            />
                                            <span className="material-icons">check_circle</span>
                                            Có, tôi sẽ đến
                                        </label>
                                        <label className={`radio-card ${formData.attending === 'no' ? 'active' : ''}`}>
                                            <input
                                                type="radio"
                                                name="attending"
                                                value="no"
                                                checked={formData.attending === 'no'}
                                                onChange={(e) => setFormData({ ...formData, attending: e.target.value })}
                                            />
                                            <span className="material-icons">cancel</span>
                                            Xin lỗi, tôi bận
                                        </label>
                                    </div>
                                </div>

                                {formData.attending === 'yes' && (
                                    <div className="form-group">
                                        <label>
                                            <span className="material-icons">groups</span>
                                            Số người tham dự
                                        </label>
                                        <select
                                            value={formData.guests}
                                            onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                                        >
                                            {[1, 2, 3, 4, 5].map(n => (
                                                <option key={n} value={n}>{n} người</option>
                                            ))}
                                        </select>
                                    </div>
                                )}

                                <div className="form-group">
                                    <label>
                                        <span className="material-icons">chat</span>
                                        Lời chúc
                                    </label>
                                    <textarea
                                        placeholder="Gửi lời chúc đến cô dâu và chú rể..."
                                        rows={3}
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    />
                                </div>

                                {error && (
                                    <div className="rsvp-error">
                                        <span className="material-icons">error_outline</span>
                                        {error}
                                    </div>
                                )}

                                <button type="submit" className="btn-primary submit-btn" disabled={loading}>
                                    <span className="material-icons">{loading ? 'hourglass_empty' : 'send'}</span>
                                    {loading ? 'Đang gửi...' : 'Gửi Xác Nhận'}
                                </button>
                            </form>
                        ) : (
                            <div className="success-message">
                                <div className="success-icon">
                                    <span className="material-icons">flight_takeoff</span>
                                </div>
                                <h3>Check-in Thành Công!</h3>
                                <p>Cảm ơn bạn <strong>{formData.name}</strong>!</p>
                                <p>Boarding pass của bạn đã được xác nhận cho chuyến bay TM0404.</p>
                                <div className="success-details">
                                    <span><span className="material-icons">event</span> 04.04.2026</span>
                                    <span><span className="material-icons">schedule</span> 16:00</span>
                                    <span><span className="material-icons">place</span> Chloe Gallery</span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}
