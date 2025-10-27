import { RiPauseFill, RiPlayFill } from '@remixicon/react';
import React, { useRef, useState } from 'react'
import ReactPlayer from 'react-player'

const Cta = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const handlePlayPause = () => {
    setIsPlaying(prev => !prev)
  }
  const playerRef = useRef(null)
  return (
    <section className='py-20'>
      <div className="container md:h-[600px] relative bg-white group overflow-hidden rounded-lg">
        <div>
          <ReactPlayer
            src="/images/Cta-video.mp4"
            ref={playerRef}
            playing={isPlaying}
            width="100%"
            height="100%"
            loop
            muted
            playsInline
          />
        </div>

        {/* play/pause button */}
        <button className={`absolute inset-0 m-auto bg-neutral-50/90 w-[60px] h-[60px] flex items-center justify-center rounded-full transition shadow-lg ${isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`} onClick={handlePlayPause}>
          {isPlaying ? <RiPauseFill size={30}/> : <RiPlayFill size={30}/>}
        </button>
      </div>
    </section>
  )
}

export default Cta
