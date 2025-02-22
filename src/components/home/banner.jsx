import { useEffect } from 'react';
import './banner.css'
import gambar from '../../assets/banner.png'
import { useRef } from 'react';

function Banner() {
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;

        if (video) {
            video.addEventListener("timeupdate", function () {
                if (video.currentTime >= video.duration - 0.15) {
                    video.currentTime = 0;
                    video.play();
                }
            })
        }


        return () => {
            if (video) video.removeEventListener('timeupdate', () => { })
        }
    }, [])

    return (
        <section className='banner'>
            {/* <video ref={videoRef} id='vids' muted playsInline autoPlay loop >
                <source src="/3d.mp4" type='video/mp4' />
            </video> */}
            <img src={gambar} alt="" />
        </section>
    )
}

export default Banner