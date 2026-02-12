import storyImg1 from '@assets/MT-10.jpg'
import storyImg2 from '@assets/MT-25.jpg'
import storyImg3 from '@assets/MT-50.jpg'
import useScrollReveal from '../hooks/useScrollReveal'
import './Story.css'

const milestones = [
    {
        year: '2014',
        location: 'Sài Gòn',
        title: 'Lần đầu gặp gỡ',
        desc: 'Cùng học thêm môn Toán từ năm lớp 11, lên 12 có duyên được dưới ách thống trị của thầy Bình chủ nhiệm, và hành trình của tụi mình từ đó bắt đầu...!',
        icon: 'local_cafe',
        img: storyImg1,
        imgPos: 'center 15%',
    },
    {
        year: '2016',
        location: 'Đà Lạt',
        title: 'Lời tỏ tình',
        desc: 'Tui "crush" bà Min từ hồi đi Đà Lạt kết thúc hành trình cấp 3 chung với lớp, nhưng sau đó lại "được" bà gài bẫy qua tin nhắn và thế là tụi tui dính nhau tới giờ cũng được 10 năm...',
        icon: 'favorite',
        img: storyImg2,
        imgPos: 'center 30%',
    },
    {
        year: '2026',
        location: 'Sài Gòn',
        title: 'Ngày chung đôi',
        desc: 'Đến hôm nay tui quyết tâm "trả thù xưa"...Dưới gốc đa ngay chỗ công viên đằng sau trường Nguyễn Hữu Huân...tui thành công "bẫy" bà vô tròng...hehe!!',
        icon: 'diamond',
        img: storyImg3,
        imgPos: 'center 30%',
    },
]

export default function Story() {
    const [headerRef, headerVisible] = useScrollReveal()
    const [timelineRef, timelineVisible] = useScrollReveal({ threshold: 0.1 })
    const [pathRef, pathVisible] = useScrollReveal()

    return (
        <section id="story" className="story-section">
            <div className="section-wrapper">
                <div
                    ref={headerRef}
                    className={`section-header reveal ${headerVisible ? 'visible' : ''}`}
                >
                    <div className="terminal-badge">
                        <span className="material-icons">timeline</span>
                        TERMINAL 1
                    </div>
                    <h2>Hành Trình Tình Yêu</h2>
                    <p>Những cột mốc đáng nhớ từ ngày đầu đến bến bờ hạnh phúc.</p>
                </div>

                <div ref={timelineRef} className="timeline">
                    <div className={`timeline-line ${timelineVisible ? 'animate-line' : ''}`} />
                    {milestones.map((m, i) => (
                        <div
                            className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'} ${timelineVisible ? 'visible' : ''
                                }`}
                            key={i}
                            style={{ transitionDelay: `${i * 0.25}s` }}
                        >
                            <div className="timeline-dot">
                                <span className="material-icons">{m.icon}</span>
                            </div>
                            <div className="timeline-card">
                                <div className="timeline-card-img">
                                    <img src={m.img} alt={m.title} style={{ objectPosition: m.imgPos }} />
                                    <div className="card-img-overlay" />
                                </div>
                                <div className="timeline-card-body">
                                    <div className="timeline-meta">
                                        <span className="timeline-year">{m.year}</span>
                                        <span className="timeline-location">
                                            <span className="material-icons">place</span>
                                            {m.location}
                                        </span>
                                    </div>
                                    <h3>{m.title}</h3>
                                    <p>{m.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div
                    ref={pathRef}
                    className={`flight-path-visual reveal ${pathVisible ? 'visible' : ''}`}
                >
                    <div className="path-dot start" />
                    <div className="path-dashed" />
                    <div className="path-plane">
                        <span className="material-icons">flight</span>
                    </div>
                    <div className="path-dashed" />
                    <div className="path-dot end" />
                </div>
            </div>
        </section>
    )
}
