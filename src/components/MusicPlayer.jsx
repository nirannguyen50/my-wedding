export default function MusicPlayer() {
    return (
        <div style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            zIndex: 9999,
            opacity: 0.6,
            pointerEvents: 'none'
        }}>
            <iframe
                width="1"
                height="1"
                src="https://www.youtube.com/embed/RXZiMZSkPeY?autoplay=1&mute=0&loop=1&playlist=RXZiMZSkPeY"
                title="Background Music"
                frameBorder="0"
                allow="autoplay; encrypted-media"
            ></iframe>
        </div>
    )
}
