import { useEffect, useRef, useState } from 'react';
import soundon from '/assets/soundon.png';
import soundoff from '/assets/soundoff.png';
import hand from '/assets/hand.png'; // Import the hand image

import ravana from '/audio.mp3';

const BackgroundAudio = () => {
    const audioRef = useRef(new Audio(ravana));
    audioRef.current.volume = 1;
    audioRef.current.loop = true;

    const [isPlayingMusic, setIsPlayingMusic] = useState(false);

    useEffect(() => {
        if (isPlayingMusic) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }

        return () => {
            audioRef.current.pause();
        };
    }, [isPlayingMusic]);

    return (
        <div className='fixed bottom-1 left-4 flex flex-col items-center space-y-2 p-3 z-10'>
            {/* Hand icon with animation */}
            {!isPlayingMusic && (
                <img
                    src={hand}
                    alt='click here'
                    className='w-10 h-10 animate-bounce mb-2 sm:block hidden' // Bouncing animation
                />
            )}
            {/* Sound button */}
            <img
                src={isPlayingMusic ? soundon : soundoff}
                alt='audio'
                onClick={() => setIsPlayingMusic(!isPlayingMusic)}
                className='w-14 h-14 cursor-pointer object-contain'
            />
        </div>
    );
};

export default BackgroundAudio;