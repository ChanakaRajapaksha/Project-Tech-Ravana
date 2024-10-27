import { useEffect, useRef } from 'react';

const BackgroundAudio = () => {
    const audioRef = useRef(null);

    useEffect(() => {
        const playAudio = () => {
            if (audioRef.current) {
                audioRef.current.volume = 0.8; // Set a low volume
                audioRef.current.play().catch((error) => {
                    console.error("Audio playback failed:", error);
                });
            }
        };

        // Try to autoplay audio on load
        playAudio();

        // Optional: Uncomment to allow playback on user interaction
        // window.addEventListener('click', playAudio);

        return () => {
            // Cleanup any event listeners if added
            // window.removeEventListener('click', playAudio);
        };
    }, []);

    return (
        <audio ref={audioRef} src="/audio.mp3" preload="auto" loop />
    );
};

export default BackgroundAudio;