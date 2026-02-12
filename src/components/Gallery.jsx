import { useState } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'
import './Gallery.css'

/* Import a curated selection of wedding photos */
import img1 from '@assets/MT-3.jpg'
import img2 from '@assets/MT-5.jpg'
import img3 from '@assets/MT-8.jpg'
import img4 from '@assets/MT-12.jpg'
import img5 from '@assets/MT-14.jpg'
import img6 from '@assets/MT-18.jpg'
import img7 from '@assets/MT-20.jpg'
import img8 from '@assets/MT-24.jpg'
import img9 from '@assets/MT-26.jpg'
import img10 from '@assets/MT-30.jpg'
import img11 from '@assets/MT-35.jpg'
import img12 from '@assets/MT-38.jpg'
import img13 from '@assets/MT-42.jpg'
import img14 from '@assets/MT-48.jpg'
import img15 from '@assets/MT-55.jpg'
import img16 from '@assets/MT-60.jpg'
import img17 from '@assets/MT-70.jpg'
import img18 from '@assets/MT-75.jpg'
import img19 from '@assets/MT-80.jpg'
import img20 from '@assets/MT-90.jpg'

const photos = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
    img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,
]

export default function Gallery() {
    const [lightbox, setLightbox] = useState(null)
    const [visibleCount, setVisibleCount] = useState(12)
    const [headerRef, headerVisible] = useScrollReveal()
    const [gridRef, gridVisible] = useScrollReveal({ threshold: 0.05 })

    return (
        <section id="gallery" className="gallery-section">
            <div className="section-wrapper">
                <div ref={headerRef} className={`section-header reveal ${headerVisible ? 'visible' : ''}`}>
                    <div className="terminal-badge">
                        <span className="material-icons">photo_library</span>
                        IN-FLIGHT ENTERTAINMENT
                    </div>
                    <h2>Khoảnh Khắc Hạnh Phúc</h2>
                    <p>Bộ sưu tập những khoảnh khắc đáng nhớ trên hành trình của chúng tôi.</p>
                </div>

                <div ref={gridRef} className={`gallery-grid ${gridVisible ? 'gallery-animated' : ''}`}>
                    {photos.slice(0, visibleCount).map((src, i) => (
                        <div
                            className={`gallery-item ${i % 5 === 0 ? 'tall' : ''} ${i % 7 === 0 ? 'wide' : ''}`}
                            key={i}
                            onClick={() => setLightbox(i)}
                            style={{ animationDelay: `${i * 0.08}s` }}
                        >
                            <img src={src} alt={`Wedding moment ${i + 1}`} loading="lazy" />
                            <div className="gallery-overlay">
                                <span className="material-icons">zoom_in</span>
                            </div>
                        </div>
                    ))}
                </div>

                {visibleCount < photos.length && (
                    <div className="gallery-more">
                        <button
                            className="btn-secondary"
                            onClick={() => setVisibleCount(photos.length)}
                        >
                            <span className="material-icons">expand_more</span>
                            Xem thêm ảnh
                        </button>
                    </div>
                )}
            </div>

            {lightbox !== null && (
                <div className="lightbox" onClick={() => setLightbox(null)}>
                    <button className="lightbox-close" onClick={() => setLightbox(null)}>
                        <span className="material-icons">close</span>
                    </button>
                    <button
                        className="lightbox-nav prev"
                        onClick={(e) => {
                            e.stopPropagation()
                            setLightbox((lightbox - 1 + photos.length) % photos.length)
                        }}
                    >
                        <span className="material-icons">chevron_left</span>
                    </button>
                    <img
                        src={photos[lightbox]}
                        alt="Full view"
                        onClick={(e) => e.stopPropagation()}
                    />
                    <button
                        className="lightbox-nav next"
                        onClick={(e) => {
                            e.stopPropagation()
                            setLightbox((lightbox + 1) % photos.length)
                        }}
                    >
                        <span className="material-icons">chevron_right</span>
                    </button>
                    <div className="lightbox-counter">
                        {lightbox + 1} / {photos.length}
                    </div>
                </div>
            )}
        </section>
    )
}
